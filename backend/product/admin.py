from django.contrib import admin

from .models import *

admin.site.register(Category)
admin.site.register(Choices)
admin.site.register(Images)
admin.site.register(Videos)
admin.site.register(Product)
