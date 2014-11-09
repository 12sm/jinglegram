// Plays a jingle on every second beat
var apiKey = 'TRZJMRXITQGIFF6LK';
var trackID = 'TRACK-ID-HERE';
var trackURL = '../../audio/katie.mp3'
var jingleURL = '../../audio/jinglebell_hit-f.mp3'

var context;
var jingleBuffer;

var remixer;
var player;
var track;
var remixed;



function init() {
    var contextFunction = window.webkitAudioContext || window.AudioContext;
    if (contextFunction === undefined) {
        $("#info").text("Sorry, this app needs advanced web audio. Your browser doesn't"
            + " support it. Try the latest version of Chrome?");
    } else {
        var context = new contextFunction();

        // Load jingle
        var request = new XMLHttpRequest();
        request.open('GET', jingleURL, true);
        request.responseType = 'arraybuffer';

        request.onload = function() {
        context.decodeAudioData(request.response, function(buffer) {
            jingleBuffer = buffer;
        });
        }
        request.send();


        remixer = createJRemixer(context, $, apiKey);
        player = remixer.getPlayer();
        $("#info").text("Loading analysis data...");

        remixer.remixTrackById(trackID, trackURL, function(t, percent) {
            track = t;

            $("#info").text(percent + "% of the track loaded");
            if (percent == 100) {
                $("#info").text(percent + "% of the track loaded, remixing...");
            }

            if (track.status == 'ok') {
                remixed = track.analysis.beats;
                for (var i=0; i < remixed.length; i++) {
                    if (i % 2 == 1) {
                        remixed[i].syncBuffer = jingleBuffer;
                    }
                }
                $("#info").text("Remix complete!");
            }
        });
    }
}

window.onload = init;
