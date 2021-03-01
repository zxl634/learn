from django.test import TestCase
from django.urls import reverse

class FirstTestCase(TestCase):
    def test_post(self):
        self.assertEqual(1, 1)
