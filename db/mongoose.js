const mongoose = require('mongoose');
const { db } = require('../config');

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
