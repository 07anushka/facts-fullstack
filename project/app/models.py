from django.db import models

# Create your models here.

class Facts(models.Model):
    id = models.IntegerField(primary_key=True) 
    fact = models.CharField(max_length=255)

    def __str__(self):
        return self.fact