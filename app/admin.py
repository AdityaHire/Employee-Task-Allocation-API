from app.models import Tasks, User
from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

admin.site.site_header = "Employee Task Management Admin"
admin.site.site_title = "Employee Task Management Admin Portal"

@admin.register(User)
class UserAdmin(ImportExportModelAdmin):
    pass

@admin.register(Tasks)
class TasksAdmin(ImportExportModelAdmin):
    pass