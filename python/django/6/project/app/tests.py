from django.test import TestCase
from django.urls import reverse

class FirstTest(TestCase):
    def first_test(self):
        self.assertEqual(1, 1)


class ViewTests(TestCase):
    def test_view(self):
        response = self.client.get(reverse('app:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Hello, world")
