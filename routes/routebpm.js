// routes/patientDataRoutes.js

const express = require('express');
const PatientDataController = require('../controller/bpmcontr');

const router = express.Router();

router.get('/patient/:patientID', PatientDataController.getPatientData);
router.post('/data', PatientDataController.saveOrUpdateData);

module.exports = router;
