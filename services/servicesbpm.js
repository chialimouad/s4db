// services/dataService.js
const DataModel = require('../models/bpm');

class DataService {
  static async saveData(sensorValue) {
    try {
      const newData = new DataModel({ sensorValue });
      await newData.save();
      console.log('Data saved to MongoDB:', newData);
      return newData;
    } catch (err) {
      console.error('Error saving data to MongoDB:', err);
      throw err;
    }
  }
}

module.exports = DataService;
