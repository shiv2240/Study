const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://shivsahni2240:e51j4i1P2qxscoYZ@myplace.moobold.mongodb.net/";

const client = new MongoClient(url);

const dbname = "Test1";

async function main() {
  try {
    await client.connect();
    console.log("Connected successfully");
    const db = client.db(dbname);
    const collection = db.collection("user");

    const data = {
      firstname: "Vivek",
      lastname: "Yadav",
      number: "123456789",
    };

    const insertResult = await collection.insertMany([data]);
    console.log("Inserted Documents ==>", insertResult);

    const findResult = await collection.find({}).toArray();
    console.log("Found document ==>", findResult);

    const countResult = await collection.countDocuments({});
    console.log("Total Collections", countResult)

    const filterResult = await collection
      .find({ firstname: "Shubham" })
      .toArray();
    console.log("Result is ==>", filterResult);

    const filterResults = await collection.countDocuments({
      firstname: "Shubham",
    });
    console.log("Result is ==>", filterResults);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }

  return "done.";
}

main().then(console.log).catch(console.error);
