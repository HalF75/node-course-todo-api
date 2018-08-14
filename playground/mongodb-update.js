const { MongoClient, ObjectID } = require("mongodb");
const uri = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(
  uri,
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    db.collection("Todos")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5b72992e19a539b3ad311eb4")
        },
        {
          $set: {
            completed: true
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });

    //client.close();
  }
);
