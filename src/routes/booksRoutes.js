import express from "express";
import booksModel from "../models/books.js";

const routes = express.Router();

routes.get("/books", BooksController.getBooks);
