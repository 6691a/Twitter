from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'user_id', 'birthday', 'image']


class CreateUserSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    birthday = serializers.DateField(required=True)
    password = serializers.CharField(required=True)

    def create(self, data):
        user = User.objects.create(
            email=data['email'],
            birthday=data['birthday'],
        )
        user.set_password(data['password'])
        user.save()
        return user
