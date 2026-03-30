from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def blog(request):
    return HttpResponse("<h1>This is the blog page</h1>") #render(request, 'blog.html')