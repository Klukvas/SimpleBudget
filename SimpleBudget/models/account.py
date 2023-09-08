from django.db import models
from .auth import User


class Account(models.Model):
    name = models.CharField()
    amount = models.IntegerField()
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    isUsable = models.BooleanField(default=True)

    class Meta:
        ordering = ["isUsable"]
        verbose_name_plural = "Accounts"
        unique_together = ('name', 'user',)
