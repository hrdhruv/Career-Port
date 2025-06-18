# Save the README content to a file named README.md

readme_content = """# 🚀 Carresr Port

A secure, role-based job portal built using **Spring Boot** with **JWT Authentication**.  
This project enables admins to post jobs and users to search for jobs securely through a REST API architecture.

---

## 🔐 Backend + JWT Security Overview

### ✅ What We Built

A **Spring Boot REST API** featuring:

- ✅ **Admin-only Job Posting**
- 🔎 **Open Job Search for Users**
- 🔐 **JWT-Based User Authentication**

---

## ⚙️ Tech Stack

- **Java 17**
- **Spring Boot**
- **Spring Security**
- **JWT (JSON Web Tokens)**
- **MongoDB**
- **BCrypt** for password hashing
- **Maven** for dependency management

---

## 🔄 Authentication & Authorization Flow

### 🔐 Security Architecture

- Stateless authentication via **JWT**
- Role-based access using `ROLE_ADMIN` and `ROLE_USER`
- Password hashing with **BCryptPasswordEncoder**
- Custom authentication filter via `JwtAuthFilter`

### 🧩 Backend Flow

```text
                [User Login Request]
                       |
                       V
        ┌────────────────────────────────────┐
        │    LoginController (/auth/login)   │
        └──────────────┬─────────────────────┘
                       │
                       V
        ┌──────── AuthenticationManager ──────┐
        │   (calls UserDetailsServiceImpl)    │
        └─────────────────────────────────────┘
                       │
                       V
            [JWT generated using JwtService]
                       │
                       V
              [JWT sent to client in response]
