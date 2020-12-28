from django.shortcuts import render
from .models import Tweet
from django.http import JsonResponse
from .serializer import TweetSerializer
from rest_framework import generics


class View(generics.ListAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


def tweet_home_view(request):
    tweet = Tweet.objects.all()
    serializer = TweetSerializer(tweet, many=True)

    return JsonResponse(serializer.data, safe=False)


def tweet_detail_view(self, id):
    pass
