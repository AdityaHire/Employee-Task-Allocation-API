# Employee Task Management System

 managing employees and their tasks.

## Tech Stack

- **Backend**: Django REST Framework
- **Frontend**: React
- **Database**: SQLite

## Setup

### Backend
```bash
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Features

- Add employees
- Assign tasks to employees
- View and manage tasks

## API Endpoints

- `/api/employees/` - Employee management
- `/api/tasks/` - Task management
