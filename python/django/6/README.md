# Signals

The purpose of this project is to learn about Django signals and testing of them.



Running `source setup.sh create` to create project.

https://simpleisbetterthancomplex.com/tutorial/2016/07/28/how-to-create-django-signals.html
https://github.com/vitorfs/cmdbox
https://stackoverflow.com/questions/18532539/want-to-disable-signals-in-django-testing
https://docs.djangoproject.com/en/1.11/topics/signals/
https://stackoverflow.com/questions/3817213/proper-way-to-test-django-signals

Snippet doesn't work.
```python
import mock

class SignalTests(TestCase):
    @mock.patch('app.signals.my_callback')
    def test_signal_triggered(self, mock):
        self.client.get(reverse('app:index'))
        # Check that your signal was called.
        self.assertTrue(mock.called)

        # Check that your signal was called only once.
        self.assertEqual(mock.call_count, 1)

        # Do whatever else, like actually checking if your signal logic did well.  
```

