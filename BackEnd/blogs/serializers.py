from rest_framework import serializers
from .models import *


class StarsSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source="user.user_name", read_only=True)
    userId = serializers.CharField(source="user.id", read_only=True)

    class Meta:
        model = Star
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source="user.user_name", read_only=True)
    userId = serializers.CharField(source="user.id", read_only=True)

    class Meta:
        model = Comment
        fields = "__all__"


class BlogSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source="user.user_name", read_only=True)
    userId = serializers.CharField(source="user.id", read_only=True)
    userImage = serializers.CharField(source="user.image", read_only=True)
    comments = serializers.SerializerMethodField(read_only=True)
    stars = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Blog
        fields = "__all__"

    def get_comments(self, obj):
        comments = obj.comment_set.all().order_by("-date")
        serializer = CommentSerializer(comments, many=True)
        return serializer.data

    def get_stars(self, obj):
        stars = obj.star_set.all()
        serializer = StarsSerializer(stars, many=True)
        return serializer.data
    