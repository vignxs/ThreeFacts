from django.urls import path
from .views import ThreeFactsLLMView, PYSkillScaleLLMView, AiGameLLMView

app_name = "three_facts_model"

urlpatterns = [
    path("three-facts-llm/", ThreeFactsLLMView.as_view(), name="threefacts-llm"),
    path("py-skill-scale-llm/", PYSkillScaleLLMView.as_view(), name="pyskillscale-llm"),
    path("ai-game-llm/", AiGameLLMView.as_view(), name="aigame-llm"),
]
