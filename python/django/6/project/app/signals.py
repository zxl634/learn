from django.core.signals import request_finished
from django.db.models.signals import pre_save
from django.dispatch import receiver
from app.models import Question

# pattern 1
@receiver(request_finished)
def my_callback(sender, **kwargs):
    print("Request finished!")
    
# pattern 2 
def my_callback2(sender, **kwargs):
    print("Request finished, again!")

request_finished.connect(my_callback2)

@receiver(pre_save, sender=Question)
def my_handler(sender, **kwargs):
    print("pre_save handler")
