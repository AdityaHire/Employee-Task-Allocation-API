from rest_framework import serializers
from .models import User,Tasks

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tasks
        fields='__all__'

        