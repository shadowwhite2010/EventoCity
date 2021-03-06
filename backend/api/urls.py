from django.urls import path
from django.conf.urls import include, url
from api import views
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.conf.urls.static import static
from django.conf import settings

class GoolgeAuth(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client



urlpatterns = [
    path('list/', views.UserList.as_view()),
    path('create/', views.UserCreate.as_view()),
    url(r'^user$', views.UserFunc),
    url(r'^user/([0-9]+)$', views.UserFunc),
    url(r'^user/SaveFile/([0-9]+)$', views.SaveFile_u),
    url(r'^event$', views.EventFunc),
    path('retrieve/<str:email>', views.UserRetrieve),
    url(r'^event/([0-9]+)$', views.EventFunc),
    path('v1/rest-auth/google_auth/', GoolgeAuth.as_view(), 	 name='google_login'),

    url(r'^event/SaveFile$', views.SaveFile),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
