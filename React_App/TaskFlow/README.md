# 📝 MERN Todo App

A full-stack Todo application built using the MERN stack—**MongoDB, Express.js, React, and Node.js**. This app allows users to register, log in, and manage their personal todo lists with full **CRUD functionality** and **JWT-based authentication**. The frontend is fully responsive and optimized for both desktop and mobile devices.

---

## 🚀 Features

- ✅ User Registration & Login (JWT Auth)
- 🧾 Create, Read, Update, Delete Todos
- 🔒 Secure API routes with token-based authentication
- 📱 Responsive UI built with React
- 💾 Persistent data storage using MongoDB
- ⚙️ RESTful API design with Express & Node.js

---

## 🛠️ Tech Stack

- **Frontend**: React, Axios, Tailwind CSS *(or CSS Modules/Bootstrap — depending on what you used)*
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Database**: MongoDB (Local or MongoDB Atlas)

---


### Setup Backend

cd backend
npm install
npm start

> Make sure to create a `.env` file with:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

### Setup Frontend

cd client
npm install
npm start

---



## 📂 Folder Structure

mern-todo-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── client/
│   ├── public/
│   ├── src/
│   └── App.js
└── README.md



