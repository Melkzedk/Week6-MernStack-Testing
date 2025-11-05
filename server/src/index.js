const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { port, mongoUri } = require('./config');
const bugsRouter = require('./routes/bugs');
const errorHandler = require('./middleware/errorHandler');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/bugs', bugsRouter);

// error handling middleware
app.use(errorHandler);


mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
console.log('MongoDB connected');
app.listen(port, () => console.log(`Server started on port ${port}`));
})
.catch(err => {
console.error('MongoDB connection error', err);
process.exit(1);
});