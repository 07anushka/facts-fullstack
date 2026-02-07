# Full Stack Mini Project – Facts App

## 1. Introduction

This project is developed as part of the *Intern Technical Assignment*.  
It is a full-stack web application where:

- Backend is built using Django REST Framework  
- Frontend is built using React JS  
- Application is deployed on AWS  
- Source code is maintained in GitHub

The application displays a list of facts fetched from the backend API and shows them in a simple user interface.

---

## 2. Technologies Used

### Backend
- Python  
- Django  
- Django REST Framework  

### Frontend
- React JS  
- Fetch API  
- HTML & CSS  

### Cloud & Tools
- AWS (Hosting)  
- Git & GitHub  
- VS Code

---

## 3. How I Developed This Application

### Backend Development

- Created Django project and app  
- Installed Django REST Framework  
- Created API endpoint:


- API returns JSON response:

```json
[
  { "id": 1, "fact": "The sun is a star." },
  { "id": 2, "fact": "Water boils at 100°C." },
  { "id": 3, "fact": "Earth has one moon." }
]
Tested API in browser
Enabled CORS for React connection

Frontend Development

- Created React application
- Used fetch() to call backend API
- Displayed list of facts
- Added search filter
- Applied basic styling

4. Integration

Connected React with Django
Fixed JSON and CORS issues
Tested complete flow


5. How to Run the Project Locally

Step 1 – Clone Repository
git clone <your-github-repo-url>
cd project-root

Step 2 – Run Backend
cd backend
python manage.py runserver

Backend will run at:
http://127.0.0.1:8000/api/facts/

Step 3 – Run Frontend

Open new terminal:

cd frontend
npm install
npm start

Frontend will run at:
http://localhost:5173/

6. AWS Deployment Steps

Backend
Created AWS instance
Installed Python and dependencies
Uploaded Django project
Ran server and made it public

Frontend
Created production build using:
npm run build

Hosted frontend on AWS

Connected with backend public API

Through this assignment I learned:
* How to create REST API using Django
* How React communicates with backend
* Fetching JSON data in React
* Handling CORS issues
* Debugging API errors
* Full stack project structure
* Basic AWS deployment
* GitHub version control