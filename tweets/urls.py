
from django.urls import path, re_path
from django.contrib import admin

from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    #path("admin/", admin.site.urls),

    path('create-tweet', views.tweet_create_view),
    path('tweets', views.tweet_list_view),
    path('tweets/<int:tweet_id>', views.tweet_detail_view),
    path('api/tweets/<int:tweet_id>/delete', views.tweet_delete_view),
    path('api/tweets/action', views.tweet_action_view),
]
