# WTWR (What to Wear?) - Backend

Backend server for the WTWR (What to Wear?) application. This Express.js server provides a RESTful API for managing users and clothing items with MongoDB database storage.

## Project Description

This is the backend server for the WTWR application built during TripleTen's Sprint 12. The server handles:
- User management (create, read users)
- Clothing item management (create, read, delete items)
- Like/unlike functionality for clothing items
- MongoDB database connection and data persistence

## Technologies and Techniques Used

- **Node.js** - JavaScript runtime environment
- **Express.js 4.21.2** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose 8.9.5** - MongoDB object modeling tool
- **Validator** - String validation library for URLs
- **ESLint** - Code linting with Airbnb style guide
- **Prettier** - Code formatting
- **Nodemon** - Development tool for auto-restarting the server

## API Endpoints

### Users
- `GET /users` - Get all users
- `GET /users/:userId` - Get a user by ID
- `POST /users` - Create a new user (requires `name` and `avatar` in request body)

### Clothing Items
- `GET /items` - Get all clothing items
- `POST /items` - Create a new item (requires `name`, `weather`, and `imageUrl` in request body)
- `DELETE /items/:itemId` - Delete an item by ID
- `PUT /items/:itemId/likes` - Like an item
- `DELETE /items/:itemId/likes` - Unlike an item

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

4. Create a test user via Postman:
- Send a POST request to `http://localhost:3001/users`
- Request body:
```json
{
  "name": "Test User",
  "avatar": "https://example.com/avatar.jpg"
}
```

5. Update the test user ID in `app.js`:
- Copy the `_id` from the created user
- Replace the hardcoded ID in `app.js` line 15

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
├── models/           # Mongoose schemas and models
│   ├── user.js
│   └── clothingItem.js
├── routes/           # Route definitions
│   ├── index.js
│   ├── users.js
│   └── clothingItems.js
├── utils/            # Utility files
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
- `404` - Not Found (resource doesn't exist)
- `500` - Internal Server Error

Error responses include a JSON object with a `message` field:
```json
{
  "message": "Error description"
}
```

## Testing

Use the provided Postman collection to test all endpoints:
1. Fork the collection from the Postman link provided in the project requirements
2. Make sure the server is running on `localhost:3001`
3. Update the `validUserId` and `validCardId` variables with IDs from your database
4. Run the collection to test all endpoints

## Future Enhancements (Next Sprints)
- User authentication with JWT tokens
- Password hashing and security
- Authorization middleware
- Request validation middleware
- Centralized error handling
- Production deployment

## Author

**Artem Mikhaylov**

© 2025 WTWR Backend
