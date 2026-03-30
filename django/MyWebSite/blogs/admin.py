from django.contrib import admin

from .models import Author, Post, Tag, Category, Comment
# Register your models here.

class FilterPost(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at')
    list_filter = ('author', 'created_at')
    search_fields = ('title', 'content')
    raw_id_fields = ('author',)

class FilterComment(admin.ModelAdmin):
    list_display = ('user_name', 'post', 'comment_text')
    list_filter = ('post',)
    search_fields = ('user_name', 'comment_text')
    raw_id_fields = ('post',)

admin.site.register(Author)
admin.site.register(Post, FilterPost)
admin.site.register(Tag)
admin.site.register(Category)
admin.site.register(Comment, FilterComment)
