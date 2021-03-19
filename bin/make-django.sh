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

function get-project-number () {
  _max_number=$(ls $_django_path | sort -n | tail -1)
  echo $((_max_number+1))
}

_project_number=$(get-project-number)
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

function create-dir () {
  _do "mkdir $_project_path"
}

function create-readme () {
  _do "touch $_project_path/README.md"
}

function create-project () {
  cd "$_project_path" || exit
  _do "virtualenv -p python $_venv_name"
  _do "$_venv_path/bin/python -m pip install Django==1.11.29"
  _do "$_venv_path/bin/django-admin startproject $_project_name" 
  _do "cd $_project_name" 
  _do "$_venv_path/bin/python manage.py startapp $_app_name" 
}

create-dir
create-readme
create-project


