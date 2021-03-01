from django.test import TestCase
from django.urls import reverse
from django.contrib.staticfiles.testing import StaticLiveServerTestCase

# from selenium.webdriver.firefox.webdriver import WebDriver
from selenium import webdriver

class FirstTest(TestCase):
    def first_test(self):
        self.assertEqual(1, 1)


class ViewTests(TestCase):
    def test_view(self):
        response = self.client.get(reverse('app:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Hello, world")


class MySeleniumTests(StaticLiveServerTestCase):
    @classmethod
    def setUpClass(cls):
        super(MySeleniumTests, cls).setUpClass()
        cls.selenium = webdriver.Chrome()
        cls.selenium.implicitly_wait(10)

    @classmethod
    def tearDownClass(cls):
        # cls.selenium.quit()
        super(MySeleniumTests, cls).tearDownClass()

    def test_login(self):
        self.selenium.get('%s%s' % (self.live_server_url, '/admin/'))
        username_input = self.selenium.find_element_by_name("username")
        username_input.send_keys('myuser')
        password_input = self.selenium.find_element_by_name("password")
        password_input.send_keys('secret')
        self.selenium.find_element_by_xpath('//input[@value="Log in"]').click()
