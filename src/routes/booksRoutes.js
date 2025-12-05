import express from "express";
import BooksController from "../controllers/booksController.js";

const routes = express.Router();

routes.get("/books", BooksController.getBooks);
routes.get("/books/:id", BooksController.getBookById);
routes.post("/books", BooksController.postBooks);
routes.put("/books/:id", BooksController.updateBookById);
routes.delete("/books/:id", BooksController.deleteBookById);

export default routes;
