from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User,Tasks
from .serializers import EmployeeSerializer,TaskSerializer  


@api_view (['POST'])
def add_employee(request):
    serializer = EmployeeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=201)
    return Response(serializer.data,status=400)

@api_view (['POST'])
def add_task(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=201)
    return Response(serializer.data,status=400) 

@api_view (['GET'])
def get_tasks(request):
    employee_id=request.query_params.get('employee_id')

    if employee_id:
        tasks=Tasks.objects.filter(employee_id=employee_id)
    else:
        tasks=Tasks.objects.all()

    serializer=TaskSerializer(tasks,many=True)
    return Response(serializer.data,status=200)

