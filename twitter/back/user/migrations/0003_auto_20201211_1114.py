# Generated by Django 3.1.4 on 2020-12-11 02:14

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_user_birthday'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='image',
            field=models.ImageField(default='media/default_image.jpeg', upload_to=''),
        ),
        migrations.AddField(
            model_name='user',
            name='user_id',
            field=models.CharField(default=django.utils.timezone.now, max_length=50, unique=True),
            preserve_default=False,
        ),
    ]