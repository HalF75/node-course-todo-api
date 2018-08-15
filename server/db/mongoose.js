const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/TodoApp";

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true });


module.exports = {mongoose};