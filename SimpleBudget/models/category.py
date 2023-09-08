from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField()
    description = models.TextField(null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        ordering = ["name"]
        verbose_name_plural = "Categories"