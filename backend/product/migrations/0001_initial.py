# Generated by Django 4.1.7 on 2023-04-14 12:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name='Название категории')),
                ('image', models.ImageField(upload_to='category/', verbose_name='Изображение категории')),
            ],
            options={
                'verbose_name': 'Категория',
                'verbose_name_plural': 'Категории',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=155, verbose_name='Название товара')),
                ('choice_cat', models.CharField(blank=True, max_length=155, null=True, verbose_name='Название подкатегорий')),
                ('specifications', models.TextField(blank=True, null=True, verbose_name='Характеристики')),
                ('equipment', models.TextField(blank=True, null=True, verbose_name='Комплектация')),
                ('is_published', models.BooleanField(default=False, verbose_name='Опбуликовано')),
                ('created_at', models.DateTimeField(auto_now=True, verbose_name='Дата публикации')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.category', verbose_name='Категория товара')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Владелец поста')),
            ],
            options={
                'verbose_name': 'Товар',
                'verbose_name_plural': 'Товары',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Videos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video', models.FileField(upload_to='video/', verbose_name='Общие видео товаров')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='videos', to='product.product', verbose_name='Продукт')),
            ],
            options={
                'verbose_name': 'Видео товара',
                'verbose_name_plural': 'Видео товаров',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='image/', verbose_name='Общие изображения товаров')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='product.product', verbose_name='Продукт')),
            ],
            options={
                'verbose_name': 'Изображения товара',
                'verbose_name_plural': 'Изображения товаров',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Choices',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name='Имя типа товара цвет/вкус')),
                ('article_number', models.CharField(max_length=50, verbose_name='Артикул')),
                ('in_stock', models.BooleanField(default=True, verbose_name='В наличии')),
                ('count', models.PositiveIntegerField(default=0, verbose_name='Колличество товара')),
                ('image', models.ImageField(upload_to='choices/', verbose_name='Изображение категории')),
                ('price', models.PositiveIntegerField(verbose_name='Цена товара')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='choices', to='product.product', verbose_name='Продукт')),
            ],
            options={
                'verbose_name': 'Разновидность товара',
                'verbose_name_plural': 'Разновидности товаров',
                'ordering': ['-id'],
            },
        ),
    ]
