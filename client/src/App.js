import React, { useEffect, useState } from 'react';
import API from './api';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBugs = async () => {
    try {
      setLoading(true);
      const res = await API.getBugs();
      setBugs(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to load bugs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  const handleCreate = async (payload) => {
    try {
      const res = await API.createBug(payload);
      // Add new bug at the top of the list
      setBugs((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error(err);
      setError('Failed to create bug');
    }
  };

  const handleUpdate = async (id, updates) => {
    try {
      await API.updateBug(id, updates);
      setBugs((prev) =>
        prev.map((bug) => (bug._id === id ? { ...bug, ...updates } : bug))
      );
    } catch (err) {
      console.error(err);
      setError('Failed to update bug');
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.deleteBug(id);
      setBugs((prev) => prev.filter((bug) => bug._id !== id));
    } catch (err) {
      console.error(err);
      setError('Failed to delete bug');
    }
  };

  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <h1>🐞 Bug Tracker</h1>
        </header>

        <main style={{ maxWidth: '600px', margin: 'auto' }}>
          <BugForm onCreate={handleCreate} />

          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <BugList bugs={bugs} onUpdate={handleUpdate} onDelete={handleDelete} />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
