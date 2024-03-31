from django import forms
from .models import Product, Category

class ProductSerializer(forms.ModelForm):
    class Meta:
        model = Product
        fields = '__all__'

class CategorySerializer(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'