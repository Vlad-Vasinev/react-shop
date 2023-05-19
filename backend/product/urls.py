from django.urls import path
from .views import *

urlpatterns = [
    path('product/create/', ProductCreateView.as_view()),
    path('product/all/', ProductListView.as_view()),
    path('product/detail/<int:pk>/', ProductDetailView.as_view()),
    path('choices/create/', ChoicesCreateView.as_view()),
    path('choices/all/', ChoicesListView.as_view()),
    path('choices/detail/<int:pk>/', ChoicesDetailView.as_view()),
    path('images/create/', ImagesCreateView.as_view()),
    path('images/all/', ImagesListView.as_view()),
    path('images/detail/<int:pk>/', ImagesDetailView.as_view()),
    path('videos/create/', VideosCreateView.as_view()),
    path('videos/all/', VideosListView.as_view()),
    path('videos/detail/<int:pk>/', VideosDetailView.as_view()),
    path('category/create/', CategoryCreateView.as_view()),
    path('category/all/', CategoryListView.as_view()),
    path('category/detail/<int:pk>/', CategoryDetailView.as_view()),
]
