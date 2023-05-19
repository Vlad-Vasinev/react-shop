from rest_framework import generics
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated

from .serializers import OrderListSerializer, OrderDetailSerializer, \
    OrderItemDetailSerializer, OrderItemListSerializer, AdressDetailSerializer, \
    AdressListSerializer
from .models import Order, OrderItem, Adress
from product.models import Choices


class OrderCreateView(generics.CreateAPIView):
    serializer_class = OrderDetailSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class OrderListView(generics.ListAPIView):
    serializer_class = OrderListSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Order.objects.all()
        else:
            return Order.objects.filter(user=user)


class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = OrderDetailSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return Order.objects.filter(user=user)


class OrderItemCreateView(generics.CreateAPIView):
    serializer_class = OrderItemDetailSerializer
    permission_classes = (IsAuthenticated,)
    queryset = OrderItem.objects.all()

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        quantity = request.POST.get('quantity')
        choices = request.POST.get('choices')
        count = Choices.objects.get(id=choices)
        quantity = int(quantity)
        count.count -= quantity
        if count.count == 0:
            count.in_stock = False
        count.save()

        return response


class OrderItemListView(generics.ListAPIView):
    serializer_class = OrderItemListSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return OrderItem.objects.all()
        else:
            return OrderItem.objects.filter(user=user)


class OrderItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = OrderItemDetailSerializer
    permission_classes = (IsAuthenticated,)


    def get_queryset(self):
        user = self.request.user
        return OrderItem.objects.filter(user=user)


class AdressCreateView(generics.CreateAPIView):
    serializer_class = AdressDetailSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class AdressListView(generics.ListAPIView):
    serializer_class = AdressListSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return Adress.objects.filter(user=user)


    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class AdressDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AdressDetailSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return Adress.objects.filter(user=user)
