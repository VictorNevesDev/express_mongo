import express from "express";
import BooksController from "../controllers/booksController.js";

const routes = express.Router();

routes.get("/books", BooksController.getBooks);
routes.post("/books", BooksController.postBooks);

export default routes;
