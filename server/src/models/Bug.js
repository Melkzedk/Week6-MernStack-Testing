const mongoose = require('mongoose');


const BugSchema = new mongoose.Schema({
title: { type: String, required: true },
description: { type: String },
test: {type: String},
status: { type: String, enum: ['open', 'in-progress', 'resolved'], default: 'open' },
createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Bug', BugSchema);