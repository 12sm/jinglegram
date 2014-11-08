'use strict';

module.exports = Jinglegram;

var users = global.nss.db.collection('jinglegrams');
var Mongo = require('mongodb');

function User(data){
  this.youtube = data.youtube;
  this.sample  = data.sample;
  this.note    = data.note;
  if(jinglrgram._id){
    this._id = new Mongo.ObjectID(jinglegram._id);
  }
}
