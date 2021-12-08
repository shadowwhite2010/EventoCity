from django.db import models
from django.db.models.base import Model
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    use_in_migrations = True
    def create_superuser(self, email, full_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, full_name, password, **other_fields)

    def create_user(self, email, full_name, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, full_name = full_name, **extra_fields)

        user.set_password(password)
        user.save()

        return user

class User(AbstractBaseUser, PermissionsMixin):
    id=models.AutoField(primary_key=True)
    email = models.EmailField(max_length=255, unique=True)
    full_name=models.CharField(max_length=50, null = True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    UserPhotoName = models.CharField(max_length=200, null = True)
    address = models.CharField(max_length=200, null= True)
    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    
    def __str__(self):
        return self.email

class Sponser(models.Model):
    sponserId = models.AutoField(primary_key=True, db_index=True, unique=True, editable=False)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)

class Event(models.Model):
    EventId = models.AutoField(primary_key=True, db_index=True, unique=True, editable=False)
    EventName = models.CharField(max_length=100)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    sponserId = models.ForeignKey(Sponser, on_delete=models.CASCADE)
    EventDescription = models.CharField(max_length=1000)
    DateOfEvent = models.DateTimeField()
    EventVenue = models.CharField(max_length=200)
    EventCost = models.IntegerField()
    EventPhotoName = models.CharField(max_length=300, null=True, blank=True)
    def __str__(self):
        return self.EventName       

class Team(models.Model):
    teamId = models.AutoField(primary_key=True, db_index=True, unique=True, editable=False)
    title = models.CharField(max_length=300)
    EventId = models.ForeignKey(Event, on_delete=models.CASCADE)

class Participents(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    EventId = models.ForeignKey(Event, on_delete=models.CASCADE) 