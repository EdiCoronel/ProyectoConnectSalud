# Generated by Django 4.2 on 2023-05-28 01:40

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_listuser_alter_users_hora_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='hora',
            field=models.TimeField(default=datetime.time(22, 40, 2, 878210)),
        ),
    ]
