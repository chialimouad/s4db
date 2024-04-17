
const { MongoClient } = require('mongodb');

class HeartbeatModel {
  constructor(uri, dbName, collectionName) {
    this.uri = uri;
    this.dbName = dbName;
    this.collectionName = collectionName;
  }

  async insertHeartbeat(value) {
    const client = await MongoClient.connect(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(this.dbName);
    const collection = db.collection(this.collectionName);
    await collection.insertOne({ value, timestamp: new Date() });
    client.close();
  }
}

module.exports = HeartbeatModel;
