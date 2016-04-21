$(document).ready(function() {
  function setNowplaying() {
    try {
      $.getJSON('/nowplaying', function(data) {
        console.log('Updated nowplaying: %s', data.current_track);
        $('#nowplaying').html(data.current_track);
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
