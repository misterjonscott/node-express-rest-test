const mongoose = require('mongoose');
const dburi = 'mongodb://misterman:misterman@ds163294.mlab.com:63294/moodledoo';
mongoose.connect(dburi, {useMongoClient: true });

mongoose.connection.on('connected', function(){
  console.log('connected');
});
mongoose.connection.on('error', function(){
  console.log('error');
});
mongoose.connection.on('disconnected', function(){
  console.log('disconnected');
});