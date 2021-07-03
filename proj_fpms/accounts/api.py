from .models import User
from django.contrib.sites.shortcuts import get_current_site
from django.shortcuts import redirect, get_object_or_404

from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, LoginSerializer, RegisterSerializer
from .utils import Util
from django.urls import reverse


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    authentication_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        token = AuthToken.objects.create(user)[1]

        current_site = get_current_site(request).domain
        relativeLink = reverse('email-verify')
        absurl = 'http://' + current_site + \
            relativeLink + "?token=" + str(token)
        email_body = "Hi " + user.username + \
            "! Use the link below to verify your email. If it's not you, you can just ignore this message. \n" + absurl
        data = {'email_body': email_body,
                'email_subject': "Verify your Paperclip account",
                'to_email': user.email}
        Util.send_email(data)

        user.registerToken = str(token)
        user.is_active = False
        user.save()

        return Response({
            "user": UserSerializer(user,
                                   context=self.get_serializer_context()).data,
            #  "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer
    authentication_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data

        return Response({
            "user": UserSerializer(user,
                                   context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class VerifyEmail(generics.GenericAPIView):
    def get(self, request):
        token = request.GET.get('token')
        #user = get_object_or_404(User, registerToken=token)
        user = User.objects.get(registerToken=token)
        print(token)
        print(user)
        user.is_active = True
        user.save()
        return redirect('/')
