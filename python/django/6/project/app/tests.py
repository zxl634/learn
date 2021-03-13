from django.test import TestCase
from django.urls import reverse
from models import Question
import mock

class FirstTest(TestCase):
    def first_test(self):
        self.assertEqual(1, 1)


class ViewTests(TestCase):
    def test_view(self):
        response = self.client.get(reverse('app:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Hello, world")


class SignalTests(TestCase):
    @mock.patch('app.signals.my_handler')
    def test_signal_triggered(self, mock):
        question = Question(question_text="What's new?")
        question.save()
        # Check that your signal was called.
        self.assertTrue(mock.called)

        # Check that your signal was called only once.
        self.assertEqual(mock.call_count, 1)

        # Do whatever else, like actually checking if your signal logic did well.  
