const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/libraryapp/usercredentials")

const Schema = mongoose.Schema;
const UserSchema = new Schema({

    username: String,
    email: String,
    password: String,

});

var userdata = mongoose.model('usercredentials', UserSchema)
module.exports = userdata