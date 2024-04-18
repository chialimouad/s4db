const valuebpmService = require('../services/bpmservices');

async function handleValueBPM(valuebpm) {
  try {
    // Save valuebpm in the database
    const newValueBPM = await valuebpmService.saveValueBPM(valuebpm);
    return newValueBPM;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  handleValueBPM
};
