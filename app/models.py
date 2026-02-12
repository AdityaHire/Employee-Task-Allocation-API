from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.name

class Tasks(models.Model):
    STATUS_CHOICES=(
        ('PENDING','PENDING'),
        ('In Progress','In Progress'),
        ('COMPLETED','COMPLETED'),
    )

    title = models.CharField(max_length=100)
    status = models.CharField(max_length=20,choices=STATUS_CHOICES,default='PENDING')
    assigned_date = models.DateTimeField(auto_now_add=True)

    employee = models.ForeignKey(User,on_delete=models.CASCADE,related_name='tasks')

    def __str__(self):
        return self.title