const mongoose = require("mongoose")
const DB = "./books.json"
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database Connection Successful")
}).catch((err) => {
    console.log(err)
})
const schema = mongoose.Schema

const BookSchema = new schema({
    author: String,
    bookname: String,
    imgUrl: String,
    synopsis: String
}, {
    versionKey: false
})
const bookData = mongoose.model('books', BookSchema)
module.exports = bookData