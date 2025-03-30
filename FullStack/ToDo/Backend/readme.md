# ToDo App - Backend

## 📌 Overview
This is the backend for the ToDo application, built using Node.js and Express. It provides RESTful APIs to handle CRUD operations for tasks, with MongoDB as the database.

## 🚀 Live API
[Click here to view the deployed backend](https://todo-73wc.onrender.com)

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- bcrypt
- cors

## 📂 Project Structure
```
📦Backend
┣ 📂config
┃ ┗ 📜db.js
┣ 📂models
┃ ┗ 📜todo.models.js
┣ 📂routes
┃ ┗ 📜todo.routes.js
┣ 📜.env
┣ 📜.gitignore
┣ 📜package-lock.json
┣ 📜package.json
┣ 📜readme.md
┗ 📜server.js
```

## ✨ Features
- Create a new task
- Read all tasks
- Update an existing task
- Delete a task

## 📦 Installation & Setup
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```
4. Start the server:
   ```sh
   npm start
   ```
   Or for development mode with auto-restart:
   ```sh
   npm run dev
   ```

## 🔗 API Endpoints
- `GET /todos` - Fetch all tasks
- `POST /todos` - Create a new task
- `PUT /todos/:id` - Update a task
- `DELETE /todos/:id` - Delete a task

## 🤝 Contributing
Feel free to submit issues or pull requests to improve the project.

## 📜 License
This project is open-source and available under the MIT License.

