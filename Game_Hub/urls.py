from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('loginpage/register_user', views.register_user, name='LoginPage'),
    path('loginpage/', views.LoginPage, name='LoginPage'),
    path('loginpage/check_user', views.check_user, name="check_user"),
    path('index/', views.TickTakGame, name='TickTakGame'),
    path('admin/', admin.site.urls)
]
