import mongoose from "mongoose";
import { authorSchema } from "./author.js";

const bookSchema = new mongoose.Schema({
    // Unique identifier
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true }, 
    price: { type: Number },
    pages: { type: Number },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "authors", required: true },
    editor: { type: String },
}, { versionKey: false });

const booksModel = mongoose.model("books", bookSchema);

export default booksModel;