from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^"demo_app"/', include('"demo_app".urls')),
    url(r'^admin/', admin.site.urls),
]
