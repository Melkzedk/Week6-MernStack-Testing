import React from 'react';
import BugItem from './BugItem';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BugList({ bugs, onUpdate, onDelete }) {
  if (!bugs || bugs.length === 0) {
    return <div className="alert alert-info">No bugs reported yet.</div>;
  }

  return (
    <ul className="list-group">
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
