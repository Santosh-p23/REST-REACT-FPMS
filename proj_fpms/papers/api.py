from rest_framework import viewsets, permissions
from papers.models import Journal, Report, Conference_Article, Books, Miscellaneous_Papers, Publication
from .serializers import JournalSerializer, BookSerializer, ReportSerializer, Miscellaneous_PaperSerializer, PublicationSerializer, Conference_ArticleSerializer

from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from rest_framework import filters
from django.contrib.auth.models import User


class JournalViewSet(viewsets.ModelViewSet):
    queryset = Journal.postobjects.all()
    permission_classes = [permissions.AllowAny]

    serializer_class = JournalSerializer
    ordering = ['-publication_date']

    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'author__username']

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    @action(detail=True)
    def get_user_posts(self, request, pk=None):
        owner = get_object_or_404(User, pk=pk)
        owner_journal = Journal.objects.filter(
            author=owner.id, status='published')
        serializer = JournalSerializer(owner_journal, many=True)
        return Response(serializer.data)
