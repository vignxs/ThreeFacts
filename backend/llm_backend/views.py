# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import InputSerializer

from .three_facts_langchain import threefacts_llm, pyskillscale_llm, aigame_llm

class ThreeFactsLLMView(APIView):
    def post(self, request):
        serializer = InputSerializer(data=request.data)
        if serializer.is_valid():
            input_param = serializer.validated_data['input_param']

            # Call your function with the input parameters
            result = threefacts_llm(input_param).lstrip('\n')
            # Return the result in the response
            return Response({"result": result}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PYSkillScaleLLMView(APIView):
    def post(self, request):
        serializer = InputSerializer(data=request.data)
        if serializer.is_valid():
            input_param = serializer.validated_data['input_param']

            # Call your function with the input parameters
            result = pyskillscale_llm(input_param).lstrip('\n')
            # Return the result in the response
            return Response({"result": result}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AiGameLLMView(APIView):
    def post(self, request):
        serializer = InputSerializer(data=request.data)
        if serializer.is_valid():
            input_param = serializer.validated_data['input_param']

            # Call your function with the input parameters
            result = aigame_llm(input_param).lstrip('\n')
            # Return the result in the response
            return Response({"result": result}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
