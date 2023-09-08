from django.db import models
from .category import Category
from .auth import User


class CategoryMaxSpend(models.Model):
    category = models.OneToOneField(Category, on_delete=models.CASCADE)
    max_spend = models.IntegerField()
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    class Meta:
        ordering = ["max_spend"]
        verbose_name_plural = "CategoryMaxSpends"
        unique_together = ('category', 'user',)
