Job Portal Backend
This is the backend for a full-stack job portal application built using Spring Boot and MongoDB, featuring JWT-based authentication and role-based access control. It provides secure APIs for user authentication, job posting, and job searching.
🚀 Features

User Authentication: Secure login with JWT tokens.
Role-Based Access Control: Admin-only routes for job posting and authenticated user access for job searching.
MongoDB Integration: Stores job and user data using Spring Data MongoDB.
Secure APIs: Protected with Spring Security and JWT validation.
API Documentation: Swagger integration for easy API exploration.

⚙️ Technologies Used

Java 17 + Spring Boot
Spring Security (JWT Authentication)
MongoDB + Spring Data MongoDB
Lombok for reducing boilerplate code
Swagger for API documentation
BCrypt for password hashing

🔐 Authentication & Authorization Flow

Login: Users send credentials to /auth/login.
If valid, a JWT token is generated and returned.
The client stores the token (e.g., in localStorage).
Protected routes require the token in the Authorization header (Bearer <token>).
A custom JWT filter (JwtAuthFilter) validates the token for each request.
Access is granted based on user roles (e.g., ROLE_ADMIN or ROLE_USER).

📁 Project Structure
jobport-backend
│
├── controller
│   ├── PostController.java
│   ├── LoginController.java
│
├── model
│   ├── Post.java
│   ├── User.java
│   ├── AuthRequest.java
│   ├── AuthResponse.java
│
├── repository
│   ├── PostRepository.java
│   ├── UserRepository.java
│
├── service
│   ├── JwtService.java
│   ├── UserDetailsServiceImpl.java
│
├── config
│   ├── SecurityConfig.java
│   ├── JwtAuthFilter.java
│
├── resources
│   ├── application.properties
│
└── JoblistApplication.java

🔧 Key Components & Roles

JwtService: Handles generation and validation of JWT tokens.
JwtAuthFilter: Intercepts requests to validate tokens and set authentication.
UserDetailsServiceImpl: Loads user details from MongoDB for authentication.
SecurityConfig: Configures Spring Security and route access rules.
PostController: Manages endpoints for job posting and searching.
LoginController: Handles user authentication and JWT token generation.

📦 Running the Backend Locally
Prerequisites

Java 17 or higher
MongoDB (running locally or via MongoDB Atlas)
Maven for dependency management

Steps

Clone the repository:git clone <repository-url>
cd jobport-backend


Configure MongoDB and JWT settings in src/main/resources/application.properties:spring.data.mongodb.uri=mongodb://localhost:27017/jobportal
security.jwt.secret-key=your_secret_key
security.jwt.expiration-time=3600000


Start the Spring Boot application:./mvnw spring-boot:run


The application will run on http://localhost:8080.

🧪 Testing with Postman

Login: Send a POST request to /auth/login with valid credentials (e.g., {"username": "admin", "password": "admin123"}).
Use the returned JWT token in the Authorization header:Authorization: Bearer <your-token>


Test endpoints:
Add a job: POST /post (Admin only)
Search jobs: GET /posts/{keyword} (Any authenticated user)



👤 User Setup
To start testing, insert a user into MongoDB:
{
  "username": "admin",
  "password": "$2a$10$<bcrypt-hashed-password>",
  "role": "ROLE_ADMIN"
}

Generate a BCrypt hash for the password (e.g., admin123) using an online BCrypt tool or library.
✅ Summary
This backend provides secure user authentication, role-based access control, and job management functionality using Spring Boot and MongoDB. It is designed for scalability and can be extended with features like user registration, profile updates, and job deletion.
📝 Future Enhancements

Add user registration and profile management.
Implement job update and delete functionality.
Integrate with a frontend (e.g., React or Angular).
Add Docker support for easier deployment.

📞 Contact
For questions or contributions, please open an issue or submit a pull request.
