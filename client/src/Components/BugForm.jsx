import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BugForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const validate = () => {
    if (!title.trim()) return false; // TODO: INTENTIONAL_BUG - returns false but no feedback message for user
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setError('Title is required');
      return;
    }
    try {
      console.log('Submitting bug:', { title, description });
      await onCreate({ title, description });
      setTitle('');
      setDescription('');
      setError(null);
    } catch (err) {
      console.error('Create failed', err);
      setError('Failed to create');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm mb-3">
      <h5 className="mb-3">Report a New Bug</h5>

      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter bug title."
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the issue."
          rows="3"
        />
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <button type="submit" className="btn btn-primary w-100">
        Report Bug!
      </button>
    </form>
  );
}
