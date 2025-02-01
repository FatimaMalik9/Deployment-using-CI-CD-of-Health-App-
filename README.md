## Healthcare App 🏥
# Description
The Healthcare App is a Node.js and MongoDB-based application designed to manage patients, 
doctors, and medical records(patient reports). It allows users to store patient information, book doctor appointments, and retrieve medical history efficiently. You can login as a docker and register 
as a docker, as a patient you have to login as a patient
# Features
✅ MVC(Models,Views(hbs), Controllers)
✅ User authentication (JWT-based).
✅ CRUD operations for patient records.
✅ Book, update, or cancel doctor appointments.
✅ Store and retrieve patient medical history.
✅ Secure database storage using MongoDB.
# Technologies Used
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ORM)
Authentication: JSON Web Tokens (JWT)
Templating Engine: Handlebars (hbs)
# Installation
1. Clone the repository
git clone https://github.com/FatimaMalik9/MongoDB-with_nodeJS_Healthcare_Project.git
# Install Dependencies
npm init -y
npm i express
npm i mongoose
# Setup Environment Variables
MONGO_URI=mongodb://localhost:27017/healthcare
PORT=3000
# Run the Application
node app.js
or
npm start
# Access the App
Open http://localhost:3000/ in your browser.
API Endpoints
User Authentication 
GET /patients - Get all patients
POST /patients - Add a new patient
PUT /patients/:id - Update patient reports
DELETE /patients/:id - Delete a patient
Doctors
GET /doctors - Get all doctors
POST /doctors - Add a new doctor(register as a doctor)
PUT /doctors/:id - Update doctor details
DELETE /doctors/:id - Delete a doctor
Appointments
POST /appointments - Book an appointment
GET /appointments - View all reports
DELETE /appointments/:id - Cancel an appointment
