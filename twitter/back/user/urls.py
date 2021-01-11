from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [

    path('', getUser_list),
    path('signup/', createUser),
    path('find/<str:email>/', findUser),
    path('active/', active_user),
    path('send/<str:email>/', reMail),
    path('profile/', profile_Upload),
    path('hello/', HelloView.as_view(), name='hello'),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),



    path('register/', UserCreateView.as_view())
]
