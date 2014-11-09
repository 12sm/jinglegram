'use strict';

var Mongo = require('mongodb');

function Jinglegram(data){
  this.youtube = data.youtube;
  this.jing    = data.jing;
  this.bling   = data.bling;
  this.message = data.message;
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

Jinglegram.findById = function(id, fn){
  var mongoId = new Mongo.ObjectID(id);
  Jinglegram.collection.findOne({_id:mongoId}, function(err, record){
    fn(record);
  });
};

module.exports = Jinglegram;
