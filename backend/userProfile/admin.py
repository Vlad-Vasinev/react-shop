from django.contrib.admin.sites import NotRegistered
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import UserProfile
from django.contrib import admin


class MyUserAdmin(UserAdmin):
    readonly_fields = ["date_joined"]
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password',)}),
        (('Personal info'), {'fields': ('first_name', 'last_name',)}),
        (('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
        (('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2')}
        ),
    )
    form = UserChangeForm
    add_form = UserCreationForm

try:
    admin.site.unregister(UserProfile)
except NotRegistered:
    pass

admin.site.register(UserProfile, MyUserAdmin)

