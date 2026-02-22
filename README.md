🚀 OmniStock Platform

Microservices-based inventory management platform built with Node.js, Express, and PostgreSQL.

This project is designed as a learning-focused backend architecture to simulate a production-ready microservices system.

🧠 Project Goal

OmniStock is being developed to:

Learn professional backend architecture

Implement authentication & authorization correctly

Practice microservices communication

Prepare for real-world backend developer roles

🏗 Architecture Overview

The platform follows a microservices architecture.

Omnistock-Platform/
│
├── docker-compose.yaml
├── services/
│   ├── auth-service/
│   └── (future services...)

Each service is isolated and responsible for a specific domain.

🔐 Auth Service

The auth-service handles:

User registration

Login

JWT authentication

Role-Based Access Control (RBAC)

📂 Auth Service Structure
auth-service/
│
├── src/
│   ├── config/
│   │    └── db.js
│   ├── controllers/
│   │    └── auth.controller.js
│   ├── middleware/
│   │    ├── auth.middleware.js
│   │    └── role.middleware.js
│   ├── routes/
│   │    └── auth.routes.js
│   ├── app.js
│   └── server.js
│
└── .env
🔑 Features Implemented
✅ Authentication

User registration with hashed passwords (bcrypt)

Login with credential validation

JWT token generation (1 hour expiration)

✅ Authorization (RBAC)

Role-based access control

Middleware chaining

401 for unauthenticated

403 for unauthorized

Example:

GET /admin

Accessible only by users with role ADMIN.

🧾 Tech Stack

Node.js

Express

PostgreSQL

JWT (jsonwebtoken)

bcrypt

Docker (for container orchestration)

🔐 Security Practices

Password hashing with bcrypt

Environment variables for secrets

JWT signed with secret key

Role validation middleware

.env excluded from version control

🚀 Running the Project
1️⃣ Clone the repository
git clone https://github.com/ZaCtox/Omnistock-Platform.git
cd Omnistock-Platform
2️⃣ Install dependencies (inside auth-service)
cd services/auth-service
npm install
3️⃣ Configure environment variables

Create a .env file:

PORT=3001
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
4️⃣ Start the service
npm run dev
📌 API Endpoints
Register
POST /api/auth/register
Login
POST /api/auth/login
Protected Route
GET /api/auth/profile
Admin Only
GET /api/auth/admin
🧩 Future Improvements

Refresh tokens

Token blacklist / revocation

Role validation against database

Inter-service authentication

API Gateway

Full microservices orchestration

Unit & integration testing

CI/CD pipeline

🎯 Learning Focus

This project is structured to:

Apply clean architecture principles

Separate controllers, services, and repositories

Understand stateless authentication

Implement scalable RBAC

Prepare for backend technical interviews

👨‍💻 Author

José Lagos
Backend Developer in progress 🚀