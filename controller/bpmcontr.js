// controllers/PatientDataController.js

const PatientData = require('../models/bpm');

async function getPatientData(req, res) {
  const { patientID } = req.params;
  try {
    const patientData = await PatientData.find({ patientID });
    if (patientData.length > 0) {
      res.status(200).json(patientData);
    } else {
      res.status(404).json({ error: 'Patient data not found' });
    }
  } catch (error) {
    console.error('Error fetching patient data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function saveOrUpdateData(req, res) {
  const { patientID, sensor, value } = req.body;

  try {
    // Find the most recent document for the specified patient
    const lastData = await PatientData.findOne({ patientID }).sort({ timestamp: -1 });

    // If there is no previous data for this patient, create a new document
    if (!lastData) {
      const newPatientData = new PatientData({ patientID, sensor, value });
      await newPatientData.save();
      console.log('First data saved to MongoDB Atlas:', newPatientData);
      return res.status(200).send('First data saved successfully');
    }

    // Update the value of the last document for the patient
    lastData.value = value;
    await lastData.save();
    console.log('Data updated in MongoDB Atlas:', lastData);
    res.status(200).send('Data updated successfully');
  } catch (err) {
    console.error('Error saving or updating data to MongoDB Atlas:', err);
    res.status(500).send('Internal server error');
  }
}

module.exports = {
  getPatientData,
  saveOrUpdateData
};
