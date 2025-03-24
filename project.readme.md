 MERN Blog Platform

## 📌 Project Overview
The **MERN Blog Platform** is a full-stack web application that allows users to create, edit, and publish blog posts. The project demonstrates best practices in **DevOps, deployment, CI/CD, monitoring, and security** for a **MERN (MongoDB, Express, React, Node.js)** stack application.

---

## 🚀 Features
- **User Authentication:** Secure login/logout functionality.
- **CRUD Operations:** Create, read, update, and delete blog posts.
- **WYSIWYG Editor:** Rich text editor for blog content.
- **Comment System:** Users can comment on blog posts.
- **Image Upload:** Upload images for blog posts.
- **Admin Dashboard:** Manage blogs and user roles.
- **Error Handling & Logging:** Implemented with **Winston & Sentry**.
- **Deployment:** Backend on **Render**, Frontend on **Vercel**.
- **Continuous Integration:** Automated testing using **GitHub Actions**.
- **Security:** HTTPS, environment variables, authentication.

---

## 📂 Project Structure
```
mern-blog-platform/
│
├── .github/
│   └── workflows/
│       ├── ci.yml                # GitHub Actions CI workflow
│       └── deploy.yml            # Deployment workflow
│
│── backend/             # Express.js backend
│   ├── config/          # Database and env configurations
│   ├── controllers/     # Business logic for API routes
│   ├── models/         # MongoDB schemas/models
│   ├── routes/         # API endpoints
│   ├── middleware/     # Authentication & logging middleware
│   ├── server.js       # Server entry point
│
│── frontend/           # React frontend
│   ├── src/           # Main React source code
│   ├── components/    # Reusable components
│   ├── pages/         # Pages and views
│   ├── services/      # API calls
│   ├── App.js        # Main app entry
│   ├── index.js      # ReactDOM render
│
│── README.md          # Documentation
│── .env               # Environment variables
│── .gitignore         # Ignored files
│── package.json       # Dependencies & scripts
```

---

## 🛠️ Technologies Used
### **Frontend**
- **React.js** (Vite)
- **Tailwind CSS** (Styling)
- **React Router** (Navigation)
- **Axios** (API requests)
- **Sentry** (Error tracking)

### **Backend**
- **Node.js** + **Express.js** (REST API)
- **MongoDB** (Database, hosted on MongoDB Atlas)
- **Mongoose** (ODM for MongoDB)
- **Winston & Morgan** (Logging)
- **JWT & Bcrypt** (Authentication & Security)
- **Sentry** (Error monitoring)

### **DevOps & Deployment**
- **Git & GitHub** (Version Control)
- **GitHub Actions** (CI/CD)
- **Render** (Backend Hosting)
- **Vercel** (Frontend Hosting)
- **PM2** (Process Management)

---

## 🏗️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone 
cd mern-blog-platform
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in `backend/` and add:
```
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
SENTRY_DSN=https://your-sentry-dsn
```
Run the backend server:
```bash
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
```
Create a `.env` file in `frontend/` and add:
```
VITE_API_URL=http://localhost:5000/api
SENTRY_DSN=https://your-sentry-dsn
```
Run the frontend server:
```bash
npm run dev
```

---

## 🔧 Deployment
### **Backend Deployment (Render)**
1. Push code to GitHub.
2. Create a **Render** account.
3. Deploy a new **Web Service**.
4. Link to GitHub repository.
5. Set up **Environment Variables**.
6. Deploy 🚀.

### **Frontend Deployment (Vercel)**
1. Push code to GitHub.
2. Create a **Vercel** account.
3. Import GitHub repository.
4. Configure `.env` variables in Vercel.
5. Deploy 🚀.

---

## 🔄 Continuous Integration (CI/CD)
### **GitHub Actions Setup**
GitHub Actions runs tests on every push. Add the following `.github/workflows/test.yml`:
```yaml
name: CI/CD Pipeline
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

---

## 📊 Monitoring & Logging
### **Backend Logging (Winston & Morgan)**
- Logs requests and errors to `logs/app.log`.

### **Error Tracking (Sentry)**
- **Backend:** Installed via `@sentry/node`.
- **Frontend:** Installed via `@sentry/react`.

### **Live Monitoring**
- **Render Dashboard**: View logs and errors.
- **Sentry Dashboard**: Track app crashes.

---

## 🔒 Security Measures
✔ **Environment Variables**: Sensitive credentials stored in `.env`.<br>
✔ **HTTPS**: Enforced for secure API communication.<br>
✔ **JWT Authentication**: Secure user authentication.<br>
✔ **Validation & Sanitization**: Prevents SQL/NoSQL injections.<br>
✔ **Rate Limiting & CORS**: Limits API abuse and cross-origin attacks.<br>

---

## ❌ Troubleshooting
### 🛑 Sentry Error: `requestHandler` Undefined
✅ **Solution:** Ensure `@sentry/node` is installed and imported correctly.
```js
import * as Sentry from "@sentry/node";
Sentry.init({ dsn: process.env.SENTRY_DSN });
```

### 🛑 MongoDB Connection Issues
✅ **Solution:** Check **MONGO_URI** in `.env` and ensure MongoDB is running.

### 🛑 CI/CD Pipeline Failing
✅ **Solution:** Check GitHub Actions logs and resolve any test failures.

---

## 📜 License
This project is licensed under the **MIT License**.

---
