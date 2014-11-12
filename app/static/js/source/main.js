(function($){
  'use strict';

  var titles     = [],
      ids        = [],
      thumbnails = [],
      request    = {},
      req, requ, theVid, ytURL,
      i, listImg, listItem, listTitle,
      id, theTitle, theThumbnail, theId;

  $(document).ready(initialize);

  function initialize(){
    $('#uploadForm').keyup(vidSearch);
    // $('.next').click(moveDown);
    $('.selectpicker').selectpicker({style:'btn-default', size:4});
    $('.search').submit(function(e) {e.preventDefault();});
    onePageScroll();
  }

  function vidSearch(){
    req = $('#uploadForm').val();
    requ = req.substring(0, 4);
    if(requ == 'http' || requ.trim().length == 0){
      $('#search-results').addClass('hide');
      $('#search-results').empty();
    }else{
      authInit();
    }
  }

  function authInit(){
    gapi.client.setApiKey('AIzaSyDHjyZ5OtsbY_6PxkKa_nCu21vAM21H5Ak');
    gapi.client.load('youtube', 'v3').then(searchVid);
  }

  function searchVid(){
    prepSearch();
    request = gapi.client.youtube.search.list({
      q     : req,
      part  : 'snippet',
      type  : 'video'
    });
    request.then(function(response){
      for (i = 0; i < 5; i++) {
        titles.push(response.result.items[i].snippet.title);
        thumbnails.push(response.result.items[i].snippet.thumbnails.default.url);
        ids.push(response.result.items[i].id.videoId);
        showResults();
      };
      $('.list-item').load(searchSelect());
    });
  }

  function prepSearch(){
    $('#search-results').removeClass('hide');
    $('#search-results').empty();
    titles      = [];
    ids         = [];
    thumbnails  = [];
  }

  function showResults(){
    theTitle     = titles[i];
    theId        = ids[i];
    theThumbnail = thumbnails[i];
    listImg      = $('<img/>',  {src: theThumbnail, class:'list-img col-sm-4'});
    listTitle    = $('<span/>', {html: theTitle, class:'list-title col-sm-8'});
    listItem     = $('<li/>',   {id: theId, class:'list-item row'});
    $('#search-results').append($(listItem).append(listImg).append(listTitle));
  }

  function searchSelect(){
    $('.list-item').click(function(){
      id = $(this).attr('id');
      ytURL = 'https://youtu.be/' + id;
      $('#youtube').val(ytURL);
      theVid = $('#youtube').val();
      $(".main").moveDown();
      console.log(theVid);
    });
  }

  // function moveDown(){
  //   $(".main").moveDown();
  // }

  function onePageScroll(){
    $(".main").onepage_scroll({
      sectionContainer   : "section",
      easing             : "ease",
      animationTime      : 1000,
      pagination         : false,
      updateURL          : false,
      beforeMove         : function(index) {},
      afterMove          : function(index) {},
      loop               : false,
      keyboard           : true,
      mousewheel         : false,
      responsiveFallback : false,
      direction          : "vertical"
    });
  }

})(jQuery);
