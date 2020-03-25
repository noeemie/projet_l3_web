const mongoose = require('mongoose');

const tableau = mongoose.Schema({
    titre: {type: String, required: true},
    classement: {type: String, required: true},
});

module.exports = mongoose.model('Things', tableau);