const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Book")

const Schema = mongoose.Schema;
const BookSchema = new Schema({


    bookname:String,
    author:String,
    imageurl:String,
   synopsis:String,

});

var bookdata = mongoose.model('bookdatas' , BookSchema)
module.exports =bookdata
