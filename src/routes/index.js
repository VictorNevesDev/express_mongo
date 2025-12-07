import express from "express";
import books from "./booksRoutes.js";
import authors from "./authorsRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Initiate"));
    // Middleware to convert string => json
    app.use(express.json(), books, authors);
};


export default routes;