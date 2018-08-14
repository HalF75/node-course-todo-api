//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");
const uri = "mongodb://localhost:27017/TodoApp";

(async function() {
  const client = await MongoClient.connect(
    uri,
    { useNewUrlParser: true },
    (err, result) => {
      if (err) {
        return console.log("Unable to connect to MongoDB server");
      }
      console.log("Connected to MongoDB server");
      const db = client.db("TodoApp");
      
    }
  );
})();

// MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
//     if (err){
//         return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDB server');
//     const db = client.db('TodoApp');

//     // db.collection('Todos').insertOne({
//     //     text: 'Something to do',
//     //     completed: false
//     // }, (err, result) => {
//     //     if (err){
//     //         return console.log('Unable to insert todo', err);
//     //     }

//     //     console.log(JSON.stringify(result.ops, undefined, 2));
//     // });

//     // Insert new doc into Users (name, age, location)

//     // db.collection('Users').insertOne({
//     //     name: 'Ricardo',
//     //     age: 36,
//     //     location: 'Oslo'
//     // }, (err, result) => {
//     //     if (err){
//     //         return console.log('Unable to insert user', err);
//     //     }

//     //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
//     // });

//     client.close();
// });
