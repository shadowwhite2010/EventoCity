from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(User)
class UserModelAdmin(admin.ModelAdmin):
    list_display=['id','full_name','email','password']

admin.site.register(Event)
admin.site.register(Team)
admin.site.register(Participents)
admin.site.register(Sponser)
