from django.conf.urls import patterns, include, url
from django.contrib import admin

admin.autodiscover()
urlpatterns = patterns('',
    url(r'^$', 'main.views.index', name='index'),
)
