'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('tattoos');
  const [tattoos, setTattoos] = useState([]);
  const [dessins, setDessins] = useState([]);
  const [drawings, setDrawings] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({ src: '', alt: '' });
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    checkAuth();
    fetchData();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me');
      if (!response.ok) {
        router.push('/login');
        return;
      }
      const data = await response.json();
      if (data.user.role !== 'admin') {
        router.push('/');
        return;
      }
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      router.push('/login');
    }
  };

  const fetchData = async () => {
    try {
      const [tattoosRes, dessinsRes, drawingsRes] = await Promise.all([
        fetch('/api/tattoos'),
        fetch('/api/dessins'),
        fetch('/api/drawings')
      ]);
      const tattoosData = await tattoosRes.json();
      const dessinsData = await dessinsRes.json();
      const drawingsData = await drawingsRes.json();
      setTattoos(tattoosData.tattoos || []);
      setDessins(dessinsData.dessins || []);
      setDrawings(drawingsData.drawings || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  };

  const getEndpoint = (id = null) => {
    const base = activeTab === 'tattoos' ? '/api/tattoos' : activeTab === 'dessins' ? '/api/dessins' : '/api/drawings';
    return id ? `${base}/${id}` : base;
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      let imagePath = formData.src;

      if (selectedFile) {
        imagePath = await uploadFile();
      }

      if (!imagePath) {
        alert('Veuillez sélectionner une image');
        setUploading(false);
        return;
      }

      const response = await fetch(getEndpoint(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ src: imagePath, alt: formData.alt })
      });

      if (response.ok) {
        setFormData({ src: '', alt: '' });
        setSelectedFile(null);
        setPreviewUrl(null);
        setIsAdding(false);
        fetchData();
      }
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Erreur lors de l\'ajout');
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      let imagePath = formData.src;

      if (selectedFile) {
        imagePath = await uploadFile();
      }

      const response = await fetch(getEndpoint(editingItem._id || editingItem.id), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ src: imagePath, alt: formData.alt })
      });

      if (response.ok) {
        setFormData({ src: '', alt: '' });
        setSelectedFile(null);
        setPreviewUrl(null);
        setEditingItem(null);
        fetchData();
      }
    } catch (error) {
      console.error('Error editing item:', error);
      alert('Erreur lors de la modification');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) return;

    try {
      const response = await fetch(getEndpoint(id), { method: 'DELETE' });

      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const startEdit = (item) => {
    setEditingItem(item);
    setFormData({ src: item.src, alt: item.alt });
    setIsAdding(false);
  };

  const cancelForm = () => {
    setIsAdding(false);
    setEditingItem(null);
    setFormData({ src: '', alt: '' });
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) return null;

    const category = activeTab === 'tattoos' ? 'tattoos' : activeTab === 'dessins' ? 'dessins' : 'drawings';
    const uploadFormData = new FormData();
    uploadFormData.append('file', selectedFile);
    uploadFormData.append('category', category);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: uploadFormData
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    return data.path;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-pink-900 to-black">
        <div className="text-white text-xl">Chargement...</div>
      </div>
    );
  }

  const currentItems = activeTab === 'tattoos' ? tattoos : activeTab === 'dessins' ? dessins : drawings;
  const getItemLabel = () => {
    if (activeTab === 'tattoos') return 'un tattoo';
    if (activeTab === 'dessins') return 'un flash';
    return 'un dessin';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-pink-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-br from-white to-pink-400 bg-clip-text text-transparent">
            Dashboard Admin
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-pink-200">Bienvenue, {user?.email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
            >
              Déconnexion
            </button>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-md rounded-2xl shadow-2xl border border-pink-400/20 p-6">
          <div className="flex gap-4 mb-6 border-b border-pink-400/20 pb-4 flex-wrap">
            <button
              onClick={() => setActiveTab('tattoos')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeTab === 'tattoos'
                  ? 'bg-pink-500 text-white'
                  : 'bg-black/30 text-pink-200 hover:bg-black/50'
              }`}
            >
              Tattoos ({tattoos.length})
            </button>
            <button
              onClick={() => setActiveTab('dessins')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeTab === 'dessins'
                  ? 'bg-pink-500 text-white'
                  : 'bg-black/30 text-pink-200 hover:bg-black/50'
              }`}
            >
              Flash Dispo ({dessins.length})
            </button>
            <button
              onClick={() => setActiveTab('drawings')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeTab === 'drawings'
                  ? 'bg-pink-500 text-white'
                  : 'bg-black/30 text-pink-200 hover:bg-black/50'
              }`}
            >
              Mes Dessins ({drawings.length})
            </button>
          </div>

          <div className="mb-6">
            {!isAdding && !editingItem && (
              <button
                onClick={() => setIsAdding(true)}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105"
              >
                + Ajouter {getItemLabel()}
              </button>
            )}

            {(isAdding || editingItem) && (
              <form onSubmit={editingItem ? handleEdit : handleAdd} className="bg-black/30 p-6 rounded-lg border border-pink-400/20">
                <h3 className="text-xl font-semibold text-pink-200 mb-4">
                  {editingItem ? 'Modifier' : 'Ajouter'} {getItemLabel()}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-pink-200 mb-2">
                      Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full px-4 py-2 bg-black/50 border border-pink-400/30 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-pink-500 file:text-white file:cursor-pointer hover:file:bg-pink-600"
                    />
                    {previewUrl && (
                      <div className="mt-3">
                        <img src={previewUrl} alt="Aperçu" className="w-32 h-32 object-cover rounded-lg" />
                      </div>
                    )}
                    {editingItem && !previewUrl && (
                      <div className="mt-3">
                        <p className="text-sm text-gray-400 mb-2">Image actuelle:</p>
                        <img src={editingItem.src} alt="Image actuelle" className="w-32 h-32 object-cover rounded-lg" />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pink-200 mb-2">
                      Description (alt text)
                    </label>
                    <input
                      type="text"
                      value={formData.alt}
                      onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
                      placeholder="Description de l'image"
                      className="w-full px-4 py-2 bg-black/50 border border-pink-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-400"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={uploading}
                      className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {uploading ? 'Upload en cours...' : (editingItem ? 'Mettre à jour' : 'Ajouter')}
                    </button>
                    <button
                      type="button"
                      onClick={cancelForm}
                      disabled={uploading}
                      className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition disabled:opacity-50"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentItems.map((item) => (
              <div key={item._id || item.id} className="bg-black/30 rounded-lg overflow-hidden border border-pink-400/20 hover:border-pink-400/50 transition">
                <div className="aspect-square relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-pink-200 mb-3 truncate">{item.alt || 'Sans description'}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(item)}
                      className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(item._id || item.id)}
                      className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {currentItems.length === 0 && (
            <div className="text-center py-12 text-pink-200">
              Aucun élément pour le moment
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
