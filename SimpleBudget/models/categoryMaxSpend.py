from django.db import models
from django.contrib.auth.models import User
from .category import Category


class CategoryMaxSpend(models.Model):
    category = models.OneToOneField(Category, on_delete=models.CASCADE)
    max_spend = models.IntegerField()
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    class Meta:
        ordering = ["max_spend"]
        verbose_name_plural = "CategoryMaxSpends"
