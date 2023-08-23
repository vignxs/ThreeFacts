from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from ThreefactsCore.serializers import UserLoginSerializer, UserRegistrationSerializer
from ThreefactsCore.models import User

class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.create(email=serializer.validated_data['email'])
            user.set_password(serializer.validated_data['password'])
            user.save()
            return Response({'message': 'User registered successfully'}, status=201)
        return Response(serializer.errors, status=400)

class UserLoginView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(
                request, 
                email=serializer.validated_data['email'], 
                password=serializer.validated_data['password']
            )
            if user:
                token, _ = Token.objects.get_or_create(user=user)
                return Response({'token': token.key})
            else:
                return Response({'message': 'Invalid credentials'}, status=400)
        return Response(serializer.errors, status=400)
