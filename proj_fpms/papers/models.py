from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.


class Journal(models.Model):
    title = models.CharField(max_length=250)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    publisher = models.CharField(max_length=50, null=True, blank=True)
    volume = models.CharField(max_length=50, null=True, blank=True)
    peer_reviewed = models.CharField(max_length=50, null=True, blank=True)
    issn = models.CharField(max_length=50, null=True, blank=True)
    issue = models.CharField(max_length=50, null=True, blank=True)
    pages = models.CharField(max_length=50, null=True, blank=True)
    journal_link = models.CharField(max_length=250, null=True, blank=True)
    publication_date = models.DateField(null=True, blank=True)

    class PostPapers(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (('draft', 'Draft'), ('published', 'Published'))

    status = models.CharField(
        max_length=10, choices=options, default='published', null=True)

    objects = models.Manager()  # default manager
    postobjects = PostPapers()  # custom manager

    class Meta:
        ordering = ('-publication_date',)

    def __str__(self):
        return self.title


class Publication(models.Model):
    title = models.CharField(max_length=250)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    publication_date = models.DateField(null=True, blank=True)
    DOI = models.CharField(max_length=50, null=True, blank=True)
    publisher = models.CharField(max_length=50, null=True, blank=True)
    link = models.CharField(max_length=250, null=True, blank=True)

    class PostPapers(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (('draft', 'Draft'), ('published', 'Published'))

    status = models.CharField(
        max_length=10, choices=options, default='published')

    objects = models.Manager()  # default manager
    postobjects = PostPapers()  # custom manager

    class Meta:
        ordering = ('-publication_date',)

    def __str__(self):
        return self.title


class Conference_Article(models.Model):
    title = models.CharField(max_length=250)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    conference_name = models.CharField(max_length=200)
    location = models.CharField(max_length=50, null=True, blank=True)
    organised_date = models.DateTimeField()
    page = models.CharField(max_length=50, null=True, blank=True)
    issue = models.CharField(max_length=200, null=True, blank=True)
    publication_date = models.DateField(null=True, blank=True)
    article_link = models.CharField(max_length=200, null=True, blank=True)

    class PostPapers(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (('draft', 'Draft'), ('published', 'Published'))

    status = models.CharField(
        max_length=10, choices=options, default='published')

    objects = models.Manager()  # default manager
    postobjects = PostPapers()  # custom manager

    class Meta:
        ordering = ('-publication_date',)

    def __str__(self):
        return self.title


class Books(models.Model):
    title = models.CharField(max_length=200, null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    publisher = models.CharField(max_length=250, null=True, blank=True)
    volume = models.CharField(max_length=50, null=True, blank=True)
    edition = models.CharField(max_length=50, null=True, blank=True)
    ISBN = models.CharField(max_length=50, null=True, blank=True)
    DOI = models.CharField(max_length=50, null=True, blank=True)
    chapters = models.CharField(max_length=50, null=True, blank=True)
    publication_date = models.DateField()
    co_authors = models.CharField(max_length=250, null=True, blank=True)
    book_link = models.CharField(max_length=50, null=True, blank=True)

    class PostPapers(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (('draft', 'Draft'), ('published', 'Published'))

    status = models.CharField(
        max_length=10, choices=options, default='published')

    objects = models.Manager()  # default manager
    postobjects = PostPapers()  # custom manager

    class Meta:
        ordering = ('-publication_date',)

    def __str__(self):
        return self.title


class Report(models.Model):
    title = models.CharField(max_length=50, null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.CharField(max_length=250, null=True, blank=True)
    publication_date = models.DateField()
    report_link = models.CharField(max_length=250, null=True, blank=True)

    class PostPapers(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (('draft', 'Draft'), ('published', 'Published'))

    status = models.CharField(
        max_length=10, choices=options, default='published')

    objects = models.Manager()  # default manager
    postobjects = PostPapers()  # custom manager

    class Meta:
        ordering = ('-publication_date',)

    class Meta:
        ordering = ('-publication_date',)

    def __str__(self):
        return self.title


class Miscellaneous_Papers(models.Model):
    title = models.CharField(max_length=50, null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.CharField(max_length=250, null=True, blank=True)
    publisher = models.CharField(max_length=250, null=True, blank=True)
    publication_date = models.DateField()
    report_link = models.CharField(max_length=250, null=True, blank=True)

    class PostPapers(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (('draft', 'Draft'), ('published', 'Published'))

    status = models.CharField(
        max_length=10, choices=options, default='published')

    objects = models.Manager()  # default manager
    postobjects = PostPapers()  # custom manager

    class Meta:
        ordering = ('-publication_date',)

    def __str__(self):
        return self.title
