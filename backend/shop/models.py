from django.db import models


from product.models import Choices
from django.conf import settings



class Adress(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='adress_user')
    country = models.CharField('Страна', max_length=250)
    region = models.CharField('Край/Область/Регион', max_length=250)
    city = models.CharField('Город/Населённый пункт', max_length=250)
    street = models.CharField('Улица/Дом/Квартира', max_length=250)
    phone = models.CharField('Телефон', max_length=50, default='')
    postal_code = models.CharField('Почтовый индекс', max_length=20)

    class Meta:
        ordering = ['-id']
        verbose_name = "Адрес доставки"
        verbose_name_plural = "Адреса доставки"

    def __str__(self):
        return self.country

class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='user')
    adress = models.ForeignKey(Adress, on_delete=models.CASCADE, related_name='adress',verbose_name='Адрес доставки')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated = models.DateTimeField(auto_now_add=True, verbose_name='Дата обновления')
    paid = models.BooleanField(default=False, verbose_name='Статус оплаты')

    class Meta:
        ordering = ['-created']
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"

    def get_total_price(self):
        total = sum(item.get_cost() for item in self.order.all())
        return total

    def __str__(self):
        return f'{self.get_total_price()}'


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order')
    choices = models.ForeignKey(Choices, on_delete=models.CASCADE, related_name='choices')
    quantity = models.PositiveSmallIntegerField(default=1)

    class Meta:
        ordering = ['-id']
        verbose_name = "Товар в заказ"
        verbose_name_plural = "Товары в заказах"

    def get_cost(self):
        return self.choices.price * self.quantity

    def __str__(self):
        return str(self.get_cost())



