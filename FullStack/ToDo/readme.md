# ToDo App - Full Stack

## 📌 Overview
This is a full-stack ToDo application built using React for the frontend and Node.js with Express for the backend. It allows users to manage tasks with CRUD operations, interacting with a MongoDB database.

## 🚀 Live Demo
- **Frontend:** [Click here to view](https://todo-v1-p1.netlify.app/)
- **Backend API:** [Click here to view](https://todo-73wc.onrender.com)

## 🛠️ Tech Stack
### Frontend:
- React (Vite)
- Tailwind CSS
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- bcrypt
- cors

---

## 📂 Project Structure
### Frontend:
```
📦Frontend
┣ 📂public
┃ ┗ 📜vite.svg
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┗ 📜react.svg
┃ ┣ 📂components
┃ ┃ ┗ 📜ToDo.jsx
┃ ┣ 📜App.css
┃ ┣ 📜App.jsx
┃ ┣ 📜index.css
┃ ┗ 📜main.jsx
┣ 📜.gitignore
┣ 📜eslint.config.js
┣ 📜index.html
┣ 📜package-lock.json
┣ 📜package.json
┣ 📜readme.md
┗ 📜vite.config.js
```

### Backend:
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

---

## ✨ Features
- Add new tasks
- Update existing tasks
- Delete tasks
- View all tasks

---

## 📦 Installation & Setup
### Clone the repository:
```sh
git clone https://github.com/shiv2240/Study.git
cd Study/FullStack/ToDo
```

### Frontend Setup:
```sh
cd Frontend
npm install
npm run dev
```

### Backend Setup:
```sh
cd Backend
npm install
```
1. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```
2. Start the server:
   ```sh
   npm start
   ```
   Or for development mode with auto-restart:
   ```sh
   npm run dev
   ```

---

## 🔗 API Endpoints
- `GET /todos` - Fetch all tasks
- `POST /todos` - Create a new task
- `PUT /todos/:id` - Update a task
- `DELETE /todos/:id` - Delete a task

---

## 📜 Dependencies
### Frontend:
```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.0.17",
    "axios": "^1.8.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.17"
  }
}
```

### Backend:
```json
{
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "mongoose": "^8.13.1",
    "nodemon": "^3.1.9"
  }
}
```

---

## 🤝 Contributing
Feel free to submit issues or pull requests to improve the project.

## 📜 License
This project is open-source and available under the MIT License.

