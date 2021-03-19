#!/usr/bin/env bash
# Bash3 Boilerplate. Copyright (c) 2014, kvz.io

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

# Set magic variables for current file & dir
__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
__file="${__dir}/$(basename "${BASH_SOURCE[0]}")"
__base="$(basename ${__file} .sh)"

arg1="${1:-}"

_django_path=python/django
_django_version=1.11.29

function get_project_number () {
  _max_number=$(ls $_django_path | sort -n | tail -1)
  echo $((_max_number+1))
}

_project_number=$(get_project_number)
_project_path=$(dirname "$__dir")/$_django_path/$_project_number
_venv_name=venv
_venv_path=$_project_path/$_venv_name
_project_name=project
_app_name=app

function _do () {
  echo "running: $@"
  if ! $@; then
    echo "failure"
    exit 1
  fi
}

function create_dir () {
  _do "mkdir $_project_path"
}

function create_readme () {
  _do "touch $_project_path/README.md"
}

function create_project () {
  cd "$_project_path" || exit
  _do "virtualenv -p python $_venv_name"
  _do "$_venv_path/bin/python -m pip install Django==$_django_version"
  _do "$_venv_path/bin/django-admin startproject $_project_name" 
  _do "cd $_project_name" 
  _do "$_venv_path/bin/python manage.py startapp $_app_name" 
}

function add_installed_apps () {
  cd "$_project_path"/"$_project_name" || exit
  _settings_file="$_project_name"/settings.py
  _tmp_file="$_settings_file".tmp
  awk '/INSTALLED_APPS/ { print; print "    '"'""$_app_name.apps.${_app_name^}Config""'"',"; next }1' "$_settings_file" > "$_tmp_file"
  mv "$_tmp_file" "$_settings_file"
}

function make_files () {
  cd "$_project_path"/"$_project_name" || exit
  cat << EOF > "$_app_name"/urls.py
from django.conf.urls import url

from . import views

app_name = '$_app_name'
urlpatterns = [
    url(r'^$', views.index, name='index'),
]
EOF
cat << EOF > "$_project_name"/urls.py
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^$_app_name/', include('$_app_name.urls')),
    url(r'^admin/', admin.site.urls),
]
EOF
cat << EOF > "$_app_name"/views.py
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world")
EOF
cat << EOF > "$_app_name"/tests.py
from django.test import TestCase
from django.urls import reverse

class FirstTest(TestCase):
    def first_test(self):
        self.assertEqual(1, 1)


class ViewTests(TestCase):
    def test_view(self):
        response = self.client.get(reverse('$_app_name:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Hello, world")
EOF
}

function create_init_file {
  cd "$_project_path"/"$_project_name" || exit
  cat << EOF > "$_app_name"/__init__.py
default_app_config = '$_project_name.$_app_name.apps.${_app_name^}Config'
EOF
}

function create_models {
  cd "$_project_path"/"$_project_name" || exit
  rm "$_app_name"/models.py
  get_gist "943bf420d16edc13d9660daa10510f29" "$_app_name"/models.py
  "$_venv_path"/bin/python manage.py makemigrations
  "$_venv_path"/bin/python manage.py migrate 
}

function run_tests () {
  cd "$_project_path"/"$_project_name" || exit
  "$_venv_path"/bin/python manage.py test "$_app_name"
}

function get_gist {
  _url="https://gist.githubusercontent.com/zxl634/$1/raw/"
  _file="$2"
  wget "$_url" -O "$_file"
}

create_dir
create_readme
create_project
add_installed_apps
make_files
create_init_file
create_models
run_tests
