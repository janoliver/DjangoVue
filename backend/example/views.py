from django.contrib.auth.models import User
from django.views.generic import TemplateView
from rest_framework import viewsets

from example.models import Item
from example.serializers import UserSerializer, ItemSerializer


class HomeView(TemplateView):
    template_name = 'example/home.html'


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
