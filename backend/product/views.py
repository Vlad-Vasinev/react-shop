from rest_framework import generics
from rest_framework import serializers
from rest_framework import filters
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from .permissions import IsAdminOrReadOnly
from .serializers import ProductDetailSerializer, ProductListSerializer, \
    ChoicesDetailSerializer, ChoicesListSerializer, ImagesDetailSerializer, \
    ImagesListSerializer, VideosDetailSerializer, VideosListSerializer, \
    CategoryDetailSerializer, CategoryListSerializer

from .models import Product, Choices, Images, Videos, Category


class CategoryCreateView(generics.CreateAPIView):
    serializer_class = CategoryDetailSerializer
    permission_classes = (IsAdminUser,)


class CategoryListView(generics.ListAPIView):
    serializer_class = CategoryListSerializer
    permission_classes = (AllowAny,)
    queryset = Category.objects.all()


class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategoryDetailSerializer
    permission_classes = (IsAdminOrReadOnly,)
    queryset = Category.objects.all()

    def put(self, request, *args, **kwargs):
        data = request.data
        category = self.get_object()
        category.name = data.get('name', )
        if data.get('image') != '':
            category.image = data.get('image')
        category.save()
        serializer = self.serializer_class(category)
        print(data.get('image'))
        return Response(serializer.data, status=status.HTTP_200_OK)


class VideosCreateView(generics.CreateAPIView):
    serializer_class = VideosDetailSerializer
    permission_classes = (IsAdminUser,)


class VideosListView(generics.ListAPIView):
    serializer_class = VideosListSerializer
    permission_classes = (AllowAny,)
    queryset = Videos.objects.all()


class VideosDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = VideosDetailSerializer
    queryset = Videos.objects.all()

    def put(self, request, *args, **kwargs):
        data = request.data
        video = self.get_object()
        product = Product.objects.get(id=int(data.get('product', )))
        video.product = product
        if data.get('video') != '':
            video.video = data.get('video')
        video.save()
        serializer = self.serializer_class(video)
        print(data.get('video'))
        return Response(serializer.data, status=status.HTTP_200_OK)


class ImagesCreateView(generics.CreateAPIView):
    serializer_class = ImagesDetailSerializer
    permission_classes = (IsAdminUser,)


class ImagesListView(generics.ListAPIView):
    serializer_class = ImagesListSerializer
    permission_classes = (AllowAny,)
    queryset = Images.objects.all()


class ImagesDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ImagesDetailSerializer
    queryset = Images.objects.all()
    permission_classes = (IsAdminOrReadOnly,)

    def put(self, request, *args, **kwargs):
        data = request.data
        image = self.get_object()
        product = Product.objects.get(id=int(data.get('product', )))
        image.product = product
        if data.get('image') != '':
            image.image = data.get('image')
        image.save()
        serializer = self.serializer_class(image)
        print(data.get('video'))
        return Response(serializer.data, status=status.HTTP_200_OK)


class ChoicesCreateView(generics.CreateAPIView):
    serializer_class = ChoicesDetailSerializer
    permission_classes = (IsAdminUser,)
    queryset = Choices.objects.all()

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        data = request.data
        if int(data.get('count')) > 0:
            response.data['in_stock'] = True
        else:
            response.data['in_stock'] = False
        return response


class ChoicesListView(generics.ListAPIView):
    serializer_class = ChoicesListSerializer
    queryset = Choices.objects.all()
    permission_classes = (AllowAny,)


class ChoicesDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ChoicesDetailSerializer
    queryset = Choices.objects.all()
    permission_classes = (IsAdminOrReadOnly,)

    def put(self, request, *args, **kwargs):
        data = request.data
        choice = self.get_object()
        product = Product.objects.get(id=int(data.get('product', )))
        choice.product = product
        choice.name = data.get('name', )
        choice.article_number = data.get('article_number', )
        choice.in_stock = data.get('in_stock', )
        choice.count = data.get('count', )
        choice.price = data.get('price', )
        if data.get('image') != '':
            choice.image = data.get('image')
        if int(data.get('count', )) > 0:
            choice.in_stock = True
        else:
            choice.in_stock = False
        choice.save()
        serializer = self.serializer_class(choice)
        print(data.get('image'))
        return Response(serializer.data, status=status.HTTP_200_OK)


class ProductCreateView(generics.CreateAPIView):
    serializer_class = ProductDetailSerializer
    permission_classes = (IsAdminUser,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ProductListView(generics.ListAPIView):
    user = serializers.PrimaryKeyRelatedField(read_only=True,)
    serializer_class = ProductListSerializer
    queryset = Product.objects.all()
    permission_classes = (AllowAny, )
    filter_backends = [filters.SearchFilter]
    search_fields = ['$name', ]

    # def get_queryset(self):
    #     user = self.request.user
    #     return Product.objects.filter(user=user)


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProductDetailSerializer
    queryset = Product.objects.all()
    permission_classes = (IsAdminOrReadOnly,)

    # def get_queryset(self):
    #     user = self.request.user
    #     return Product.objects.filter(user=user)
