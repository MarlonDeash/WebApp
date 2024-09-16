const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import the database connection function
const ConnectDB = require("./utils/connection");

// Initialize Express app
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Start server after connecting to MongoDB
const startServer = async () => {
    await ConnectDB(); // Ensure database connection is established

    // Define your routes and other middleware here
    app.get('/', (req, res) => {
        res.json({ message: 'Welcome to the app' });
    });

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

// Start the server
startServer();
