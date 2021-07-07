from django.urls import path
from rest_framework import routers
from .api import PaperViewSet, SearchView

router = routers.DefaultRouter()
router.register('api/papers', PaperViewSet, 'papers')

urlpatterns = router.urls
urlpatterns += [path('api/search/', SearchView.as_view())]
