from django.shortcuts import render
from django.core.serializers.json import DjangoJSONEncoder
from rest_framework import viewsets

from django.http import HttpResponse
from .models import WordModel
from .serializers import WordSerializer


class WordView(viewsets.ModelViewSet):
    serializer_class = WordSerializer
    queryset = WordModel.objects.all()
