'use strict';

var Jinglegram = require('../models/jinglegram');
var jinglegram;

exports.index = function(req, res){
  Jinglegram.findAll(function(jinglegrams){
    res.render('jinglegrams/index', {title: 'Showing All Jinglegrams', jinglegrams:jinglegrams});
  });
};

exports.create = function(req, res){
  jinglegram = new Jinglegram(req.body);
  jinglegram.addCover(req.files.cover.path);
  jinglegram.makeDirectory();
  jinglegram.insert(function(jinglegram){
    res.redirect('/');
  });
};

// exports.show = function(req, res){
//   Album.findById(req.params.id, function(album){
//     res.render('albums/show', {album:album, title:album.title});
//   });
// };
//
// exports.create = function(req, res){
//   album = new Album(req.body);
//   album.addCover(req.files.cover.path);
//   album.makeDirectory();
//   album.insert(function(album){
//     res.redirect('/');
//   });
// };
//
// exports.update = function(req, res){
//   album = new Album(req.body);
//   album.update(req.params.id, function(){
//     res.redirect('/albums/'+req.params.id);
//   });
// };
//
// exports.destroy = function(req, res){
//   Album.deleteById(req.params.id, function(){
//     res.redirect('/albums');
//   });
// };
//
// exports.addSong = function(req, res){
//   Album.findById(req.params.id, function(album){
//     album = new Album(album);
//     album.addSong(req.files.song.path, req.files.song.name);
//     album.update(function(){
//       res.redirect('albums/'+ req.params.id);
//     });
//   });
// };