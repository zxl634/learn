# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.apps import AppConfig


class AppConfig(AppConfig):
    name = 'app'

    def ready(self):
        from . import signals
        # import project.app.signals  # noqa
