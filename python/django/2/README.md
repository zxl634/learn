# User ClojureScript in a Django project

The point of this article is to use code made with ClojureScript in a Django project.

I need a Django project and a Clojure project. I create a [virtual environment](https://docs.python.org/3/tutorial/venv.html), install Django and create the project files:
```bash
$ python3 -m venv django && django/bin/pip install Django && \
django/bin/django-admin startproject cljsite && cd cljsite && tree
Collecting Django
  Using cached Django-3.1.4-py3-none-any.whl (7.8 MB)
Collecting sqlparse>=0.2.2
  Using cached sqlparse-0.4.1-py3-none-any.whl (42 kB)
Collecting asgiref<4,>=3.2.10
  Using cached asgiref-3.3.1-py3-none-any.whl (19 kB)
Collecting pytz
  Using cached pytz-2020.4-py2.py3-none-any.whl (509 kB)
Installing collected packages: sqlparse, asgiref, pytz, Django
Successfully installed Django-3.1.4 asgiref-3.3.1 pytz-2020.4 sqlparse-0.4.1
WARNING: You are using pip version 20.2.3; however, version 20.3.3 is available.
You should consider upgrading via the '/Users/avr/showcases/python/django/2/django/bin/python3 -m pip install --upgrade pip' command.
.
├── cljsite
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── manage.py

1 directory, 6 files
```
Let's try to start the server to see that everything is working: `python manage.py runserver`.

Next step is to serve some content from a ClojureScript app.


