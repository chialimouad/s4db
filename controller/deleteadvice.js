const cron = require('node-cron');
const db = require('../models/models');

async function deleteAdvice() {
    try {
        await db.updateMany({ advice: { $exists: true } }, { $unset: { advice: 1 } });
        console.log('Advice deleted successfully.');
    } catch (error) {
        console.error('Error occurred while deleting advice:', error);
    }
}

cron.schedule('0 0 * * *', async () => {
    try {
        await deleteAdvice();
    } catch (error) {
        console.error('Error occurred while running cron job:', error);
    }
});

module.exports = { deleteAdvice };
