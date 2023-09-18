from django.contrib import admin
from .models import (
    Category,
    Account,
    CategoryMaxSpend,
    Expense,
    Income,
    SubCategory
)
# Register your models here.
admin.site.register(Category)
admin.site.register(CategoryMaxSpend)
admin.site.register(Expense)
admin.site.register(Account)
admin.site.register(Income)
admin.site.register(SubCategory)
