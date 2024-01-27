from django.db import models
from django.utils.translation import gettext_lazy as _


class WordModel(models.Model):
    class PassedStep(models.IntegerChoices):
        NO_PASS = 0, _("no passed")
        DAY_1TH = 1, _("1th day")
        DAY_3TH = 3, _("3th day")
        DAY_7TH = 7, _("7th day")
        DAY_30TH = 30, _("30th day")

    target_phrase = models.CharField(max_length=200)
    translated_phrase = models.CharField(max_length=200)
    passed_step = models.IntegerField(
        choices=PassedStep.choices, default=PassedStep.NO_PASS)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.target_phrase

    class Meta:
        verbose_name_plural = "Words"
