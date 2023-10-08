from rest_framework import serializers
from ..models import Category


class CategorySerializer(serializers.ModelSerializer):
    subCategories = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'subCategories']

