import express from "express";
import connectToDatabase from "./config/dbConnect.js";

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

function getBooks(id){
    return books.findIndex(books => {
        // parsing str => number for comparison
        return books.id === Number(id);
    });
};

// Source route
app.get("/", (req, res) => {
    res.status(200).send("Node Course");
});

// Books routes
app.get("/books", (req, res) => {
    res.status(200).json(books);
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