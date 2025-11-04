import React from 'react';
import BugItem from './BugItem';

export default function BugList({ bugs, onUpdate, onDelete }) {
  if (!bugs || bugs.length === 0) {
    return <p>No bugs reported yet.</p>;
  }

  return (
    <ul style={{ padding: 0 }}>
      {bugs.map((bug) => (
        <BugItem
          key={bug._id}
          bug={bug}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
