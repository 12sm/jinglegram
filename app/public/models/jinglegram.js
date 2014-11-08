'use strict';

module.exports = Jinglegram;

var users = global.nss.db.collection('jinglegrams');
var Mongo = require('mongodb');

function User(data){
  this.youtube = data.youtube;
}
