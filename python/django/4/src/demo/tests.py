from django.test import TestCase
from django.urls import reverse

class PostTestCase(TestCase):
    def test_post(self):
        response = self.client.post(reverse('index'), {'name' : 'new_object'})
        self.assertEqual('--BoUnDaRyStRiNg\r\nContent-Disposition: form-data; name="name"\r\n\r\nnew_object\r\n--BoUnDaRyStRiNg--\r\n', response.content)
