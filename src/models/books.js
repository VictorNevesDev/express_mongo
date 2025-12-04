import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    // Unique identifier
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true }, 
    author: { type: String}, 
    price: { type: Number },
    pages: { type: Number },
}, { versionKey: false });

const booksModel = mongoose.model("books", bookSchema);

export default booksModel;