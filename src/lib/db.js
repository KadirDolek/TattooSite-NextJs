import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize data files if they don't exist
const initFile = (filename, defaultData) => {
  const filepath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, JSON.stringify(defaultData, null, 2));
  }
};

// Initialize users with default admin
initFile('users.json', [{
  id: '1',
  email: 'admin@baabyalish.com',
  password: '$2b$10$r9kKWSFAYxWrWzvIBGsu6emqwFyjFJbAiGVJWDiRRHOH8qFL7rFRm', // password: admin123
  role: 'admin',
  createdAt: new Date().toISOString()
}]);

// Initialize tattoos with existing images
initFile('tattoos.json', [
  { id: '1', src: '/tatoo1.jpg', alt: 'Tattoo 1', createdAt: new Date().toISOString() },
  { id: '2', src: '/tatoo2.jpg', alt: 'Tattoo 2', createdAt: new Date().toISOString() },
  { id: '3', src: '/tatoo3.jpg', alt: 'Tattoo 3', createdAt: new Date().toISOString() },
  { id: '4', src: '/tatoo4.jpg', alt: 'Tattoo 4', createdAt: new Date().toISOString() },
  { id: '5', src: '/tatoo5.jpg', alt: 'Tattoo 5', createdAt: new Date().toISOString() },
  { id: '6', src: '/tatoo6.jpg', alt: 'Tattoo 6', createdAt: new Date().toISOString() },
  { id: '7', src: '/tatoo7.jpg', alt: 'Tattoo 7', createdAt: new Date().toISOString() },
  { id: '8', src: '/tatoo8.jpg', alt: 'Tattoo 8', createdAt: new Date().toISOString() },
  { id: '9', src: '/tatoo9.jpg', alt: 'Tattoo 9', createdAt: new Date().toISOString() },
  { id: '10', src: '/tatoo10.jpg', alt: 'Tattoo 10', createdAt: new Date().toISOString() },
  { id: '11', src: '/tatoo11.jpg', alt: 'Tattoo 11', createdAt: new Date().toISOString() },
  { id: '12', src: '/tatoo12.jpg', alt: 'Tattoo 12', createdAt: new Date().toISOString() },
  { id: '13', src: '/tatoo13.jpg', alt: 'Tattoo 13', createdAt: new Date().toISOString() },
  { id: '14', src: '/tatoo14.jpg', alt: 'Tattoo 14', createdAt: new Date().toISOString() },
  { id: '15', src: '/tatoo15.jpg', alt: 'Tattoo 15', createdAt: new Date().toISOString() },
  { id: '16', src: '/tatoo16.jpg', alt: 'Tattoo 16', createdAt: new Date().toISOString() },
  { id: '17', src: '/tatoo17.jpg', alt: 'Tattoo 17', createdAt: new Date().toISOString() },
  { id: '18', src: '/tatoo18.jpg', alt: 'Tattoo 18', createdAt: new Date().toISOString() },
  { id: '19', src: '/tatoo19.jpg', alt: 'Tattoo 19', createdAt: new Date().toISOString() },
  { id: '20', src: '/tatoo20.jpg', alt: 'Tattoo 20', createdAt: new Date().toISOString() },
]);

// Initialize dessins with existing images (Flash disponibles - page /dessin)
initFile('dessins.json', [
  { id: '1', src: '/flash1.jpg', alt: 'Flash 1', createdAt: new Date().toISOString() },
  { id: '2', src: '/flash2.jpg', alt: 'Flash 2', createdAt: new Date().toISOString() },
  { id: '3', src: '/flash3.jpg', alt: 'Flash 3', createdAt: new Date().toISOString() },
  { id: '4', src: '/flash4.jpg', alt: 'Flash 4', createdAt: new Date().toISOString() },
  { id: '5', src: '/flash5.jpg', alt: 'Flash 5', createdAt: new Date().toISOString() },
  { id: '6', src: '/flash6.jpg', alt: 'Flash 6', createdAt: new Date().toISOString() },
  { id: '7', src: '/flash7.jpg', alt: 'Flash 7', createdAt: new Date().toISOString() },
  { id: '8', src: '/flash8.jpg', alt: 'Flash 8', createdAt: new Date().toISOString() },
  { id: '9', src: '/flash9.jpg', alt: 'Flash 9', createdAt: new Date().toISOString() },
  { id: '10', src: '/flash10.jpg', alt: 'Flash 10', createdAt: new Date().toISOString() },
  { id: '11', src: '/flash11.jpg', alt: 'Flash 11', createdAt: new Date().toISOString() },
  { id: '12', src: '/flash12.jpg', alt: 'Flash 12', createdAt: new Date().toISOString() },
  { id: '13', src: '/flash13.jpg', alt: 'Flash 13', createdAt: new Date().toISOString() },
  { id: '14', src: '/flash14.jpg', alt: 'Flash 14', createdAt: new Date().toISOString() },
  { id: '15', src: '/flash15.jpg', alt: 'Flash 15', createdAt: new Date().toISOString() },
  { id: '16', src: '/flash16.jpg', alt: 'Flash 16', createdAt: new Date().toISOString() },
  { id: '17', src: '/flash17.jpg', alt: 'Flash 17', createdAt: new Date().toISOString() },
  { id: '18', src: '/flash18.jpg', alt: 'Flash 18', createdAt: new Date().toISOString() },
  { id: '19', src: '/flash19.jpg', alt: 'Flash 19', createdAt: new Date().toISOString() },
  { id: '20', src: '/flash20.jpg', alt: 'Flash 20', createdAt: new Date().toISOString() },
  { id: '21', src: '/flash21.jpg', alt: 'Flash 21', createdAt: new Date().toISOString() },
  { id: '22', src: '/flash22.jpg', alt: 'Flash 22', createdAt: new Date().toISOString() },
]);

// Initialize drawings with existing images (Mes dessins - page /flash)
initFile('drawings.json', [
  { id: '1', src: '/dessin1.jpg', alt: 'Dessin 1', createdAt: new Date().toISOString() },
  { id: '2', src: '/dessin2.jpg', alt: 'Dessin 2', createdAt: new Date().toISOString() },
  { id: '3', src: '/dessin3.jpg', alt: 'Dessin 3', createdAt: new Date().toISOString() },
  { id: '4', src: '/dessin4.jpg', alt: 'Dessin 4', createdAt: new Date().toISOString() },
  { id: '5', src: '/dessin5.jpg', alt: 'Dessin 5', createdAt: new Date().toISOString() },
  { id: '6', src: '/dessin6.jpg', alt: 'Dessin 6', createdAt: new Date().toISOString() },
  { id: '7', src: '/dessin7.jpg', alt: 'Dessin 7', createdAt: new Date().toISOString() },
  { id: '8', src: '/dessin8.jpg', alt: 'Dessin 8', createdAt: new Date().toISOString() },
  { id: '9', src: '/dessin9.jpg', alt: 'Dessin 9', createdAt: new Date().toISOString() },
]);

// Read data
export const readData = (filename) => {
  const filepath = path.join(DATA_DIR, filename);
  const data = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(data);
};

// Write data
export const writeData = (filename, data) => {
  const filepath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
};

// Users operations
export const getUsers = () => readData('users.json');
export const saveUsers = (users) => writeData('users.json', users);

// Tattoos operations
export const getTattoos = () => readData('tattoos.json');
export const saveTattoos = (tattoos) => writeData('tattoos.json', tattoos);

// Dessins operations (Flash disponibles)
export const getDessins = () => readData('dessins.json');
export const saveDessins = (dessins) => writeData('dessins.json', dessins);

// Drawings operations (Mes dessins)
export const getDrawings = () => readData('drawings.json');
export const saveDrawings = (drawings) => writeData('drawings.json', drawings);
