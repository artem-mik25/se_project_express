# WTWR (What to Wear?) - Backend

**Deployed domain:** https://artemmik25.mooo.com

**Frontend repository:** https://github.com/artem-mik25/se_project_react

**Video walkthrough:** _(link to be added)_

Backend server for the WTWR (What to Wear?) application. This Express.js server provides a secure RESTful API for managing users and clothing items with JWT authentication and MongoDB database storage.

## Project Description

This is the backend server for the WTWR application built during TripleTen's Sprints 12–15. The server handles:
- User authentication and authorization with JWT tokens
- Secure user registration and login
- User profile management
- Clothing item management with ownership controls
- Like/unlike functionality for clothing items
- MongoDB database connection and data persistence

## Technologies and Techniques Used

- **Node.js** - JavaScript runtime environment
- **Express.js 4.21.2** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose 8.19.2** - MongoDB object modeling tool
- **bcryptjs** - Password hashing for secure authentication
- **jsonwebtoken** - JWT token generation and verification
- **Validator 13.15.15** - String validation library for emails and URLs
- **CORS** - Cross-Origin Resource Sharing support
- **ESLint** - Code linting with Airbnb style guide
- **Prettier** - Code formatting
- **Nodemon** - Development tool for auto-restarting the server

## API Endpoints

### Authentication (Public)
- `POST /signup` - Register a new user (requires `name`, `avatar`, `email`, and `password` in request body)
- `POST /signin` - Log in a user (requires `email` and `password`, returns JWT token)

### Users (Protected - requires Authorization header)
- `GET /users/me` - Get current user profile
- `PATCH /users/me` - Update current user profile (can update `name` and `avatar`)

### Clothing Items
- `GET /items` - Get all clothing items (public)
- `POST /items` - Create a new item (protected - requires `name`, `weather`, and `imageUrl` in request body)
- `DELETE /items/:itemId` - Delete an item by ID (protected - only item owner can delete)
- `PUT /items/:itemId/likes` - Like an item (protected)
- `DELETE /items/:itemId/likes` - Unlike an item (protected)

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

### Installation Steps

1. Clone the repository:
```bash
git clone <your-repository-url>
cd se_project_express
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on your machine:
```bash
# On macOS with Homebrew:
brew services start mongodb-community

# On Linux:
sudo systemctl start mongod

# On Windows:
# Start MongoDB from Services or run mongod.exe
```

## Running the Project

### Development mode (with hot reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will run on `http://localhost:3001`

## Linting

Run ESLint to check for code style issues:
```bash
npm run lint
```

## Project Structure

```
se_project_express/
├── controllers/       # Request handlers
│   ├── users.js
│   └── clothingItems.js
├── middlewares/       # Custom middleware
│   └── auth.js
├── models/           # Mongoose schemas and models
│   ├── user.js
│   └── clothingItem.js
├── routes/           # Route definitions
│   ├── index.js
│   ├── users.js
│   └── clothingItems.js
├── utils/            # Utility files
│   ├── config.js
│   └── errors.js
├── .editorconfig     # Editor configuration
├── .eslintrc.js      # ESLint configuration
├── .gitignore        # Git ignore rules
├── app.js            # Application entry point
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

## Error Handling

The API returns appropriate HTTP status codes:
- `200` - Successful GET request
- `201` - Successful POST request (resource created)
- `400` - Bad Request (invalid data or invalid ID format)
- `401` - Unauthorized (invalid or missing authentication token)
- `403` - Forbidden (attempting to delete another user's item)
- `404` - Not Found (resource doesn't exist)
- `409` - Conflict (duplicate email during registration)
- `500` - Internal Server Error

Error responses include a JSON object with a `message` field:
```json
{
  "message": "Error description"
}
```

## Authentication

Protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

To access protected endpoints:
1. Register a new user via `POST /signup`
2. Log in via `POST /signin` to receive a JWT token
3. Include the token in the Authorization header for protected requests

Tokens expire after 7 days.

## Testing

Use the provided Postman collection to test all endpoints:
1. Fork the Sprint 13 collection from the Postman link provided in the project requirements
2. Make sure the server is running on `localhost:3001`
3. First, test user registration via `POST /signup`
4. Then test login via `POST /signin` to receive a JWT token
5. Use the token to test protected endpoints
6. Run the complete collection to verify all endpoints work correctly

## Future Enhancements
- Request validation middleware
- Centralized error handling
- Environment variables for configuration
- Production deployment
- Rate limiting for API endpoints
- Enhanced security features

## Author

**Artem Mikhaylov**

© 2025 WTWR Backend
