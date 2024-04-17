// controllers/dataController.js
const DataService = require('../services/servicesbpm');

class DataController {
  static async saveData(req, res) {
    try {
      const sensorValue = req.body.sensorValue;
      const newData = await DataService.saveData(sensorValue);
      res.sendStatus(200);
    } catch (err) {
      console.error('Error saving data:', err);
      res.sendStatus(500);
    }
  }
}

module.exports = DataController;
