from django.urls import path
from django.views.generic import TemplateView

app_name = "three_facts"

urlpatterns = [
    path("" , TemplateView.as_view(template_name = "three_facts/index.html"))
]
