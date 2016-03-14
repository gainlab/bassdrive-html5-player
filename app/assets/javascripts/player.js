// // Place all the behaviors and hooks related to the matching controller here.
// // All this logic will automatically be available in application.js.
//
// $(document).ready(function() {
//   var stream = {
//       title: "BASSDRIVE",
//       mp3: "http://forbes.streams.bassdrive.com:8132/;stream/1"
//     },
//     ready = false;
//
//     $("#bassdrive-player").jPlayer({
//       ready: function (event) {
//         ready = true;
//         $(this).jPlayer("setMedia", stream);
//       },
//       pause: function() {
//         $(this).jPlayer("clearMedia");
//       },
//       error: function(event) {
//         if(ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
//           // Setup the media stream again and play it.
//           $(this).jPlayer("setMedia", stream).jPlayer("play");
//         }
//       },
//       swfPath: "../dist/jplayer",
//       supplied: "mp3",
//       preload: "none",
//       wmode: "window",
//       useStateClassSkin: true,
//       autoBlur: false,
//       keyEnabled: true
//     });
//
//     console.log('ready');
// });
