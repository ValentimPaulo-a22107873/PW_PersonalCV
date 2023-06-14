from django.db import models

# Create your models here.
class Post(models.Model):
    author = models.CharField(max_length=30)
    title = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add= True)
    description = models.TextField(max_length=1000)

    def __str__(self):
        return self.title