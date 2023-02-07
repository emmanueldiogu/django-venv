from .common import *

SECRET_KEY = "django-insecure-ah2sdxjyckhbsm&)8h1k1%=kso6a=9tbx6owxfvr3e(wzc2y8e"

DEBUG = True

ALLOWED_HOSTS = ["testserver", "127.0.0.1"]

# Database
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
