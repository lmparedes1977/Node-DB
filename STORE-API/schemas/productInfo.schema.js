import mongoose from "mongoose";
import ReviewSchema from "./review.schema.js";

const ProductInfoSchema = mongoose.Schema(
    {
        procuctId: Number,
        category: String,
        with: Number,
        heigth: Number,
        depth: Number,
        reviews: [ReviewSchema],         
    },
    {collection: "productInfo"},
);

export default ProductInfoSchema;