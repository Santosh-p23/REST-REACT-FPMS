from .custom_permissions import isOwnerOrReadOnly
from rest_framework import viewsets, permissions
from .models import Paper
from .serializers import PaperSerializer

from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from rest_framework import filters
from accounts.models import User
from rest_framework import generics


class PaperViewSet(viewsets.ModelViewSet):
    queryset = Paper.objects.all()
    permission_classes = [permissions.IsAuthenticated and isOwnerOrReadOnly]
    #permission_classes = [permissions.AllowAny]

    serializer_class = PaperSerializer
    ordering = ['-publication_date']

    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'author__profile__full_name', 'group']

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    @action(detail=True)
    def get_user_posts(self, request, pk=None):
        owner = get_object_or_404(User, pk=pk)
        if(owner == self.request.user):
            owner_paper = Paper.objects.filter(
                author=owner.id)
        else:
            owner_paper = Paper.objects.filter(
                author=owner.id, status='published')
        serializer = PaperSerializer(owner_paper, many=True)
        return Response(serializer.data)


class SearchView(generics.ListAPIView):
    queryset = Paper.postobjects.all()
    serializer_class = PaperSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'author__profile__full_name', 'group']
    ordering = ['-publication_date']
