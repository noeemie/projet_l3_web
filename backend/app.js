const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+noemie_farizon://jimbob:Chouquette72@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use((req, res, next) => {
    
    next();
});

app.use('/api/tableau', (req, res, next) => {
    const tableaux = [
        {
            _id: 'soleil',
            title: 'Classement - Soleil',
            classement: [
                {
                    position: 1,
                    pilote: 'machin',
                    temps: '1,023',
                },
                {
                    position: 2,
                    pilote: 'machine',
                    temps: '1,023',
                },
                {
                    position: 3,
                    pilote: 'michel',
                    temps: '1,023',
                },
            ],
        },
        {
            _id: 'pluie',
            title: 'Classement - Pluie',
            classement: [
                {
                    position: 1,
                    pilote: 'machin',
                    temps: '1,023',
                },
                {
                    position: 2,
                    pilote: 'machine',
                    temps: '1,023',
                },
                {
                    position: 3,
                    pilote: 'michel',
                    temps: '1,023',
                },
            ],
        },
        {
            _id: 'vent',
            title: 'Classement - Vent',
            classement: [
                {
                    position: 1,
                    pilote: 'machin',
                    temps: '1,023',
                },
                {
                    position: 2,
                    pilote: 'machine',
                    temps: '1,023',
                },
                {
                    position: 3,
                    pilote: 'michel',
                    temps: '1,023',
                },
            ],
        },
    ];
    res.status(200).json(tableaux);
});

module.exports = app;