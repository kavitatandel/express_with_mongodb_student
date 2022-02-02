const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create student schema
const studentSchema = new Schema({
    name: String,
    first_name: String,
    email: String,
})

module.exports = mongoose.model('Student', studentSchema) // Student is the name of the collection