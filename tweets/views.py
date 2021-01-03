from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, Http404, JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.utils.http import is_safe_url
from django.conf import settings


from random import randint

ALLOWED_HOSTS = settings.ALLOWED_HOSTS

def index(request, *args, **kwargs):
    username = None
    if request.user.is_authenticated:
        username = request.user.username
    return render(request, "pages/index.html", context={"username": username}, status=200)

def tweets_list_view(request, *args, **kwargs):
    return render(request, "tweets/list.html")

def tweets_detail_view(request, tweet_id, *args, **kwargs):
    return render(request, "tweets/detail.html", context={"tweet_id": tweet_id})

def tweets_profile_view(request, username, *args, **kwargs):
    return render(request, "tweets/profile.html", context={"profile_username": username})