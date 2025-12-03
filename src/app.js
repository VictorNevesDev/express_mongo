import express from "express";

const app = express();

// Middleware to convert string => json
app.use(express.json());

const books = [
    {
        id: 1,
        title: "Harry Potter",
    },
    {
        id: 2,
        title: "Lord of the Rings"
    }
]

// Source route
app.get("/", (req, res) => {
    res.status(200).send("Node Course");
});

// Books route
app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("Book registered successfully!");
});

export default app;