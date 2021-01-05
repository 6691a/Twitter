from django.urls import path
from .views import *

urlpatterns = [

    path('', getUser_list),
    path('signup/', createUser),
    path('find/<str:email>/', findUser),
    path('active/', active_user),
    path('send/<str:email>/', reMail),
    path('profile/', profile_Upload),


]
