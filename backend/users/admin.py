from django.contrib import admin
from users.models import Users
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Users

class UsersAdminConfig(UserAdmin): 
    model = Users
    search_fields = ('email', 'username')
    list_filter = ('id', 'email', 'username', 'is_active', 'is_staff', 'date_joined')
    ordering = ('-date_joined',)  # Add a comma here
    list_display = ('id', 'email', 'username', 'is_active', 'is_staff', 'date_joined')

    formfield_overrides = {
        models.TextField: {
            'widget': Textarea(attrs={'row': 20, 'cols': 60})
        }
    }
    
    add_fieldsets = (
        (None, {'classes': ('wide',),'fields': ('email', 'username','password1', 'password2', 'is_active', 'is_staff', 'date_joined'),}),
    )
    
admin.site.register(Users, UsersAdminConfig)
