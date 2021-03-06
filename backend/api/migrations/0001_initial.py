# Generated by Django 3.2.8 on 2021-12-08 11:19

import api.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('full_name', models.CharField(max_length=50, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('UserPhotoName', models.CharField(max_length=200, null=True)),
                ('address', models.CharField(max_length=200, null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('objects', api.models.UserAccountManager()),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('EventId', models.AutoField(db_index=True, editable=False, primary_key=True, serialize=False, unique=True)),
                ('EventName', models.CharField(max_length=100)),
                ('EventDescription', models.CharField(max_length=1000)),
                ('DateOfEvent', models.DateTimeField()),
                ('EventVenue', models.CharField(max_length=200)),
                ('EventCost', models.IntegerField()),
                ('EventPhotoName', models.CharField(blank=True, max_length=300, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('teamId', models.AutoField(db_index=True, editable=False, primary_key=True, serialize=False, unique=True)),
                ('title', models.CharField(max_length=300)),
                ('EventId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.event')),
            ],
        ),
        migrations.CreateModel(
            name='Sponser',
            fields=[
                ('sponserId', models.AutoField(db_index=True, editable=False, primary_key=True, serialize=False, unique=True)),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Participents',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('EventId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.event')),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='event',
            name='sponserId',
            field=models.ManyToManyField(blank=True, to='api.Sponser'),
        ),
        migrations.AddField(
            model_name='event',
            name='userId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
