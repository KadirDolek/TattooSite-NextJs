const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://kadirdolek01_db_user:baabyalish1234@cluster0.ffjllex.mongodb.net/?appName=Cluster0';

async function initImages() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connecté à MongoDB');

    const db = client.db('baabyalish');

    // Tattoos (tatoo1.jpg à tatoo20.jpg)
    const tattoosCollection = db.collection('tattoos');
    const existingTattoos = await tattoosCollection.countDocuments();
    if (existingTattoos === 0) {
      const tattoos = [];
      for (let i = 1; i <= 20; i++) {
        tattoos.push({
          src: `/tatoo${i}.jpg`,
          alt: `Tattoo ${i}`,
          createdAt: new Date()
        });
      }
      await tattoosCollection.insertMany(tattoos);
      console.log('20 tattoos ajoutés');
    } else {
      console.log(`Tattoos déjà présents: ${existingTattoos}`);
    }

    // Dessins/Flash (flash1.jpg à flash22.jpg)
    const dessinsCollection = db.collection('dessins');
    const existingDessins = await dessinsCollection.countDocuments();
    if (existingDessins === 0) {
      const dessins = [];
      for (let i = 1; i <= 22; i++) {
        dessins.push({
          src: `/flash${i}.jpg`,
          alt: `Flash ${i}`,
          createdAt: new Date()
        });
      }
      await dessinsCollection.insertMany(dessins);
      console.log('22 flash/dessins ajoutés');
    } else {
      console.log(`Dessins déjà présents: ${existingDessins}`);
    }

    // Drawings (dessin1.jpg à dessin9.jpg)
    const drawingsCollection = db.collection('drawings');
    const existingDrawings = await drawingsCollection.countDocuments();
    if (existingDrawings === 0) {
      const drawings = [];
      for (let i = 1; i <= 9; i++) {
        drawings.push({
          src: `/dessin${i}.jpg`,
          alt: `Dessin ${i}`,
          createdAt: new Date()
        });
      }
      await drawingsCollection.insertMany(drawings);
      console.log('9 drawings ajoutés');
    } else {
      console.log(`Drawings déjà présents: ${existingDrawings}`);
    }

    console.log('Initialisation terminée!');

  } catch (error) {
    console.error('Erreur:', error);
  } finally {
    await client.close();
  }
}

initImages();
