import express from "express";

const app = express();

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


export default app;