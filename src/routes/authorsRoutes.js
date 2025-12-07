import express from "express";
import AuthorsController from "../controllers/authorsController.js";

const routes = express.Router();

routes.get("/authors", AuthorsController.getAuthors);
routes.post("/authors", AuthorsController.postAuthors);
routes.get("/authors/:id", AuthorsController.getAuthorsById);
routes.put("/authors/:id", AuthorsController.updateAuthorsById);
routes.delete("/authors/:id", AuthorsController.deleteAuthorsById);

export default routes;
