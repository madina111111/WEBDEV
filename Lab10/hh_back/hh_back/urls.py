from django.contrib import admin
from django.urls import path, include
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:id>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.top_ten_vacancies)
]
