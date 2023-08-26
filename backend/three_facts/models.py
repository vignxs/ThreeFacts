from django.db import models
from users.models import Users
from django.utils import timezone

class BaseModel(models.Model):
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(Users, on_delete=models.SET_NULL, related_name='%(class)s_created', null=True, blank=True, editable=False)
    updated_by = models.ForeignKey(Users, on_delete=models.SET_NULL, related_name='%(class)s_updated', null=True, blank=True)


    class Meta:
        abstract = True
        
class TopicCategory(models.Model):
    
    category = models.CharField(max_length=255)
    
    def __str__(self):
        return self.category
      
class ThreeFacts(BaseModel):
    
    class ThreeFactsObjects(models. Manager):
        def get_queryset(self):
            return super().get_queryset()
    
    topic = models.CharField(max_length=255)
    topic_category = models.ForeignKey(TopicCategory, on_delete=models.PROTECT)
    content = models.TextField()
    created_by = models.ForeignKey(Users, on_delete=models.CASCADE)
    objects = models.Manager()
    three_facts_objects = ThreeFactsObjects()

    class Meta:
        ordering = ['-created_at']
        
    def __str__(self):
        return f"{self.topic} Fact" 
    
    