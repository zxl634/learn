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
  add-installed-apps
}

function clean-project () {
  cd "$__dir" || exit
  rm -rf "$PROJECT_NAME"
  rm -rf "$VENV"
}

function make-files () {
  cd "$__dir"/"$PROJECT_NAME" || exit
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
create-signal-file
create-init-file
}

function run-tests () {
  cd "$__dir"/"$PROJECT_NAME" || exit
  "$VENV"/bin/python manage.py test "$APP_NAME"
}

function run-server () {
  cd "$__dir"/"$PROJECT_NAME" || exit
  _port=8881
  kill -9 "$(lsof -i:"$_port" -t)" || true
  "$VENV"/bin/python manage.py runserver "$_port" &
  sleep 2
  open http://127.0.0.1:"$_port"/"$APP_NAME"
}

function create-signal-file () {
  cd "$__dir"/"$PROJECT_NAME" || exit
  get-gist "9942beb2335fe0e141b452b14a853e9e" "$APP_NAME"/signals.py
  cat << EOF >> "$APP_NAME"/apps.py

    def ready(self):
        from . import signals
EOF

}

function create-init-file {
  cd "$__dir"/"$PROJECT_NAME" || exit
  cat << EOF > "$APP_NAME"/__init__.py
default_app_config = '$PROJECT_NAME.$APP_NAME.apps.${APP_NAME^}Config'
EOF
}

function get-gist {
  _url="https://gist.githubusercontent.com/zxl634/$1/raw/"
  _file="$2"
  wget "$_url" -O "$_file"
}

function add-installed-apps {
  cd "$__dir"/"$PROJECT_NAME" || exit
  _settings_file="$PROJECT_NAME"/settings.py
  _tmp_file="$_settings_file".tmp
  awk '/INSTALLED_APPS/ { print; print "    '"'""$APP_NAME.apps.${APP_NAME^}Config""'"',"; next }1' "$_settings_file" > "$_tmp_file"
  mv "$_tmp_file" "$_settings_file"
}

case "$1" in
  create) clean-project && create-project && tree && run-tests && echo "run server with ./setup.sh rs";;
  clean) clean-project;;
  test) run-tests;;
  rs) run-server;;
  pm) "$VENV"/bin/python "$PROJECT_NAME"/manage.py "${@:2}";;
  create-signal-file) create-signal-file;;
  *) echo "unknown argument, but calling $1 with arguments ${@:2}" && "$1" "${@:2}";;
esac

cd "$__dir" || exit
