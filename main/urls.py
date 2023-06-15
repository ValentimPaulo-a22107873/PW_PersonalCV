"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.index, name="index"),
    path('playground/', views.playground, name="playground"),
    path('about/', views.about, name="about"),
    path('projects/', views.projects, name="projects"),
    path('blog/', views.blog, name="blog"),
    path('login/', views.login_view, name="login_view"),
    path('logout/', views.logout_view, name="logout_view"),
    path('register/', views.register, name="register"),
    path('web/', views.web, name="web"),
    path('register_user', views.register_view, name='register_user'),
    path('blog/delete/<int:post_id>', views.delete_post, name="delete"),
    path('blog/like/<int:post_id>', views.like, name="like"),

    path('admin/', views.admin, name="admin"),
]
