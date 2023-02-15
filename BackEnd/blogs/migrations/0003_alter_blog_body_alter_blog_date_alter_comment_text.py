# Generated by Django 4.1.2 on 2023-01-16 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blogs", "0002_alter_blog_user_alter_comment_blog_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="blog",
            name="body",
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name="blog",
            name="date",
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name="comment",
            name="text",
            field=models.CharField(max_length=100, null=True),
        ),
    ]