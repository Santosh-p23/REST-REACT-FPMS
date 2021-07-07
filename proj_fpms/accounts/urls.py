from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI, VerifyEmail, GetUserAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view(), name='login'),
    path('api/auth/user', UserAPI.as_view()),
    path('api/user/<int:pk>/', GetUserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('api/auth/email-verify/', VerifyEmail.as_view(), name="email-verify")
]
