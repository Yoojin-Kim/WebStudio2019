# Generated by Django 2.2.2 on 2019-06-23 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('impassionuser', '0002_auto_20190622_2311'),
    ]

    operations = [
        migrations.AddField(
            model_name='impassionuser',
            name='useremail',
            field=models.EmailField(default=0, max_length=128, verbose_name='사용자이메일'),
            preserve_default=False,
        ),
    ]
