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

app.get("/books/:id", (req, res) => {
    // params: (id) id: (name of parameter)
    const index = getBooks(req.params.id);
    res.status(200).json(books[index]);
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