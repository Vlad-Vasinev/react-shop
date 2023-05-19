from django.urls import path
from .views import *

urlpatterns = [
    path('order/create/', OrderCreateView.as_view()),
    path('order/all/', OrderListView.as_view()),
    path('order/detail/<int:pk>/', OrderDetailView.as_view()),
    path('orderitem/create/', OrderItemCreateView.as_view()),
    path('orderitem/all/', OrderItemListView.as_view()),
    path('orderitem/detail/<int:pk>/', OrderItemDetailView.as_view()),
    path('adress/create/', AdressCreateView.as_view()),
    path('adress/all/', AdressListView.as_view()),
    path('adress/detail/<int:pk>/', AdressDetailView.as_view()),

]
