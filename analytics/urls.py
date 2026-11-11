
from django.urls import path
from .views import SkillDemandView, DashboardView

urlpatterns = [
    path('skill-demand/', SkillDemandView.as_view(), name='skill-demand'),
    path('dashboard/', DashboardView.as_view(), name='dashboard'),
]
