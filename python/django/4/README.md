# Using the test client to make post requests

The goal of this project is to make a minimum working example of using the test client to make post requests to views as described [here](https://docs.djangoproject.com/en/1.11/topics/testing/tools/#django.test.Client.post).

## Setup

```console
$ virtualenv -p python venv && venv/bin/python -m pip install Django==1.11.29 && \
venv/bin/django-admin startproject src && \
cd src/ && ../venv/bin/python manage.py migrate && ../venv/bin/python manage.py startapp demo
created virtual environment CPython2.7.16.final.0-64 in 391ms
  creator CPython2macOsFramework(dest=/Users/anders/showcases/python/django/4/venv, clear=False, no_vcs_ignore=False, global=False)
  seeder FromAppData(download=False, pip=bundle, wheel=bundle, setuptools=bundle, via=copy, app_data_dir=/Users/anders/Library/Application Support/virtualenv)
    added seed packages: pip==20.3.1, setuptools==44.1.1, wheel==0.36.1
  activators PythonActivator,CShellActivator,FishActivator,PowerShellActivator,BashActivator
DEPRECATION: Python 2.7 reached the end of its life on January 1st, 2020. Please upgrade your Python as Python 2.7 is no longer maintained. pip 21.0 will drop support for Python 2.7 in January 2021. More details about Python 2 support in pip can be found at https://pip.pypa.io/en/latest/development/release-process/#python-2-support pip 21.0 will remove support for this functionality.
Collecting Django==1.11.29
  Using cached Django-1.11.29-py2.py3-none-any.whl (6.9 MB)
Collecting pytz
  Using cached pytz-2021.1-py2.py3-none-any.whl (510 kB)
Installing collected packages: pytz, Django
Successfully installed Django-1.11.29 pytz-2021.1
WARNING: You are using pip version 20.3.1; however, version 20.3.4 is available.
You should consider upgrading via the '/Users/anders/showcases/python/django/4/venv/bin/python -m pip install --upgrade pip' command.
src
├── manage.py
└── src
    ├── __init__.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py

1 directory, 5 files
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying sessions.0001_initial... OK
demo
├── __init__.py
├── admin.py
├── apps.py
├── migrations
│   └── __init__.py
├── models.py
├── tests.py
└── views.py

1 directory, 7 files
```

Using [this tutorial](https://docs.djangoproject.com/en/1.11/intro/tutorial01/#write-your-first-view) to add content to views, urls etc.

```console
$ cat << EOF > src/demo/urls.py
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]
EOF
```
```console
$ cat << EOF > src/src/urls.py
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^demo/', include('demo.urls')),
    url(r'^admin/', admin.site.urls),
]
EOF
```
```console
$ cat << EOF > src/demo/views.py
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
EOF
```

Setting up the first test from [here](https://docs.djangoproject.com/en/1.11/topics/testing/overview/):
```console
$ cat << EOF > src/demo/tests.py
from django.test import TestCase
from django.urls import reverse

class PostTestCase(TestCase):
    def test_post(self):
        response = self.client.post(reverse('index'), {'name' : 'new_object'})
        self.assertEqual('--BoUnDaRyStRiNg\r\nContent-Disposition: form-data; name="name"\r\n\r\nnew_object\r\n--BoUnDaRyStRiNg--\r\n', response.content)
EOF
cd src/ && ../venv/bin/python manage.py test demo
.
----------------------------------------------------------------------
Ran 1 test in 0.028s

OK
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
Destroying test database for alias 'default'...
```

