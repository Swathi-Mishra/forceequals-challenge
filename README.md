# 🚀 ForceEquals Full Stack Development Internship Challenge

This repository contains the solution for the ForceEquals Full Stack Development Internship Challenge. It includes:

1. ✅ **Target Account Matching API** – A secure RESTful API built using Node.js & Express.
2. ✅ **LinkedIn Profile Enhancer** – A lightweight Chrome extension that injects a widget into LinkedIn profile pages.

---

## 📁 Project Structure

```
forceequals-internship-challenge/
├── backend/               # Backend API (Node.js, Express, JWT)
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
└── linkedin-widget/       # Chrome Extension (JS, HTML, CSS)
    ├── manifest.json
    └── content.js
```

---

## 🌐 Challenge 1: Target Account Matching API

### Features
- JWT-based login authentication
- Secure endpoints to:
  - Fetch company match scores
  - Update target status of a company

### Endpoints

| Method | Endpoint                  | Description                      |
|--------|---------------------------|----------------------------------|
| POST   | `/login`                  | Authenticate user                |
| GET    | `/accounts`               | Get list of matched companies    |
| POST   | `/accounts/:id/status`    | Update company target status     |

### 🛠 Setup & Run

```bash
cd backend
npm install
node index.js
```

Server runs at: `http://localhost:3000`

### 🔐 Sample Login Payload

```json
{
  "username": "user1",
  "password": "pass123"
}
```

> Use the returned token as a Bearer token in Authorization header for protected routes.

---

## 💡 Challenge 2: LinkedIn Profile Enhancer Widget

### Features
- Injects a floating widget on LinkedIn profile pages
- Displays:
  - **Company Name**
  - **Match Score** (with progress bar)
  - **Account Status** (colored tag)
- Visibility toggle using `chrome.storage`
- Fully responsive (≤ 300px width)

### 🧪 How to Use

1. Open Chrome → Go to `chrome://extensions`
2. Enable **Developer Mode**
3. Click **Load Unpacked** and select the `linkedin-widget` folder
4. Visit any LinkedIn profile (`https://www.linkedin.com/in/...`)
5. Widget appears at bottom-right corner

---

## 📦 Technologies Used

### Backend
- Node.js
- Express.js
- JSON Web Token (JWT)
- Body-parser, CORS

### Frontend
- JavaScript (ES6)
- HTML/CSS
- Chrome Extension APIs

---

## ✅ Submission

- Public GitHub Repo: **[Your Repo Link Here]**
- Submitted via: [ForceEquals Form](https://forms.gle/VueogfhjuS7HXuS17)

---

## 🙌 Acknowledgment

Grateful for the opportunity to participate in the ForceEquals Hiring Challenge.  
Looking forward to contributing to real-world, impactful solutions!

---
