# GitHub Search App

A full-stack web application that integrates with the GitHub API to provide a seamless browsing experience for users and repositories. Built with React and Express, the app allows users to search for GitHub profiles, view detailed user information, and explore repositories and their commit history.

---

## Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [API](#api)
- [How It Works](#️-how-it-works)
- [Security](#-security)
- [Testing](#-testing)
- [How to Run](#️-how-to-run)
  - [Clone the repository](#1-clone-the-repository)
  - [Install dependencies](#2-install-dependencies)
    - [Backend](#backend-1)
    - [Frontend](#frontend-1)
  - [Run the application](#3-run-the-application)
    - [Start backend server](#start-backend-server)
    - [Start frontend](#start-frontend)
- [Project Limitations](#️-project-limitations)
- [Future Improvements](#-future-improvements)
- [Key Concepts Demonstrated](#-key-concepts-demonstrated)
- [Screenshots](#screenshots)
- 
## 🚀 Features

- 🔍 **User Search**
  - Search for GitHub users using the GitHub API
  - Display matching user results dynamically

- 👤 **User Details**
  - View profile information (avatar, bio, username, etc.)
  - Display a list of repositories

- 📦 **Repository Details**
  - View repository description
  - Creation date and last updated date
  - Last 5 commit messages

- ⚡ **Responsive UI**
  - Clean and intuitive interface
  - Loading indicators for API calls
  - Clear navigation between pages

- 🔗 **External Links**
  - Direct links to GitHub profiles and repositories
  - Styled differently to indicate external navigation

---

## 🧱 Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- CSS

### Backend
- Node.js
- Express
- Helmet (security middleware)

### API
- GitHub REST API

---


---

## ⚙️ How It Works

1. The user enters a search query in the frontend.
2. The React app sends a request to the Express backend.
3. The backend:
   - Fetches data from the GitHub API
   - Processes and returns relevant data to the frontend
4. The frontend displays:
   - Search results
   - User details
   - Repository details and commits

---

## 🔒 Security

- Uses **Helmet** to secure HTTP headers in the Express application

---

## 🧪 Testing

- Unit tests implemented for both frontend and backend
- Snapshot testing for UI components
- Ensures reliability and consistent UI rendering

---

## ▶️ How to Run

### 1. Clone the repository
git clone <your-repo-link>
cd Github-Search-App


### 2. Install dependencies

#### Backend
cd Search User App
npm install

#### Frontend
cd front-end
npm install


### 3. Run the application

#### Start backend server
cd Search User App
npm start

#### Start frontend
cd front-end
npm start


---

## ⚠️ Project Limitations

- No user authentication implemented
- No database integration
- No caching of API responses
- Only public GitHub API endpoints are used

---

## 🚀 Future Improvements

- Add authentication (OAuth with GitHub)
- Implement caching for improved performance
- Add pagination for large result sets
- Enhance UI/UX with animations and better design
- Deploy the app (e.g. Vercel + Render)

---

## 🧠 Key Concepts Demonstrated

- Full-stack development (React + Express)
- RESTful API integration
- Backend API handling and data processing
- Asynchronous JavaScript (Fetch API)
- Component-based frontend architecture
- Testing (unit + snapshot)
- Web security basics using Helmet

---

## 📖 About the Project

This project was developed as part of a full-stack web development capstone. It demonstrates the ability to build a scalable application that integrates with third-party APIs while maintaining clean architecture, security, and testing practices.
