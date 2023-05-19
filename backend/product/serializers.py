from rest_framework import serializers
from .models import Product, Choices, Images, Videos, Category


class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class CategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class VideosDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Videos
        fields = '__all__'


class VideosListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Videos
        fields = '__all__'


class ImagesDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = '__all__'


class ImagesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = '__all__'


class ChoicesDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choices
        fields = ['id', 'product', 'name', 'article_number',
                  'in_stock', 'count', 'image', 'price']

    def create(self, validated_data):
        return Choices.objects.create(**validated_data)


class ChoicesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choices
        fields = '__all__'


class ProductDetailSerializer(serializers.ModelSerializer):
    choices = ChoicesListSerializer(many=True, read_only=True)
    images = ImagesListSerializer(many=True, read_only=True)
    videos = VideosListSerializer(many=True, read_only=True)
    user = serializers.PrimaryKeyRelatedField(read_only=True,)

    class Meta:
        model = Product
        fields = ['id', 'user', 'name', 'choice_cat', 'choices',
                  'specifications', 'equipment', 'images', 'videos',
                  'category', 'created_at'
                  ]



class ProductListSerializer(serializers.ModelSerializer):
    choices = ChoicesListSerializer(many=True, read_only=True)
    images = ImagesListSerializer(many=True, read_only=True)
    videos = VideosListSerializer(many=True, read_only=True)
    user = serializers.PrimaryKeyRelatedField(read_only=True, )


    class Meta:
        model = Product
        fields = ['id', 'user', 'name', 'choice_cat', 'choices',
                  'specifications', 'equipment', 'images', 'videos',
                  'category', 'created_at'
                  ]
