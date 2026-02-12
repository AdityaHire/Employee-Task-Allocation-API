from django.urls import path
from . import views

urlpatterns=[
    path('employees/',views.add_employee,name='add_employee'),
    path('tasks/',views.add_task,name='add_task'),
    path('tasks/all/',views.get_tasks,name='get_tasks')
]