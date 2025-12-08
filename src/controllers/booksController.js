import booksModel from "../models/books.js";
import { authorsModel } from "../models/author.js";

class BooksController {
    // won't require to instantiate class {static}
    static async getBooks (req, res) {
        try{
            const getBooks = await booksModel.find({}).populate("author");
            res.status(200).json(getBooks);
        } catch (e){
            res.status(500).json({ message: `${e.message} - request failed!`});
        }  
    }

    static async getBookById (req, res) {
        try{
            const getBook = await booksModel.findById(req.params.id);
            res.status(200).json(getBook);
        } catch (e){
            res.status(500).json({ message: `${e.message} - request failed!`});
        }  
    }

    static async updateBookById (req, res) {
        try{
            await booksModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: "Book updated!"});
        } catch (e){
            res.status(500).json({ message: `${e.message} - updated failed!`});
        }  
    }

    static async deleteBookById (req, res) {
        try{
            await booksModel.findByIdAndDelete(req.params.id, req.body);
            res.status(200).json({ message: "Deleted!"});
        } catch (e){
            res.status(500).json({ message: `${e.message} - updated failed!`});
        }  
    }

    static async postBooks (req, res) {
        const newBook = req.body;

        try {
            const foundAuthor = await authorsModel.findById(newBook.author);
            
            if (!foundAuthor) {
                return res.status(404).json({ message: "Author not found" });
            }

            // Create book with just the author ID (already in newBook.author)
            const createdBook = await booksModel.create(newBook);

            res.status(201).json({ message: "Successfully created!", book: createdBook });
        } catch (e) {
            res.status(500).json({ message: `${e.message} - book registration failed!` });
        }
    }

    static async getBooksByEditor (req, res) {
        const editor = req.query.editor;

        try {
            // { editor: editor } fist-> property of booksModel, second -> query requested
            const booksByEditor = await booksModel.find({ editor: editor }).populate("author");
            res.status(200).json(booksByEditor);
        } catch (e) {

        }
    }
};

export default BooksController;



