const pulseService = require('../services/servicesbpm');

async function handlePulseData(ws, message) {
  try {
    await pulseService.savePulseData(message);
  } catch (error) {
    console.error('Error handling pulse data:', error);
    // Optionally, you can throw the error to propagate it further up the call stack
    throw error;
  }
}

module.exports = { handlePulseData };
