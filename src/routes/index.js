import express from "express";
import books from "./booksRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Initiate"));
    // Middleware to convert string => json
    app.use(express.json(), books);
};


export default routes;