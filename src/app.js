import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase();

connection.on("error", (e) => {
    console.error("Connection Error: ", e);
})

connection.once("open", () => {
    console.log("Successful DB Connection!")
})

const app = express();
routes(app);

export default app;