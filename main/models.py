from django.db import models

# Create your models here.
class Post(models.Model):

    type_choice = [(1, 'Geral'), (2, 'Sports'), (3, 'Music')]
    like = models.IntegerField(default=0)

    author = models.CharField(max_length=30)
    title = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add= True)
    type = models.IntegerField(choices = type_choice, default=1)
    description = models.TextField(max_length=1000)
    

    def __str__(self):
        return self.title