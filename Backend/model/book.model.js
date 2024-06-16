import mongoose from "mongoose";
const Schema = mongoose.Schema({
    Name:String,
    Price:Number,
    Title:String,
    id:Number,
    Category:String,
    image:String
});

const Book = mongoose.model("Book", Schema);
export default Book;