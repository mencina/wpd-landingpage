// Safari
$(document).ready(function() {
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    $(".facebook-share").css("padding", "12px 28px");
    $(".twitter-share").css("padding", "12px 37px");
    $(".facebook-share, .twitter-share, .email-field, .submit-button").addClass("no-smoothing");
  }
});