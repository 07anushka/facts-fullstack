# Full Stack Mini Project – Facts App

## 1. Introduction

This project is developed as part of the Intern Technical Assignment.  
It is a full-stack web application where:

- Backend is built using Django REST Framework  
- Frontend is built using React JS  
- Application is deployed on AWS  
- Source code is maintained in GitHub  

Live Application:

Frontend URL:  
http://facts-frontend-anu.s3-website.eu-north-1.amazonaws.com

Backend API URL:  
http://13.53.174.163:8000/facts/

---

## 2. Technologies Used

### Backend
- Python   
- Django REST Framework  

### Frontend
- React JS  
- Fetch API  
- HTML & CSS  

### Cloud & Tools
- AWS  
- Git & GitHub  
- VS Code  

---

## 3. How I Developed This Application

### Backend Development

- Created Django project and app  
- Installed Django REST Framework  
- Created API endpoint  
- API returns JSON response:

```json
[
  { "id": 1, "fact": "The sun is a star." },
  { "id": 2, "fact": "Water boils at 100°C." },
  { "id": 3, "fact": "Earth has one moon." }
]
```

- Tested API in browser  
- Enabled CORS  

### Frontend Development

- Created React application  
- Used fetch() to call backend  
- Displayed facts  
- Added search filter  
- Styled UI  

---

## 4. How to Run Locally

### Backend

```
cd backend
python manage.py runserver
```

### Frontend

```
cd frontend
npm install
npm start
```
### AWS Deployment Steps

Backend
Created AWS instance
Installed Python and dependencies
Uploaded Django project
Ran server and made it public
---

## 5. What I Learned

- Building REST API using Django  
- Connecting React with backend  
- Handling CORS  
- Debugging fetch errors  
- AWS deployment  
- GitHub version control  
