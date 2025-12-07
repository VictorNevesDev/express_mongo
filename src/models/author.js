import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjetctId },
    name: { type: String, required: true },
    nationality: {type: String},
}, { versionKey: false });

const authorsModel = mongoose.model("authors", authorSchema);

export { authorsModel, authorSchema };