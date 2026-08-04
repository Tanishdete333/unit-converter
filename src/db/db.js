const mongoose = require("mongoose");
async function connectDB() {
  await mongoose.connect(
    "mongodb://test_project:GrNgZRxHvkwDv7JM@ac-hjoraon-shard-00-00.tqod2tt.mongodb.net:27017,ac-hjoraon-shard-00-01.tqod2tt.mongodb.net:27017,ac-hjoraon-shard-00-02.tqod2tt.mongodb.net:27017/Unit-converter?ssl=true&replicaSet=atlas-ejb3sy-shard-0&authSource=admin&appName=test-cluster01",
  );
  console.log("Database connected successfully");
}
module.exports = connectDB;
