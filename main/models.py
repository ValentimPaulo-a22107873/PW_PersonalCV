from django.db import models

# Create your models here.
class Tarefa(models.Model):
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=200)
    done = models.BooleanField(default = False)
    date = models.DateTimeField(auto_now_add= True)

    def __str__(self):
        return self.title