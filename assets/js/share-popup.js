$(document).ready(function() {
  $('.share-popup').click(function(event) {
    var width  = 575,
    height = 400,
    left   = ($(window).width()  - width)  / 2,
    top    = ($(window).height() - height) / 2,
    url    = this.href,
    opts   = 'status=1' +
             ',width='  + width  +
             ',height=' + height +
             ',top='    + top    +
             ',left='   + left;

    window.open(url, 'World Pet Day 2014', opts); 

    return false;
  });
});