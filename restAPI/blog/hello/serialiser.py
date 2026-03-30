from rest_framework import serializers

from hello.models import Post


class PostSerializers(serializers.ModelSerializers):
     