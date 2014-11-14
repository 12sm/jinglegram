'use strict';

var Jinglegram = require('../models/jinglegram.js');
var jinglegram;

exports.index = function(req, res){
  if(req.query.jingle){
    exports.show(req, res);
    console.log(req.query.jingle);
    console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
  }else{
    res.render('./views/home/index.ejs');
  }
};

exports.create = function(req, res){
  console.log("the form was submitted dummy");
  console.log(req.body);
  jinglegram = new Jinglegram(req.body);
  jinglegram.insert(function(jinglegram){});
  console.log(jinglegram._id);
  var url = '?jingle=' + jinglegram._id.toString();
  console.log(url);
  res.redirect(url);
};

exports.show = function(req, res){
  Jinglegram.findById(req.query.jingle, function(jinglegram){
    console.log(jinglegram);
    console.log({jinglegram:jinglegram.youtube});
    res.render("views/jingle.ejs", {youtube:jinglegram.youtube, jing:jinglegram.jing, bling:jinglegram.bling, message:jinglegram.message});
    // res.redirect('/');
  });
};

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
