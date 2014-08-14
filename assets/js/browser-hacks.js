// Safari
$(document).ready(function() {
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    $(".facebook-share").css("padding", "12px 25.5px");
    $(".twitter-share").css("padding", "12px 35px");
    $(".facebook-share, .twitter-share, .email-field, .submit-button").addClass("no-smoothing");
  }
});