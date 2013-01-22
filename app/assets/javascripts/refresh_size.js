$(document).ready(function() {
  var map = $('#map');
  var sidebar = $('.sidebar');
  var nav = $('.nav');
  var footer = $('.footer').outerHeight(true);
  var header_height = $('#header').outerHeight(true);
  var sidebar_padding = sidebar.outerHeight(true) - sidebar.height();

  var refreshSize = function() {
    var height = $(window).height() - header_height - sidebar_padding;
    sidebar.css('height', height);
    nav.css('height', height - footer);

    height = $(window).height() - header_height
    map.css('height', height);
  };

  refreshSize()
  $(window).resize(function() {
    refreshSize();
  });
});