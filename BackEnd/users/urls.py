from django.urls import path
from . import views

urlpatterns = [
    path("login/", views.MyTokenObtainPairView.as_view()),
    path("register/", views.register),
    path("put/", views.putUser),
    path("uploadImage/", views.uploadImage),
    path("userProfile/", views.getUserProfile),
    path("allUsers/", views.getAllUsers),
    path("onlyUser/<int:pk>/", views.getOnlyUser),
    path("onlyUserName/<str:pk>/", views.getOnlyUserName),
    path("UsersName/<str:pk>/", views.getUsersName),
    
]
