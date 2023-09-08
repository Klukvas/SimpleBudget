from django.db import models
from .auth import User
from .category import Category
from .subCategory import SubCategory


class Expense(models.Model):
    category = models.OneToOneField(Category, on_delete=models.SET_DEFAULT, default='NoCategory')
    subCategory = models.OneToOneField(SubCategory, on_delete=models.SET_DEFAULT, default='NoSubCategory')
    date = models.DateField(auto_now=True)
    amount = models.IntegerField()
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    class Meta:
        ordering = ["date"]
        verbose_name_plural = "Expenses"

