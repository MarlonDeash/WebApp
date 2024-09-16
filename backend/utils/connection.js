const mongoose = require('mongoose');

// MongoDB connection function
const ConnectDB = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        console.error("MongoDB URI is not defined.");
        process.exit(1); // Exit the process with an error code
    }

    try {
        await mongoose.connect(uri); // Connection without deprecated options
        console.log("MongoDB connected successfully!");
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1); // Exit the process with an error code
    }
};

module.exports = ConnectDB;
