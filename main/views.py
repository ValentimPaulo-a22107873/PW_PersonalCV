from django.http import HttpResponse
from django.shortcuts import render

from .models import Tarefa

# Create your views here.

def index(request):
    return render(request, "index.html")

def playground(request):
    return render(request, "playground.html")

def about(request):
    return render(request, "about.html")

def projects(request):
    return render(request, "projects.html")

def blog(request):
    context = {'tarefas': Tarefa.objects.all()}
    return render(request, "blog.html", context)