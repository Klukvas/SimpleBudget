from django.db import models
from .auth import User
from .category import Category


class SubCategory(models.Model):
    name = models.CharField()
    description = models.TextField(null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subCategories')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        ordering = ["name"]
        verbose_name_plural = "SubCategories"
        unique_together = ('name', 'user',)

