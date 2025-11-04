import React, { useEffect, useState } from 'react';
import API from './api';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import ErrorBoundary from './components/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <div className="App bg-light min-vh-100 d-flex flex-column">
        {/* Header */}
        <nav className="navbar navbar-dark bg-dark mb-4 shadow">
          <div className="container">
            <span className="navbar-brand mx-auto fs-4">
              🐞 <strong>Bug Tracker!</strong>
            </span>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container flex-grow-1">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <BugForm onCreate={handleCreate} />

              {loading && <div className="alert alert-info mt-3">Loading.....</div>}
              {error && <div className="alert alert-danger mt-3">{error}</div>}

              <BugList
                bugs={bugs}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 mt-auto">
          <small>© {new Date().getFullYear()} Bug Tracker</small>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
