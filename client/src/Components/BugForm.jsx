import React, { useState } from 'react';


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
// expose a console.log for debugging practice
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
<form onSubmit={handleSubmit}>
<div>
<label>Title</label>
<input value={title} onChange={e => setTitle(e.target.value)} />
</div>
<div>
<label>Description</label>
<textarea value={description} onChange={e => setDescription(e.target.value)} />
</div>
{error && <div role="alert">{error}</div>}
<button type="submit">Report bug</button>
</form>
);
}