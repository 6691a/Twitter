from django.urls import path
from .views import *
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

urlpatterns = [

    path('', getUser_list),
    path('signup/', createUser),
    path('find/<str:email>/', findUser),
    path('active/', active_user),
    path('send/<str:email>/', reMail),
    path('profile/', profile_Upload),
    path('hello/', HelloView.as_view(), name='hello'),

    path('jwt-auth/', obtain_jwt_token),
    path('jwt-auth/refresh/', refresh_jwt_token),
    path('jwt-auth/verify/', verify_jwt_token),


]
