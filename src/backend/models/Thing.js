const mongoose = require('mongoose');

const avis = mongoose.Schema({
    nom: {type: String, required: true},
    circuit: {type: String, required: true},
    commentaire: {type: String, required: true},
});

// pour les palmares des pilotes --> classé par le nombre de win
// const meilleur = mongoose.Schema({
//     name: {type: String, required: true},
//     nbPoles: {type: Number, required: true},
//     nbWin: {type: Number, required: true},
// });

module.exports = mongoose.model('Thing', avis);
// module.exports = mongoose.model('Thing', meilleur);