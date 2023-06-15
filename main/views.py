from django.http import HttpResponse , HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse

from .models import Post
from .forms import PostForm

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

# Create your views here.

def index(request):
    return render(request, "index.html")

def playground(request):
    return render(request, "playground.html")

def about(request):
    return render(request, "about.html")

def projects(request):
    return render(request, "projects.html")

def register(request):
    return render(request, "register.html")

def admin(request):
    return render(request, "admin")



def blog(request):

    form = PostForm(request.POST or None)
    if form.is_valid():
        form.save()

    context = {'posts': sorted(Post.objects.all(), key=lambda post: post.date, reverse=True), 'form': form}

    return render(request, "blog.html", context)



def delete_post(request, post_id):
    Post.objects.get(id=post_id).delete()
    
    return HttpResponseRedirect(reverse('main:blog'))



def like(request, post_id):
    
    if request.user.is_authenticated:

        likes = Post.objects.get(id=post_id).like
        likes+=1
        Post.objects.filter(id=post_id).update(like=likes)

        return HttpResponseRedirect(reverse('main:blog'))
    
    return HttpResponseRedirect(reverse('main:login_view'))



def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return redirect('main:index')
        else:
            return render(request, 'login.html', { 'message': 'Invalid Credentials' })
        
    return render(request, 'login.html')



def logout_view(request):
    logout(request)
    return redirect('main:index')



def register_view(request):
    if request.method == 'POST':
        name = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

    User.objects.create_user(name, email, password)
    return render(request, 'login.html')