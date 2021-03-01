#!/usr/bin/env bash

PROJECT_NAME=project
APP_NAME=app
__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VENV="$__dir"/venv/

function create-project () {
  virtualenv -p python venv
  "$VENV"/bin/python -m pip install Django==1.11.29
  "$VENV"/bin/django-admin startproject "$PROJECT_NAME" 
  cd "$PROJECT_NAME" && "$VENV"/bin/python manage.py startapp "$APP_NAME" 
  "$VENV"/bin/python manage.py migrate
  make-files
}

function clean-project () {
  cd "$__dir" || exit
  rm -rf "$PROJECT_NAME"
  rm -rf "$VENV"
}

function make-files () {
  cat << EOF > "$APP_NAME"/urls.py
from django.conf.urls import url

from . import views

app_name = '$APP_NAME'
urlpatterns = [
    url(r'^$', views.index, name='index'),
]
EOF
cat << EOF > "$PROJECT_NAME"/urls.py
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^$APP_NAME/', include('$APP_NAME.urls')),
    url(r'^admin/', admin.site.urls),
]
EOF
cat << EOF > "$APP_NAME"/views.py
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world")
EOF
cat << EOF > "$APP_NAME"/tests.py
from django.test import TestCase
from django.urls import reverse

class FirstTest(TestCase):
    def first_test(self):
        self.assertEqual(1, 1)


class ViewTests(TestCase):
    def test_view(self):
        response = self.client.get(reverse('$APP_NAME:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Hello, world")
EOF
}

function run-tests () {
  "$VENV"/bin/python manage.py test "$APP_NAME"
}

case "$1" in
  create) clean-project && create-project && tree && run-tests;;
  clean) clean-project;;
  test) run-tests;;
  *) echo "need argument";;
esac

cd "$__dir" || exit
