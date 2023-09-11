from django.contrib import admin
from django.urls import path, include
from .views import (
    LoginApiView,
    RegistrationAPIView,
    CategoryApiView,
    SubCategoryApiView,
    ExpenseApiView
)

urlpatterns = [
    path('auth/login', LoginApiView.as_view()),
    path('auth/register', RegistrationAPIView.as_view()),

    path('category', CategoryApiView.as_view()),
    path('category/<int:pk>', CategoryApiView.as_view()),

    path('subcategory', SubCategoryApiView.as_view()),
    path('subcategory/<int:pk>', SubCategoryApiView.as_view()),

    path('expense', ExpenseApiView.as_view())

]
