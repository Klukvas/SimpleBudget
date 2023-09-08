from django.contrib import admin
from django.urls import path, include
from .views import LoginApiView, CategoryApiView

urlpatterns = [
    path('auth/login', LoginApiView.as_view()),
    path('category', CategoryApiView.as_view()),
]
