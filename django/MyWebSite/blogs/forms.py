from django import forms
from .models import Post, Comment

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content', 'author', 'tags', 'date_to', 'category']

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        # fields = {'user_name':'Your Name', 'user_email':'Your Email', 'comment_text':'Your Comment'}
        exclude = ['post']  # Exclude the post field since it will be set in the view   
        labels = {
            'user_name': 'Your Name',
            'user_email': 'Your Email',
            'comment_text': 'Your Comment',
        }
