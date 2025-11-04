import React from 'react';

export default function BugItem({ bug, onUpdate, onDelete }) {
  const toggleResolved = () => {
    const newStatus = bug.status === 'resolved' ? 'open' : 'resolved';
    onUpdate(bug._id, { status: newStatus });
  };

  return (
    <li
      style={{
        border: '1px solid #ccc',
        margin: '8px 0',
        padding: '8px',
        borderRadius: '8px',
        listStyle: 'none',
      }}
    >
      <h4>{bug.title}</h4>
      <p>{bug.description}</p>
      <small>Status: {bug.status}</small>

      <div style={{ marginTop: '8px' }}>
        <button onClick={toggleResolved} style={{ marginRight: '8px' }}>
          {bug.status === 'resolved' ? 'Reopen' : 'Mark Resolved'}
        </button>
        <button onClick={() => onDelete(bug._id)} style={{ color: 'red' }}>
          Delete
        </button>
      </div>
    </li>
  );
}