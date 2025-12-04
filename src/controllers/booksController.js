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

            res.status(201).send("Book registered successfully!")
        } catch (erro){


        }

        const postBooks = await booksModel.a({});
        res.status(200).json(postBooks);
    }
};

export default LivroController;



