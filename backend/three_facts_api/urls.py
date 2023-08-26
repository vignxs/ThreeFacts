from django.urls import path
from .views import ThreeFactsDetail, ThreeFactsList, TopicCategoryList, TopicCategoryDetail

app_name = "three_facts_api"

urlpatterns = [
    path("<int:pk>/", ThreeFactsDetail.as_view(), name="detailcreate"),
    path("", ThreeFactsList.as_view(), name="threefacts-list"),
    path("category/<int:pk>/", TopicCategoryDetail.as_view(), name="detailcreate"),
    path("category/", TopicCategoryList.as_view(), name="topiccategory-list")
]
