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
    const db = client.db("TodoApp");

    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID("5b72992e19a539b3ad311eb4")
    //     },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection('Users').findOneAndUpdate({
        name: 'Tiago'
    },
    { 
        $set: { name: 'Ricardo'},
        $inc: { age : 1 }
    },
    {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //client.close();
  }
);
