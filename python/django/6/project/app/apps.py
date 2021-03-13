# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.apps import AppConfig


class AppConfig(AppConfig):
    assert False
    name = 'app'

    def ready(self):
        import project.app.signals  # noqa
