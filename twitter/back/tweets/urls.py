from django.urls import path
from .views import *

urlpatterns = [
    path('home/', tweet_home_view, name='tweet_home'),
    path('', View.as_view(), name='tweet_home'),

    # path('<str:user_id>/', tweet_home_view, name='tweet_home'),
    # path('<str:user_id>/status/<int:pk>',
    #      tweet_detail_view, name='tweet_detail'),

]
