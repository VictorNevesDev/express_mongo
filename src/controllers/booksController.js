import booksModel from "../models/books.js";

class BooksController {
    // won't require to instantiate class {static}
    static async getBooks (req, res) {
        try{
            const getBooks = await booksModel.find({});
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
        try {
            const newBook = await booksModel.create(req.body);
            res.status(201).json({ message: "Successfully created!", book: newBook });
        } catch (e){
            res.status(500).json({ message: `${e.message} - book registration failed!`});
        }
    }
};

export default BooksController;



