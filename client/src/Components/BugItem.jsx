import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BugItem({ bug, onUpdate, onDelete }) {
  const toggleResolved = () => {
    const newStatus = bug.status === 'resolved' ? 'open' : 'resolved';
    onUpdate(bug._id, { status: newStatus });
  };

  return (
    <li className="list-group-item d-flex flex-column gap-2">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className={bug.status === 'resolved' ? 'text-success' : ''}>{bug.title}</h5>
        <span className={`badge ${bug.status === 'resolved' ? 'bg-success' : 'bg-warning text-dark'}`}>
          {bug.status}
        </span>
      </div>

      <p className="mb-2">{bug.description}</p>

      <div className="d-flex gap-2">
        <button
          className={`btn btn-sm ${bug.status === 'resolved' ? 'btn-secondary' : 'btn-success'}`}
          onClick={toggleResolved}
        >
          {bug.status === 'resolved' ? 'Reopen' : 'Mark Resolved' }
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => onDelete(bug._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
