import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema(
    {
        nome: String,
        description: String,
    },
    {collection: "productInfo"},
);

export default ReviewSchema;