'use strict';

module.exports = Jinglegram;

var users    = global.jg.db.collection('jinglegrams');
var Mongo    = require('mongodb');

function Jinglegram(data){
  this.youtube = data.youtube;
  this.sample  = data.sample;
  this.note    = data.note;
  if(jinglegram._id){
    this._id = new Mongo.ObjectID(jinglegram._id);
  }
}

Jinglegram.prototype.insert = function(fn){
  jinglegrams.insert(this, function(err, record){
    fn(record);
  });
};

Jinglegram.findAll = function(fn){
  jinglegrams.find().toArray(function(err, records){
    fn(records);
  });
};
