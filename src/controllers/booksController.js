import booksModel from "../models/books.js";

class BooksController {

    //GET
    // won't require to instantiate class {static}
    static async getBooks (req, res) {
        const getBooks = await booksModel.find({});
        res.status(200).json(getBooks);
    }

    //POST
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



