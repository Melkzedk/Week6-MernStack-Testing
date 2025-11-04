import axios from 'axios';

const API = axios.create({
baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
});

export default {
getBugs: () => API.get('/bugs'),
createBug: (payload) => API.post('/bugs', payload),
updateBug: (id, payload) => API.patch(`/bugs/${id}`, payload),
deleteBug: (id) => API.delete(`/bugs/${id}`)
};