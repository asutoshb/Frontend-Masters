const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    secondname: String,
    emailtext : String,
    password : String,
    confirmpassword: String,
})
const User = mongoose.model('registers', userSchema);

module.exports = User;