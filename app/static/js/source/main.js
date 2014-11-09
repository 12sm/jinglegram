//Send google the API key
function authinit() {
    console.log('authInit firing');
    gapi.client.setApiKey('AIzaSyDHjyZ5OtsbY_6PxkKa_nCu21vAM21H5Ak');
    gapi.client.load('youtube', 'v3').then(handleAPILoaded);
  }
   // After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#uploadForm').attr('disabled', false);
  console.log('API Loaded');
}

// Search for a specified string.
function vidSearch() {
  debugger;
  console.log('search fired');
  var q = $('#uploadForm').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    type: 'video',
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}
(function(){
  $(".search").submit(function(e) {
    e.preventDefault();
  });

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    //Load Youtube API
       //OnePageScroll
    $(".main").onepage_scroll({
       sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
       easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
       animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
       pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
       updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
       beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
       afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
       loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
       keyboard: true,                  // You can activate the keyboard controls
       mousewheel: false,
       responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                        // the browser's width is less than 600, the fallback will kick in.
       direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });

    $(".next").click(function(){
      $(".main").moveDown();
    });

    $('.selectpicker').selectpicker({
      style: 'btn-default',
      size: 4
    });

  }
//call API

})();
