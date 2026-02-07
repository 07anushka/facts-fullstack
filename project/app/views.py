from django.shortcuts import render
from .serializers import FactsSerializer
from .models import Facts
from rest_framework.viewsets import ModelViewSet
# Create your views here.


class FactsViewSet(ModelViewSet):
    queryset = Facts.objects.all()
    serializer_class = FactsSerializer