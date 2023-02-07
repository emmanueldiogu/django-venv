import os
from .common import *

SECRET_KEY = os.environ('SECRET_KEY')

DEBUG = False

ALLOWED_HOSTS = ['agileproject.education.gov.ng',
                 'www.agileproject.education.gov.ng']

# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': '',
    }
}
