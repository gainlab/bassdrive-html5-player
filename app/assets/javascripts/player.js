$(document).ready(function() {
  function setNowplaying() {
    $.getJSON('/nowplaying', function(data) {
      $('#nowplaying').html(data.current_track);
    })

    setInterval(setNowplaying, 5000);
  }

  setNowplaying();
});
