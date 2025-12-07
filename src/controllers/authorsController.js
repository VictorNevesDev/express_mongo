import authorsModel from "../models/author.js";

class AuthorsController {
    // won't require to instantiate class {static}
    static async getAuthors (req, res) {
        try{
            const getAuthors = await authorsModel.find({});
            res.status(200).json(getAuthors);
        } catch (e){
            res.status(500).json({ message: `${e.message} - request failed!`});
        }  
    }

    static async getAuthorById (req, res) {
        try{
            const getAuthors = await authorsModel.findById(req.params.id);
            res.status(200).json(getAuthors);
        } catch (e){
            res.status(500).json({ message: `${e.message} - request failed!`});
        }  
    }

    static async updateAuthorById (req, res) {
        try{
            await authorsModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: "Author updated!"});
        } catch (e){
            res.status(500).json({ message: `${e.message} - updated failed!`});
        }  
    }

    static async deleteAuthorById (req, res) {
        try{
            await authorsModel.findByIdAndDelete(req.params.id, req.body);
            res.status(200).json({ message: "Deleted!"});
        } catch (e){
            res.status(500).json({ message: `${e.message} - updated failed!`});
        }  
    }

    static async postAuthors (req, res) {
        try {
            const newAuthor = await authorsModel.create(req.body);
            res.status(201).json({ message: "Successfully created!", author: newAuthor });
        } catch (e){
            res.status(500).json({ message: `${e.message} - authors registration failed!`});
        }
    }
};

export default AuthorsController;



