from django.test import TestCase
from django.urls import reverse
from .models import Question
import datetime

class FirstTest(TestCase):
    def first_test(self):
        self.assertEqual(1, 1)


class ViewTests(TestCase):
    def test_view(self):
        response = self.client.get(reverse('app:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Hello, world")


class ModelTests(TestCase):
    def setUp(self):
        self.question_text = "Delicious question text"
        Question.objects.create(question_text=self.question_text, pub_date=datetime.datetime.now())

    def test_question_text(self):
        question = Question.objects.get(question_text=self.question_text)
        self.assertEqual(question.question_text, self.question_text)
