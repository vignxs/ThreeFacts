from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken 

from .serializers import RegisterUserSerializer

class CustomUserCreate(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        reg_serializer = RegisterUserSerializer(data = request.data)
        if reg_serializer.is_valid():
            new_user = reg_serializer.save()
            if new_user:
                return Response(status= status.HTTP_201_CREATED)
        
        return Response(reg_serializer.errors, status= status.HTTP_400_BAD_REQUEST)

class BlacklistTokenView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
            
            # Return a success response
            return Response({"message": "Token successfully blacklisted."}, status=status.HTTP_200_OK)

        except Exception as e:
            print(e)
            return Response({"error": "Bad Request."}, status=status.HTTP_400_BAD_REQUEST)

            