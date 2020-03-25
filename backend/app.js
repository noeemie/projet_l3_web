const express = require('express');
const mongoose = require('mongoose');

const Thing = require('./models/Thing');

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

// app.post('/api/tableau', (req, res, next) => {
//     const thing =  new Thing({
//         ...req.body
//     });
//     thing.save()
//         .then(() => res.status(201).json({message: 'Objet enregistré !'}))// 201 = code création reussi
//         .catch(error => res.status(400).json({ error }));// 400 = code erreur
//     next();
// });

app.use('/api/tableau', (req, res, next) => {
    // methode en dur
    // const tableaux = [
    //     {
    //         _id: 'soleil',
    //         title: 'Classement - Soleil',
    //         classement: 'bla',
    //     },
    //     {
    //         _id: 'pluie',
    //         title: 'Classement - Pluie',
    //         classement: 'bla',
    //     },
    //     {
    //         _id: 'vent',
    //         title: 'Classement - Vent',
    //         classement: 'bla',
    //     },
    // ];
    // res.status(200).json(tableaux);

    // methode en allant chercher dans la bdd
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
});

module.exports = app;