# Generated by Django 4.2.5 on 2023-09-11 18:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('SimpleBudget', '0004_alter_expense_category_alter_expense_subcategory_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expense',
            name='category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, to='SimpleBudget.category'),
        ),
        migrations.AlterField(
            model_name='expense',
            name='subCategory',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, to='SimpleBudget.subcategory'),
        ),
        migrations.AlterField(
            model_name='expense',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
