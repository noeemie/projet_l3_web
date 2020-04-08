const express = require('express');
const mongoose = require('mongoose');

const Thing = require('./models/Thing');

// connection a ma base de données
mongoose.connect('mongodb+srv://noemie_farizon:<Chouquette72>@projetwebl3-ovih1.mongodb.net/test?retryWrites=true&w=majority',
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
app.post('/index', (req, res, next) => {
  const thing =  new Thing({
     ...req.body
  });
  thing.save()
      .then(() => res.status(201).json({message: 'Objet enregistré !'}))// 201 = code création reussi
      .catch(error => res.status(400).json({ error }));// 400 = code erreur
  next();
});

// middleware affichage des commentaires
app.use('/index', (req, res, next) => {
  // methode en allant chercher dans la bdd
  Thing.find()
      .then(avis => res.status(200).json(avis))
      .catch(error => res.status(400).json({ error }));
});

module.exports = app;