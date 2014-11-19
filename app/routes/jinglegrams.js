'use strict';

var key        = "TRZJMRXITQGIFF6LK";
var request    = require('request');
var unirest    = require('unirest');
var offliberty = require('offliberty');
var Jinglegram = require('../models/jinglegram.js');
var jinglegram, url, echoUp, echoPro, formData, trk, timeSig, tempo, status;

exports.index = function(req, res){
  if(req.query.jingle){
    exports.show(req, res);
    console.log(req.query.jingle);
  }else{
    res.render('./views/home/index.ejs');
  }
};

exports.create = function(req, res){
  console.log("the form was submitted dummy");
  console.log(req.body);
  jinglegram = new Jinglegram(req.body);
  jinglegram.insert(function(jinglegram){});
  url = '?jingle=' + jinglegram._id.toString();
  console.log(url);
  res.redirect(url);
};

exports.show = function(req, res){
  status = 'pending';
  Jinglegram.findById(req.query.jingle, function(gram){
    // offliberty.off(gram.youtube, function(err, downloadUrl){
    upload(gram.youtube); // downloadUrl, res, function(){
    // });
    // });
  });
};

function upload(trk){
  echoUp = 'http://developer.echonest.com/api/v4/track/upload';
  // agent
  //   .post(echoUp)
  //   .set('api_key', key)
  //   .set('format', 'json')
  //   .set('filetype', 'mp3')
  //   .attach('file', '/Users/Decepticom/Documents/code/12south/dev/jinglegram/app/static/audio/bong.mp3')
  //   .end(function(err, response, body){
  //     console.log(body);
  //   });
  unirest
  .post(echoUp)
  .headers({'api_key' : key, 'format' : 'json', 'filetype' : 'mp3', 'url' : trk})
  // .attach('url', '/Users/Decepticom/Documents/code/12south/dev/jinglegram/app/static/audio/bong.mp3') // Attachment
  .end(function (err, response, body) {
    console.log(body);
  });
  // formData  = {
  //   api_key : key,
  //   url     : mp3
  // };
  // request.post({url : echoUp, formData : formData}, function(err, httpResponse, body){
  //   // body    = JSON.parse(body);
  //   console.log('DDDDDDDDDD'+body+'DDDDDDDDDDD');
  //   // trk     = body.response.track.id;
  //   // profile(trk, res);
  // });
}

// function profile(trk, res){
//   echoPro = 'http://developer.echonest.com/api/v4/track/profile?api_key='+key+'&format=json&id='+trk+'&bucket=audio_summary';
//   console.log('running profile');
//   request(echoPro, function(err, httpResponse, body){
//     body    = JSON.parse(body);
//     timeSig = body.response.track.audio_summary.time_signature;
//     tempo   = body.response.track.audio_summary.tempo;
//     console.log(tempo);
//     console.log(timeSig);
//     status  = body.response.track.status;
//   });
  // if(status != 'complete'){
  //   setTimeout(profile(), 1000);
  // }else{
  //   res.render("views/jingle.ejs", {youtube:gram.youtube, jing:gram.jing, bling:gram.bling, message:gram.message});
  //   return;
  // }

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
