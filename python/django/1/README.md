# Setup a Django project in Docker

The goal of this post is to setup a Django project in a Docker container following the guide here: https://docs.docker.com/compose/django/

Creating a [Dockerfile](mysite/Dockerfile), [docker-compose.yml](mysite/docker-compose.yml), [requirements.txt](mysite/requirements.txt) and running `sudo docker-compose run web django-admin startproject composeexample .`.

Adding the correct database information in [settings.py](mysite/composeexample/settings.py) so that it corresponds with the entries in [docker-compose.yml](mysite/docker-compose.yml) and running `docker-compose up`.
