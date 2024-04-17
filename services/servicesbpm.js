// services/pulseService.js
const db = require('../models/bpm');

async function savePulseData(value) {
  try {
    await db.collection('pulseData').insertOne({ value: parseInt(value) });
    console.log('Pulse data saved to MongoDB:', value);
  } catch (error) {
    console.error('Error saving pulse data to MongoDB:', error);
  }
}

module.exports = { savePulseData };
