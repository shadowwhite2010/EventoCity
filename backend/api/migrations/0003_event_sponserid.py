# Generated by Django 3.2.8 on 2021-12-08 11:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_event_sponserid'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='sponserId',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.sponser'),
            preserve_default=False,
        ),
    ]
