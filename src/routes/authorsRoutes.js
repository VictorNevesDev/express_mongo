import express from "express";
import AuthorsController from "../controllers/authorsController.js";

const routes = express.Router();

routes.get("/authors", AuthorsController.getAuthors);
routes.post("/authors", AuthorsController.postAuthors);
routes.get("/authors/:id", AuthorsController.getAuthorById);
routes.put("/authors/:id", AuthorsController.updateAuthorById);
routes.delete("/authors/:id", AuthorsController.deleteAuthorById);

export default routes;
