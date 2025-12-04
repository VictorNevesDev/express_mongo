import mongoose from "mongoose";
import 'dotenv/config';

// connecting to MongoDB
async function connectToDatabase() {
    mongoose.connect(process.env.DB_URL);
    
    return mongoose.connection;
};

export default connectToDatabase;



