# 🎬 Movies Web App (MERN Stack)

A full-stack **MERN (MongoDB, Express.js, React, Node.js)** web application built to browse movies, manage user authentication, and interact with a custom RESTful backend API.

---

## Features

### 🎥 Movies API & Frontend Integration
* **Full API Integration:** All frontend data fetches are routed through the custom Express backend API rather than calling external third-party APIs directly from the client.
* **Extended Movie Endpoints:** Includes custom endpoints beyond basic listings (e.g., `/upcoming`, `/genres`, movie details, and additional filtered views).
* **Dynamic Routing & State Management:** Built with React Router for multi-view navigation and React Context for global state and performance optimization.

### 🔐 User Authentication & Authorization
* **Backend Auth (Node/Express/MongoDB):** Secure user registration and login backed by MongoDB and Mongoose schemas.
* **Frontend Auth Context:** Persistent authentication state across the React application using React Context.
* **Protected Routes:** Restricts access to specific pages and features exclusively to authenticated users.
* **Dynamic Navigation Header:** Site header updates dynamically based on the user's login status (toggling between Login/Sign Up and authenticated user controls).

### 🗄️ Custom Secondary API
* **Mongoose Data Modeling:** Custom Mongoose model and Express router implementing RESTful `GET` endpoints (e.g., `[Insert your second API resource, e.g., Reviews / Favourites / Actors]`).

---

## 🛠️ Tech Stack

* **Frontend:** React, React Router, React Context API
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication:** JSON Web Tokens (JWT) / Password Hashing 
