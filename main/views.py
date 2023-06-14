from django.http import HttpResponse , HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from .models import Post
from .forms import PostForm

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

    form = PostForm(request.POST or None)
    if form.is_valid():
        form.save()


    context = {'posts': sorted(Post.objects.all(), key=lambda post: post.date, reverse=True), 'form': form}

    return render(request, "blog.html", context)

def delete_post(request, post_id):

    Post.objects.get(id=post_id).delete()
    
    return HttpResponseRedirect(reverse('main:blog'))