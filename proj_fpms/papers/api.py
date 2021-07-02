from rest_framework import viewsets, permissions
from .models import Paper
from .serializers import PaperSerializer

from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from rest_framework import filters
from django.contrib.auth.models import User


class PaperViewSet(viewsets.ModelViewSet):
    queryset = Paper.postobjects.all()
    #permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]

    serializer_class = PaperSerializer
    ordering = ['-publication_date']

    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'author__username']

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    @action(detail=True)
    def get_user_posts(self, request, pk=None):
        owner = get_object_or_404(User, pk=pk)
        owner_paper = Paper.objects.filter(
            author=owner.id, status='published')
        serializer = PaperSerializer(owner_paper, many=True)
        return Response(serializer.data)
