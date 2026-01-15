import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// Helper functions
export async function getDb() {
  const client = await clientPromise;
  return client.db('baabyalish');
}

// Users
export async function getUsers() {
  const db = await getDb();
  return db.collection('users').find({}).toArray();
}

export async function getUserByEmail(email) {
  const db = await getDb();
  return db.collection('users').findOne({ email });
}

export async function createUser(user) {
  const db = await getDb();
  return db.collection('users').insertOne(user);
}

// Tattoos
export async function getTattoos() {
  const db = await getDb();
  return db.collection('tattoos').find({}).sort({ createdAt: -1 }).toArray();
}

export async function createTattoo(tattoo) {
  const db = await getDb();
  return db.collection('tattoos').insertOne(tattoo);
}

export async function updateTattoo(id, data) {
  const db = await getDb();
  const { ObjectId } = await import('mongodb');
  return db.collection('tattoos').updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
}

export async function deleteTattoo(id) {
  const db = await getDb();
  const { ObjectId } = await import('mongodb');
  return db.collection('tattoos').deleteOne({ _id: new ObjectId(id) });
}

// Dessins (Flash disponibles)
export async function getDessins() {
  const db = await getDb();
  return db.collection('dessins').find({}).sort({ createdAt: -1 }).toArray();
}

export async function createDessin(dessin) {
  const db = await getDb();
  return db.collection('dessins').insertOne(dessin);
}

export async function updateDessin(id, data) {
  const db = await getDb();
  const { ObjectId } = await import('mongodb');
  return db.collection('dessins').updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
}

export async function deleteDessin(id) {
  const db = await getDb();
  const { ObjectId } = await import('mongodb');
  return db.collection('dessins').deleteOne({ _id: new ObjectId(id) });
}

// Drawings (Mes dessins)
export async function getDrawings() {
  const db = await getDb();
  return db.collection('drawings').find({}).sort({ createdAt: -1 }).toArray();
}

export async function createDrawing(drawing) {
  const db = await getDb();
  return db.collection('drawings').insertOne(drawing);
}

export async function updateDrawing(id, data) {
  const db = await getDb();
  const { ObjectId } = await import('mongodb');
  return db.collection('drawings').updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
}

export async function deleteDrawing(id) {
  const db = await getDb();
  const { ObjectId } = await import('mongodb');
  return db.collection('drawings').deleteOne({ _id: new ObjectId(id) });
}
