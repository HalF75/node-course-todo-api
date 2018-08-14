const { MongoClient, ObjectID } = require("mongodb");
const uri = "mongodb://localhost:27017/TodoApp";

(async function() {
  await MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
      if (err) {
        return console.log("Unable to connect to MongoDB server");
      }
      console.log("Connected to MongoDB server");
      const db = client.db("TodoApp");

      client.close();
    }
  );
})();
