from django.db import models

class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Tag(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name 
    
class Category(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name
    
# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey('Author', on_delete=models.CASCADE)
    tags = models.ManyToManyField('Tag', blank=True)
    date_to = models.DateField(default=None, null=True, blank=True)
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    def __str__(self):
        return self.title

# comment   
class Comment(models.Model):
    user_name = models.CharField(max_length=50)
    user_email = models.EmailField()
    comment_text = models.TextField(max_length=500)
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='comments')
    
   
    
