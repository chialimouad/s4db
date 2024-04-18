const ValueBPM = require('../models/bpmsocket');

async function saveValueBPM(valuebpm) {
  try {
    const newValueBPM = new ValueBPM({ valuebpm });
    await newValueBPM.save();
    return newValueBPM;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  saveValueBPM
};
