'use strict';

var Mongo = require('mongodb');

function Jinglegram(data){
  this.youtube = data.youtube;
  this.sample  = data.sample;
  this.note    = data.note;
  if(jinglegram._id){
    this._id = new Mongo.ObjectID(jinglegram._id);
  }
}

Object.defineProperty(Jinglegram, 'collection', {
  get: function(){return global.jinglegram.collection('jinglegrams');}
});

Jinglegram.prototype.insert = function(fn){
  Jinglegram.collection.insert(this, function(err, record){
    fn(record);
  });
};

Jinglegram.findAll = function(fn){
  Jinglegram.collection.find().toArray(function(err, records){
    fn(records);
  });
};

module.exports = Jinglegram;
