import mongoose from "mongoose";
import 'dotenv/config';

const databaseUrl = process.env.DB_URL;

// connecting to MongoDB
async function connectToDatabase() {
    mongoose.connect(databaseUrl);
    
    return mongoose.connection;
};

export default connectToDatabase;



