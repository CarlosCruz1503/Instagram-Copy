from django.urls import path
from . import views

urlpatterns = [
    path("getBlogs/", views.getBlogs,),
    path("getBlog/<int:pk>", views.getBlog,),
    path("postBlog/", views.postBlog,),
    path("putBlog/<int:pk>/", views.putBlog,),
    path("deleteBlog/<int:pk>/", views.deleteBlog,),
    path("comment/<int:pk>/", views.comment,),
    path("deleteComment/<int:pk>/", views.deleteComment,),
    path("star/<int:pk>/", views.star,),
    path("starDelete/<int:pk>/", views.starDelete,),
] 

