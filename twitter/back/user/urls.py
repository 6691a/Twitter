from django.urls import path
from .views import *

urlpatterns = [

    path('', getUser_list),
    path('signup/', createUser),
    path('find/<str:email>/', findUser),


]
