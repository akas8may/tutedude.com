from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    # path("allposts/", views.blogposts, name='blogposts'),
    # path("post/<int:id>/", views.blogpost, name='blogpost'),
    # path("post/<int:id>/comment/<int:commentid>/", views.blogpostcomment, name='blogpostcomment'),
]