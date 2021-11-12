'use strict';
const MongoClient = require('mongodb').MongoClient,
      // hardcode local connection; should set programmatically
      url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
  if (err) { throw err; }
  console.log("We're in!");
  db.close();
});
