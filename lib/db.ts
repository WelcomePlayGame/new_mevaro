import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
let db;

async function connectDB() {
  await client.connect();
  await client.db('admin').command({ ping: 1 });
  db = client.db('news');
}

function getCollection(collectionName) {
  return db.collection(collectionName);
}

async function closeConnection() {
  await client.close();
}

export { connectDB, getCollection, closeConnection };
