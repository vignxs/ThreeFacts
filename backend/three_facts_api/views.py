from rest_framework import generics
from rest_framework import permissions
from three_facts.models import ThreeFacts, TopicCategory
from three_facts_api.serializers import ThreeFactSerializer, TopicCategorySerializer


class ThreeFactsPermission(permissions.BasePermission):
    message = "Editing or Deleting  is restricted to the creator only"
    
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True        
        return obj.created_by == request.user
    

class ThreeFactsList(generics.ListCreateAPIView):
    queryset = ThreeFacts.three_facts_objects.all()
    serializer_class = ThreeFactSerializer
    pass

class ThreeFactsDetail(generics.RetrieveUpdateDestroyAPIView, ThreeFactsPermission):
    permission_classes = [ThreeFactsPermission]
    queryset = ThreeFacts.objects.all()
    serializer_class = ThreeFactSerializer
    pass

class TopicCategoryList(generics.ListCreateAPIView):
    queryset = TopicCategory.objects.all()
    serializer_class = TopicCategorySerializer
    pass

class TopicCategoryDetail(generics.RetrieveDestroyAPIView):
    queryset = TopicCategory.objects.all()
    serializer_class = TopicCategorySerializer
    pass