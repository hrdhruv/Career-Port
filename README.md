# Job Portal Application

A **full-stack job portal** built with **Spring Boot** and **React.js**, where users can **add** job posts and **search** them by technologies, descriptions, or profiles. The backend uses **MongoDB** for storing job data and implements **text search** using MongoDB Atlas Search.

---

## 🔧 Technologies Used

### Backend
- Java 17
- Spring Boot
- MongoDB
- Swagger (for API testing)
- MongoDB Atlas Search (for full-text querying)

### Frontend
- React.js (with functional components and hooks)
- Axios (HTTP client)
- React Router DOM (routing)
- Framer Motion (animations)
- Light/Dark Mode Toggle
- Custom CSS styling

---

## Features

- **Add Job Post** – Create and store a new job post with profile, description, required experience, and technologies
- **Search Job Post** – Search job posts by keywords across multiple fields (profile, description, tech stack)
- **Dark/Light Mode** – Toggle between themes with persistent state
- **Animations** – Smooth page transitions and interactive elements
- **Responsive Design** – Works on desktop and mobile
- **API Documentation** – Test all APIs via Swagger UI

---

## Getting Started

### 🛠 Backend Setup (Spring Boot)

```bash
cd jobport-backend
./mvnw spring-boot:run
```
### Frontend Setup

cd jobport-frontend
npm install
npm start

