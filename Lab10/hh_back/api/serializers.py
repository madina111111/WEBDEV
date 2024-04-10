from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()


class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer()
    class Meta:
        model = Vacancy
        fields = '__all__'
