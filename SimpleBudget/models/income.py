from django.db import models
from .auth import User
from .account import Account


class Income(models.Model):
    source = models.CharField()
    to = models.OneToOneField(Account, on_delete=models.SET_DEFAULT, default='Unknown')
    amount = models.IntegerField()
    date = models.DateField(auto_now=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    class Meta:
        ordering = ["date"]
        verbose_name_plural = "Incomes"
