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

// middlewear pour enregister un commentaire d'utilisateur
app.post('/api', (req, res, next) => {
  const thing =  new Thing({
     ...req.body
  });
  thing.save()
      .then(() => res.status(201).json({message: 'Objet enregistré !'}))// 201 = code création reussi
      .catch(error => res.status(400).json({ error }));// 400 = code erreur
  next();
});

// affichage des commentaires
app.use('/api', (req, res, next) => {
  // methode en allant chercher dans la bdd
  Thing.find()
      .then(avis => res.status(200).json(avis))
      .catch(error => res.status(400).json({ error }));
});

// pour faire les palmares des pilotes
app.use('/api', (req, res, next) => {
  Thing.find()
      .then(meilleur => res.status(200).json(meilleur))
      .catch(error => res.status(400).json({ error }));
  next();
});

module.exports = app;