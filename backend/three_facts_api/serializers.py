from rest_framework import serializers
from three_facts.models import ThreeFacts, TopicCategory

class ThreeFactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThreeFacts
        fields = "__all__"

class TopicCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TopicCategory
        fields = "__all__"