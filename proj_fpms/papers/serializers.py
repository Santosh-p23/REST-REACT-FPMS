from rest_framework import serializers
from papers.models import Journal, Report, Conference_Article, Books, Miscellaneous_Papers, Publication


class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        exclude = ('author',)


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'


class Conference_ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conference_Article
        fields = '__all__'


class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = '__all__'


class Miscellaneous_PaperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Miscellaneous_Papers
        fields = '__all__'


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = '__all__'
