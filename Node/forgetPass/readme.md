# 🔐 Forget Password Authentication API (Node.js + MongoDB)

This project is a simple backend API for user authentication with **Forget Password functionality**, built using:

- **Node.js**
- **Express**
- **MongoDB (Mongoose)**
- **JWT (JSON Web Token)**
- **Bcrypt**
- **Nodemailer**

---

## 🚀 Features

- User Signup
- User Login
- Forget Password with Email Reset Link
- Reset Password with Token Expiry
- Validation for Input Fields
- Secure Password Hashing with Bcrypt

---

## 🛠️ Tech Stack & Dependencies

| Package        | Description                                |
|----------------|--------------------------------------------|
| express        | Web framework for Node.js                  |
| mongoose       | MongoDB ODM                                |
| bcrypt         | Hashes passwords securely                  |
| validator      | Validates email and other input formats    |
| dotenv         | Loads environment variables                |
| jsonwebtoken   | Creates and verifies JWTs                  |
| nodemailer     | Sends reset password emails via Gmail      |

Install dependencies:

```bash
npm install express mongoose bcrypt validator dotenv jsonwebtoken nodemailer
```

---

## 📂 Project Structure

```
.
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   └── userController.js     # Signup, Login, Forget Password, Reset
├── models/
│   └── User.js               # User schema
├── routes/
│   └── userRoute.js          # API routes
├── .env                      # Environment variables
├── server.js                 # Entry point
└── README.md
```

---

## 🧪 API Endpoints

### 📝 Signup
`POST /signup`

```json
{
  "name": "Shiv",
  "email": "shiv@example.com",
  "password": "123456"
}
```

---

### 🔐 Login
`POST /login`

```json
{
  "email": "shiv@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "JWT_TOKEN"
}
```

---

### 📧 Forget Password
`POST /forgetpassword`

```json
{
  "email": "shiv@example.com"
}
```

Sends a password reset link to the user's email.

---

### 🔁 Reset Password
`POST /resetPassword`

```json
{
  "token": "RESET_TOKEN",
  "newPassword": "newsecurepassword"
}
```

---

## 🌐 .env Variables

These environment variables are required in your `.env` file:

```env
PORT=2030
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_gmail_email
EMAIL_PASS=your_gmail_app_password
```

> ✅ Make sure to use a Gmail App Password if 2FA is enabled.

---

## ✅ How to Run

```bash
npm install
npm start
```

Visit: `http://localhost:2030`

---


