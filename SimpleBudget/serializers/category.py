from rest_framework import serializers
from SimpleBudget.models import Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'description']

    def create(self, validated_data):
        print(f'validated_data: {validated_data}')
        Category.objects.create(**validated_data)
        return validated_data
