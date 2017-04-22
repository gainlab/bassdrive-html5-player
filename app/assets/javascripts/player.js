$(document).ready(function() {
  var stream          = document.getElementById('bassdrive-stream');
  var audioControls   = document.getElementById('audio-controls')
  var playButton      = document.getElementById('play-button');
  var buttonSetVol0   = document.getElementById('button-set-vol-0');
  var buttonSetVol25  = document.getElementById('button-set-vol-25');
  var buttonSetVol50  = document.getElementById('button-set-vol-50');
  var buttonSetVol75  = document.getElementById('button-set-vol-75');
  var buttonSetVol100 = document.getElementById('button-set-vol-100');

  function playAudio() {
    if (stream.paused) {
      stream.play();
      $(playButton).addClass('playing').removeClass('paused');
      playButton.innerHTML = 'Playing';
    } else {
      stream.pause();
      $(playButton).addClass('paused').removeClass('playing');
      playButton.innerHTML = 'Paused';
    }
  }

  function setVolume(volume) {
    stream.volume = volume;
    audioControls.className = "volume-" + volume*100;
  }

  function attachEvents() {
    playButton.addEventListener('click', playAudio);
    buttonSetVol0.addEventListener('click', function() { setVolume(0); });
    buttonSetVol25.addEventListener('click', function() { setVolume(0.25); });
    buttonSetVol50.addEventListener('click', function() { setVolume(0.5); });
    buttonSetVol75.addEventListener('click', function() { setVolume(0.75); });
    buttonSetVol100.addEventListener('click', function() { setVolume(1); });
  }

  attachEvents();
  setVolume(1);

  function setNowplaying() {
    // Polyfill
    console.log = console.log || function() {};

    try {
      $.getJSON('/nowplaying', function(data) {
        console.log('Updated nowplaying: %s', data.current_track);
        $('.js-playing-now').html(data.current_track);
      });
    }
    // in case the browser does not have a console available.
    catch (e) {
      console.log(e);
    }
  }

  setNowplaying();
  setInterval(setNowplaying, 60000);
});
