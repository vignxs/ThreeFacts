from django.contrib import admin
from . import models

@admin.register(models.ThreeFacts)
class ThreeFactsAdmin(admin.ModelAdmin):
    list_display = ('id', 'topic', 'topic_category', 'content', 'created_by', 'created_at')
    
admin.site.register(models.TopicCategory)