from rest_framework import serializers

class InputSerializer(serializers.Serializer):
    input_param = serializers.CharField()
