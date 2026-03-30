from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.http import Http404 , HttpResponseNotFound
from .models import Post, Comment
from .forms import PostForm, CommentForm


def home(request):
    Posts = Post.objects.all().order_by('-created_at')[:2]
    commentForm = CommentForm()
    comments = Comment.objects.all()
    return render(request, "blogs/index.html", {"blogs": Posts, "commentForm": commentForm, "comments": comments})

# Create your views here.
def blogposts(request):
    return HttpResponse("""
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Blogs Page</title>
                     
                        <style>
                            body {
                                background-color: #f0f0f0;
                                font-family: Arial, sans-serif;
                                color: #333;
                                padding: 20px;
                            }
                            h1 {
                                color: #007BFF;
                            }
                        </style>
                           </head>
                        <body
                        <h1>This is the blogs page ABC</h1>
                        </body>
                        </html>
                        """)

# def comment(request):
#     return HttpResponse("<h1>This is the comment page 1</h1>")


def blogpost(request, id):
    return HttpResponse(f"<h1>This is the blog post number {id}</h1>")

def blogpostcomment(request, id, commentid):
    return HttpResponse(f"<h1>This is the comment number {commentid} for blog post number {id}</h1>")

def newMy(request):
    return HttpResponse("<h1>This is the newMy page 1</h1>")

def comment(request):
    post = Post.objects.get(id=request.POST.get('post'))
   
    commentForm = CommentForm(request.POST)
    print(commentForm)
    if commentForm.is_valid():
        comment = commentForm.save(commit=False)
        comment.post = post
        comment.save()
   
    return HttpResponse(f"<h1>This is the comment page 1{post.id}</h1>")
