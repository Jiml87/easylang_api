from django.contrib import admin

from .models import WordModel


@admin.register(WordModel)
class WordAdmin(admin.ModelAdmin):
    list_display = ("target_phrase", "translated_phrase", "passed_step")
    search_fields = ("target_phrase", "translated_phrase")
    pass
