
from django.db import models
from django.conf import settings


class Dataset(models.Model):
    uploaded_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='datasets'
    )
    file = models.FileField(upload_to='datasets/')
    name = models.CharField(max_length=255)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    total_records = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name
