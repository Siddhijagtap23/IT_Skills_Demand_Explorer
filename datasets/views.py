
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Dataset
from .serializers import DatasetSerializer


class DatasetListCreateView(generics.ListCreateAPIView):
    serializer_class = DatasetSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Dataset.objects.filter(
            uploaded_by=self.request.user
        ).order_by('-uploaded_at')
