const { MongoClient, ObjectID } = require("mongodb");
const uri = "mongodb://localhost:27017/TodoApp";

(async function() {
  await MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
      if (err) {
        return console.log("Unable to connect to MongoDB server");
      }
      console.log("Connected to MongoDB server");
      const db = client.db("TodoApp");

    //   db.collection("Todos").find({_id: new ObjectID('5b728c1f19a539b3ad311b62')}).toArray().then((docs) => {
    //         console.log("Todos");
    //         console.log(JSON.stringify(docs, undefined, 2));
    //       }, (err) => {
    //         console.log("Unable to fech todos", err);
    //       }
    //     );

    // db.collection("Todos").find().count().then((count) => {
    //         console.log("Todos");
    //         console.log(`Todos count: ${count}`);
    //     }, (err) => {
    //         console.log("Unable to fech todos", err);
    //     }
    // );

    db.collection('Users').find({name: 'Ricardo'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fech users", err);
    });

      client.close();
    }
  );
})();
