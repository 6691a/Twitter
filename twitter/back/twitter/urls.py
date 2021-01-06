
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('tweet/', include('tweets.urls')),
    path('user/', include('user.urls')),



]
