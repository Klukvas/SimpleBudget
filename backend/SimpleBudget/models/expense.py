from django.db import models
from .auth import User
from .category import Category
from .subCategory import SubCategory


class Expense(models.Model):
    category = models.ForeignKey(Category, on_delete=models.SET_DEFAULT, default=1)
    subCategory = models.ForeignKey(SubCategory, on_delete=models.SET_DEFAULT, default=1)
    date = models.DateField(auto_now=True)
    amount = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        ordering = ["date"]
        verbose_name_plural = "Expenses"

