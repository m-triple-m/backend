const mongoose = require('mongoose');

const url = require('./config').db_url;

mongoose.connect(url)
    .then(() => { console.log('database connected successfully!'); })
    .catch((err) => { console.error(err); })

module.exports = mongoose;