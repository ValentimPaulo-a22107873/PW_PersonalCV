from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = '__all__'
        exclude = ['date']

    labels = {
            'title': 'Title',
            'author': 'Author',
            'description': 'Post',
        }