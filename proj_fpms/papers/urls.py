from rest_framework import routers
from .api import JournalViewSet

router = routers.DefaultRouter()
router.register('api/journals', JournalViewSet, 'journals')

urlpatterns = router.urls
