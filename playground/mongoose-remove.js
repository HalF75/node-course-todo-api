const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({}).then(() => {

// });


Todo.findByIdAndRemove('5b75384a3ce503b127c03634').then((todo) => {
    console.log(todo);
});
