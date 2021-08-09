const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    fullname: String,
    email: String,
    password: String,
})


const model = mongoose.model("users", schema);

module.exports = model;