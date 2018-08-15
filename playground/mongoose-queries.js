const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


const userID = '5b72e3a4b136495979dc442f';

User.findById(userID).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User: ', user);

}, (e) => {
    console.log(e);
});



// const todoID = '5b74194bb0c5a39d7cc24da011';

// if(!ObjectID.isValid(todoID)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: todoID
// }).then((todos) => {
//     console.log('Todos: ',todos);
// });


// Todo.findOne({
//     _id: todoID
// }).then((todo) => {
//     console.log('Todo: ',todo);
// });

// Todo.findById(todoID).then((todo) => {
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id: ',todo);
// }).catch((e) => {
//     console.log(e);
// });

