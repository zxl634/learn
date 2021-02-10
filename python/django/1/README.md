# Starting a Django project

I start by creating making a virtual environment[1] with `python3 -m venv django_env`. Having activated this (`source django_env/bin/activate`), I install django from a [requirements.txt](mysite/requirements.txt) with Django and (psycopg2)[https://pypi.org/project/psycopg2/] with `pip install -r requirements.txt`.

I then create a Django project with `django-admin startproject mysite`.[2]

[1]: https://docs.python.org/3/library/venv.html
[2]: https://docs.djangoproject.com/en/3.1/intro/tutorial01/

## Docker
The goal here is to setup a Django project in a Docker container following the guide here: https://docs.docker.com/compose/django/

Creating a [Dockerfile](mysite/Dockerfile), [docker-compose.yml](mysite/docker-compose.yml), [requirements.txt](mysite/requirements.txt) and running `sudo docker-compose run web django-admin startproject composeexample .`.

Adding the correct database information in [settings.py](mysite/composeexample/settings.py) so that it corresponds with the entries in [docker-compose.yml](mysite/docker-compose.yml) and running `docker-compose up`.
