# InterviewFlow - AI-Powered Technical Interview Platform

InterviewFlow is a full-stack AI-powered technical interview platform designed to streamline the online interview process. It enables organizations to conduct secure, real-time coding interviews while leveraging Artificial Intelligence to generate interview questions, evaluate candidate responses, and provide performance feedback.

The platform supports three different user roles—**Admin**, **Interviewer**, and **Candidate**—each with dedicated dashboards and functionalities. It combines secure authentication, collaborative coding, AI-assisted interviews, and interview management into a single application.

---

## Features

### Authentication & Security
- JWT-based authentication
- HTTP-only cookie session management
- Role-based access control
- Protected routes using middleware
- Secure login and logout functionality

### Admin Portal
- Manage interviewers and candidates
- Schedule technical interviews
- Assign interviewers to candidates
- Monitor interview sessions
- View interview analytics

### Interviewer Portal
- View assigned interviews
- Conduct live coding interviews
- Generate AI interview questions
- Evaluate candidates
- Submit interview feedback

### Candidate Portal
- Secure login
- View scheduled interviews
- Participate in coding interviews
- Attend AI-powered mock interviews
- Receive interview feedback

### AI Features
- AI-generated technical interview questions
- AI-powered mock interviews
- Automated response evaluation
- Intelligent interview feedback using Google Gemini AI

### Real-Time Coding Environment
- Monaco Editor integration
- Socket.IO powered live collaboration
- Real-time code synchronization
- Live interviewer-candidate interaction

### Backend
- RESTful API architecture
- Modular Controller-Service-Route pattern
- Middleware-based authentication
- Centralized error handling

---

# Tech Stack

## Frontend
- Next.js
- React.js
- HTML
- CSS
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MySQL

## Authentication
- JWT
- HTTP-only Cookies

## AI
- Google Gemini AI

## Real-Time Communication
- Socket.IO

## Code Editor
- Monaco Editor

---

# Project Architecture

```
InterviewFlow
│
├── Client (Next.js)
│   ├── Admin Dashboard
│   ├── Interviewer Dashboard
│   ├── Candidate Dashboard
│   └── Authentication Pages
│
├── Server (Node.js + Express)
│   ├── Controllers
│   ├── Services
│   ├── Routes
│   ├── Middleware
│   ├── Database
│   └── Socket.IO Server
│
└── MySQL Database
```

---

# Authentication Flow

1. User logs in.
2. Credentials are validated.
3. JWT token is generated.
4. JWT is stored in an HTTP-only cookie.
5. Middleware verifies the token.
6. User is redirected based on role.
7. Protected APIs are accessible only to authenticated users.

---

# AI Workflow

1. Candidate starts interview.
2. Google Gemini generates interview questions.
3. Candidate answers questions.
4. AI evaluates responses.
5. Feedback and scores are displayed.

---

# Live Coding Workflow

1. Interview session starts.
2. Candidate joins coding room.
3. Interviewer joins the same room.
4. Socket.IO synchronizes code changes.
5. Monaco Editor updates in real time.
6. Interviewer evaluates coding performance.

---

# Database

The MySQL database stores:

- User accounts
- Authentication details
- Interview schedules
- Coding sessions
- Interview feedback
- AI evaluation results

---

# Future Enhancements

- Video calling integration
- Screen sharing
- Resume parsing
- AI cheating detection
- Automated coding test evaluation
- Multi-language code execution
- Interview recording
- Email notifications
- Calendar integration
- Performance analytics dashboard

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Poojitha7799/InterviewFlow.git
```

## Install Client

```bash
cd client
npm install
```

## Install Server

```bash
cd ../server
npm install
```

## Configure Environment Variables

Create a `.env` file inside the server directory.

Example:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=interviewflow
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_api_key
```

---

## Start Backend

```bash
npm run dev
```

## Start Frontend

```bash
npm run dev
```

---

# Author

**Poojitha Bathini**

B.Tech Computer Science and Engineering

National Institute of Technology Manipur

GitHub: https://github.com/Poojitha7799

LinkedIn: https://linkedin.com/in/poojitha-bathini
