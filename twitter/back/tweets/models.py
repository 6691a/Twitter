from django.db import models
from user.models import User


class Tweet(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, db_index=True)
    content = models.TextField(blank=True, null=True)
    image = models.FileField(upload_to='images/', blank=True, null=True)
    objects = models.Manager()
    created = models.DateTimeField(auto_now_add=True)
    display = models.BooleanField(default=True)

    class Meta:
        db_table = 'tweet'
        ordering = ['-created']
