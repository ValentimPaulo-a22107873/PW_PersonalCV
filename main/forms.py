from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = '__all__'
        exclude = ['date', 'like']

    labels = {
            'title': 'Title',
            'author': 'Author',
            'type': 'Type',
            'description': 'Post',
        }