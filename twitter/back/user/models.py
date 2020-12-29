import uuid
from django.db import models
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)
from datetime import datetime


def get_UUID():
    id = '@'
    return id + str(uuid.uuid4().hex)


class UserManager(BaseUserManager):
    def create_user(self, email, birthday, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            birthday=birthday,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, birthday, password):
        user = self.create_user(
            email,
            birthday=birthday,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_active = True
        user.save(using=self._db)
        return user


def upload_to(instance, filename):
    return '{email}/{date}/{filename}'.format(
        email=instance.email,
        date=datetime.today().strftime('%y-%m'),
        filename=filename)


class User(AbstractBaseUser):
    objects = UserManager()
    email = models.EmailField(
        verbose_name='email',
        max_length=255,
        unique=True,
        db_index=True,
    )
    user_id = models.CharField(
        blank=True, max_length=50, unique=True, default=get_UUID)
    birthday = models.DateField()
    key = models.CharField(blank=True, null=True, max_length=50)
    is_active = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    is_staff = models.BooleanField(default=False)
    image = models.ImageField(
        upload_to=upload_to,
        default='default/default_profile_400x400.png')

    USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['birthday']

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    class Meta:
        db_table = 'user'
