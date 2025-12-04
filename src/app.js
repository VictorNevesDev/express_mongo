import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import booksModel from "./models/books.js";

const connection = await connectToDatabase();

connection.on("error", (erro) => {
    console.error("Connection Error: ", erro);
})

connection.once("open", () => {
    console.log("Successful DB Connection!")
})

const app = express();

// Middleware to convert string => json
app.use(express.json());

// Source route
app.get("/", (req, res) => {
    res.status(200).send("Node Course");
});

// Books routes
app.get("/books", async (req, res) => {
    const getBooks = await booksModel.find({});
    res.status(200).json(getBooks);
});

app.get("/books/:id", (req, res) => {
    // params: (id) id: (name of parameter)
    const index = getBooks(req.params.id);
    res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("Book registered successfully!");
});

app.put("/books/:id", (req, res) => {
    const index = getBooks(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
    const index = getBooks(req.params.id);
    books.splice(index, 1);
    res.status(200).send("Book removed successfully");
});


export default app;