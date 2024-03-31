from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Category, Product

def get_all_products(request):
    products = Product.objects.all()
    products_list = []
    for product in products:
        product_dict = {
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active
        }
        products_list.append(product_dict)
    return JsonResponse(products_list, safe=False)

def get_product(request, id):
    product = get_object_or_404(Product, pk=id)
    data = {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': product.category.name
    }
    return JsonResponse(data)

def get_all_categories(request):
    categories = Category.objects.all()
    data = {'categories': []}
    for category in categories:
        data['categories'].append({
            'id': category.id,
            'name': category.name
        })
    return JsonResponse(data)

def get_category(request, id):
    category = get_object_or_404(Category, pk=id)
    data = {
        'id': category.id,
        'name': category.name
    }
    return JsonResponse(data)

def get_products_by_category(request, id):
    category = get_object_or_404(Category, pk=id)
    products = category.products.all()
    data = {'products': []}
    for product in products:
        data['products'].append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active
        })
    return JsonResponse(data)
