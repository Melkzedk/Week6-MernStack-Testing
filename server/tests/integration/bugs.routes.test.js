const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const bugsRouter = require('../../routes/bugs');
const Bug = require('../../models/Bug');


let app;


beforeAll(async () => {
app = express();
app.use(express.json());
app.use('/api/bugs', bugsRouter);


// connect to in-memory MongoDB using mongodb-memory-server would be ideal
// but to keep dependencies minimal, tests expect a test database at MONGO_URI
await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mern-testing-test');
});


afterAll(async () => {
await mongoose.connection.db.dropDatabase();
await mongoose.disconnect();
});


beforeEach(async () => {
await Bug.deleteMany({});
});


test('POST /api/bugs creates a bug', async () => {
const res = await request(app)
.post('/api/bugs')
.send({ title: 'Test bug', description: 'desc' });


expect(res.statusCode).toBe(201);
expect(res.body.title).toBe('Test bug');
});