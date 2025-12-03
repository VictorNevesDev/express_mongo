import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Node Course");
});

export default app;