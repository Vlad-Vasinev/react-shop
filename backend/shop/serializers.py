from rest_framework import serializers
from product.serializers import ChoicesListSerializer
from .models import Order, OrderItem, Adress


class AdressDetailSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True, )
    class Meta:
        model = Adress
        fields = ['id', 'country', 'region', 'city', 'street', 'phone', 'postal_code', 'user']


class AdressListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adress
        fields = ['id', 'country', 'region', 'city', 'street', 'phone', 'postal_code', 'user']


class OrderItemDetailSerializer(serializers.ModelSerializer):
    # choices = ChoicesListSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'get_cost', 'choices', 'quantity']


class OrderItemListSerializer(serializers.ModelSerializer):
    choices = ChoicesListSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'get_cost', 'choices', 'quantity', 'order']


class OrderDetailSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True, )
    order = OrderItemListSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'created', 'user', 'updated', 'paid', 'get_total_price', 'order', 'adress']


class OrderListSerializer(serializers.ModelSerializer):
    order = OrderItemListSerializer(many=True, read_only=True)
    adress = AdressListSerializer()

    class Meta:
        model = Order
        fields = ['id', 'created', 'user', 'updated', 'paid', 'get_total_price', 'order', 'adress']
