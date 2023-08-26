from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.utils import timezone

class MyUserManager(BaseUserManager):
    
    def create_superuser(self, email, username , password, **extra_fields):
        
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be assigned to is_staff=True.')
        
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, username, password, **extra_fields)

    def create_user(self, email, username,  password=None, **extra_fields):
        """
        Creates and saves a User with the given email and password.
        """
        
        if not email:
            raise ValueError("Users must have an email address")

        email=self.normalize_email(email)
        user = self.model(email = email, username = username,  **extra_fields)
        user.set_password(password)
        user.save()

        return user


class Users(AbstractBaseUser, PermissionsMixin, models.Model):
    email = models.EmailField(_("email address"), unique=True)
    username = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    

    objects = MyUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email