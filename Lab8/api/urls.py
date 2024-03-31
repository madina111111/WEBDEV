"""
URL configuration for Lab8 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from django.urls import path
from shop_back import views

urlpatterns = [
    path('api/products/', views.get_all_products, name='get_all_products'),
    path('api/products/<int:id>/', views.get_product, name='get_product'),
    path('api/categories/', views.get_all_categories, name='get_all_categories'),
    path('api/categories/<int:id>/', views.get_category, name='get_category'),
    path('api/categories/<int:id>/products/', views.get_products_by_category, name='get_products_by_category'),
]
