from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'user_id', 'birthday', 'image', 'is_active', 'key']


class CreateUserSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    birthday = serializers.DateField(required=True)
    password = serializers.CharField(required=True)
    key = serializers.CharField(required=True)

    def create(self, data):
        user = User.objects.create(
            email=data['email'],
            birthday=data['birthday'],
            key=data['key']
        )
        user.set_password(data['password'])
        user.save()
        return user


class UserImageSerializer(serializers.ModelSerializer):
    img = serializers.ImageField(use_url=True)

    class Meta:
        model = User
        fields = ['image']
