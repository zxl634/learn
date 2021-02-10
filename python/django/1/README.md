# Setup a Django project in Docker

The goal of this post is to setup a Django project in a Docker container ([code](../python/django/1/)) following the guide here: https://docs.docker.com/compose/django/

Creating a [Dockerfile](../python/django/1/Dockerfile), [docker-compose.yml](../python/django/1/docker-compose.yml), [requirements.txt](../python/django/1/requirements.txt) and running `sudo docker-compose run web django-admin startproject composeexample .`.

Adding the correct database information in [settings.py](../python/django/1/mysite/settings.py) so that it corresponds with the entries in [docker-compose.yml](../python/django/1/docker-compose.yml) and running `docker-compose up`.
