from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    registerToken = models.CharField(max_length=255, null=True)


# User._meta.get_field('email').null = False
# User._meta.get_field('email').blank = False

# Create your models here.
