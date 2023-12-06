from .models import WordModel
from rest_framework import serializers


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = WordModel
        fields = "__all__"


class CreateWordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = WordModel
        fields = ("target_phrase", "translated_phrase",
                  "passed_step", "created_at", "updated_at")
