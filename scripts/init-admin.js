const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

// Remplace <db_password> par ton vrai mot de passe MongoDB
const uri = process.env.MONGODB_URI || 'mongodb+srv://kadirdolek01_db_user:baabyalish1234@cluster0.ffjllex.mongodb.net/?appName=Cluster0';

async function initAdmin() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connecté à MongoDB');

    const db = client.db('baabyalish');
    const usersCollection = db.collection('users');

    // Vérifier si l'admin existe déjà
    const existingAdmin = await usersCollection.findOne({ email: 'admin@baabyalish.com' });

    if (existingAdmin) {
      console.log('Admin existe déjà');
      return;
    }

    // Créer le hash du mot de passe
    const hashedPassword = await bcrypt.hash('admin123', 10);

    // Créer l'admin
    const result = await usersCollection.insertOne({
      email: 'admin@baabyalish.com',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date()
    });

    console.log('Admin créé avec succès!');
    console.log('Email: admin@baabyalish.com');
    console.log('Mot de passe: admin123');

  } catch (error) {
    console.error('Erreur:', error);
  } finally {
    await client.close();
  }
}

initAdmin();
