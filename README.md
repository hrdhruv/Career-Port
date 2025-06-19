
# 🛡️ CareerPort - Secure Job Listing Platform (React Js + Spring Boot + MongoDB + JWT)

This is a **Full stack secure job listing platform** built using **Spring Boot**, **MongoDB**, and **JWT-based authentication using Spring security**. It provides APIs for user authentication, role-based access, job post creation, and search functionality. The frontend is minimally implemented using **ReactJS**, intended primarily for testing and visualization.

---

## 📌 Project Highlights

- ✅ **JWT Authentication** (Login, Token Generation & Validation)
- ✅ **Role-based Authorization** (`ADMIN`, `USER`)
- ✅ **MongoDB Atlas** with **text search** (via `$search`)
- ✅ **REST APIs** for job posts (view, search, create)
- ✅ **Swagger UI** for API testing

---

## 🔄 Simplified JWT Authentication Flow

1.  **User logs in** by sending `username` and `password` to the `/auth/login` endpoint.
2. **Backend authenticates** the credentials using **Spring Security**.
3.  If valid, the backend **generates a JWT token** (which encodes the user’s identity and role).
4.  The **JWT token is returned** to the frontend (React app).
5.  The frontend **stores the token** (typically in `localStorage`).
6.  For future API calls (e.g., `/posts`, `/post`), the frontend includes this token in the `Authorization` header as: **Authorization: Bearer <your-jwt-token>**
7.  The backend **decodes and verifies the token**, checks the user’s role, and allows or denies access to the requested resource.



## 🔐 JWT Authentication Flow

```plaintext
+------------+         +------------------------+          +------------------------+
|  Frontend  |  --->   |  /auth/login Endpoint  |  --->    |   AuthenticationManager|
+------------+         +------------------------+          +------------------------+
       |                        |                                        |
       |      (POST username, password)                                 |
       |                        |                                        |
       |                        v                                        |
       |             Validate credentials using                         |
       |             UserDetailsServiceImpl                             |
       |                        |                                        |
       |                        v                                        |
       |         Generate JWT via JwtService                            |
       |                        |                                        |
       |                        v                                        |
       | <------- Return JWT token as JSON -----------------------------+
       |
       |  Use this token in Authorization header as:
       |     Authorization: Bearer <JWT>
       |
       v
  Access protected endpoints like /posts, /post
```

## 📪 API Endpoints Overview

| Method | Endpoint        | Role Required | Description                  |
|--------|------------------|----------------|------------------------------|
| GET    | `/posts`         | ADMIN/USER     | View all job posts           |
| GET    | `/posts/{text}`  | ADMIN/USER     | Search posts by keyword      |
| POST   | `/post`          | ADMIN          | Add a new job post           |
| POST   | `/login`         | Public         | Authenticate & get JWT       |

##  Project Structure Overview

### 🔐 Authentication System

| File                          | Responsibility                                                              |
|------------------------------|------------------------------------------------------------------------------|
| `LoginController.java`       | Handles login and returns JWT                                               |
| `JwtService.java`            | Creates and validates JWTs using a secret key                               |
| `JwtAuthenticationFilter.java` | Intercepts requests to validate JWT token in Authorization header         |
| `SecurityConfig.java`        | Defines public/protected routes, configures Spring Security                 |
| `UserDetailsServiceImpl.java` | Loads user info from DB and adapts to Spring Security                      |

---

###  Domain Layer

| File/Dir     | Role                                             |
|--------------|--------------------------------------------------|
| `Post.java`  | MongoDB model for job listings                  |
| `User.java`  | App user model (with hashed password & role)    |
| `Role.java`  | Enum with `USER`, `ADMIN` roles                 |

---

###  API Controllers

| Controller             | Description                                             |
|------------------------|---------------------------------------------------------|
| `PostController.java`  | Provides endpoints for fetching/searching/creating posts |
| `LoginController.java` | Authenticates user and generates JWT                    |

---

### 🧠 Repositories

| Repository              | Purpose                                                                |
|-------------------------|------------------------------------------------------------------------|
| `PostRepository`        | Basic Mongo CRUD for job posts                                         |
| `SearchRepositoryImpl`  | Uses MongoDB Atlas `$search` aggregation for keyword search            |
| `UserRepository`        | Find users by username for login                                       |

---

### 🌐 Frontend (React)

The frontend is minimal and serves as a basic interface for:

- 🔐 Logging in via `/login` using roles
- 📋 Viewing job posts fetched via `/posts`  
- 🔎 Searching and view posts using a search bar (`/posts/{text}`)  

> You can access the backend from the frontend by updating your API base URLs (e.g., `http://localhost:8080/posts`).

🧪 **Note**: Most testing and interaction can be done via Swagger UI at  
**[http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)**

---

## 🚀 Running the Project

### ✅ Prerequisites

- Java 17+
- MongoDB Atlas (connection configured in `application.properties`)
- Maven

---

### ▶️ Run the Backend

```bash
mvn spring-boot:run
```
## 🔐 Environment Variables

Set the following properties in your `application.properties` file:

```properties
security.jwt.secret-key=your-secret-key
security.jwt.expiration-time=3600000
spring.data.mongodb.uri=your-mongodb-uri
```

## 👤 Roles and Access

| Role  | Permissions                              |
|--------|-------------------------------------------|
| ADMIN | ✅ View job posts<br>✅ Search posts<br>✅ Create job posts |
| USER  | ✅ View job posts<br>✅ Search posts               |


