from .views import ListUser, RegisterAPI, LoginAPI, UserDetailAPIView, CitasViewSet
from knox import views as knox_views
from .views import ChangePasswordView, ListUser
from django.urls import path, include

urlpatterns = [
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('api/change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('api/password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('api/citas/', CitasViewSet.as_view({'get': 'list', 'post': 'create'}), name='citas'),
    path('api/citas/<int:pk>/', CitasViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='citas-detalle'),
    path('api/listusers/', ListUser.as_view(), name='user-list'),
    path('api/listusers/<int:pk>/', ListUser.as_view(), name='user-detail-list'),
    path('api/user/', UserDetailAPIView.as_view(), name='user-detail'),
]
