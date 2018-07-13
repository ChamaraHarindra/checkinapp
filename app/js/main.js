/* eslint-disable object-shorthand */

/* global Chart, CustomTooltips, getStyle, hexToRgba */
// Google map popover
$("[data-toggle=popover]").each(function (i, obj) {
  $(this).popover({
    html: true,
    content: function content() {
      var id = $(this).attr('id');
      return $('#popover-content-' + id).html();
    }
  });
});
$('.popover-dismiss').popover({
  trigger: 'focus'
});

// Selectbox to aweselect

$(document).ready(function () {
  $('.select').awselect({
    background: "#ffffff", //the dark blue background
    active_background: "#ffffff", // the light blue background
    placeholder_color: "#333333", // the light blue placeholder color
    placeholder_active_color: "#333333", // the dark blue placeholder color
    option_color: "#333333", // the option colors
    immersive: false // immersive option, demonstrated at the next example
  });
});


// Data table Initialization
$(document).ready( function () {
  $('.data-table').DataTable();
} );


// input masking
$(document).ready(function(){
  $('.date').mask("00/00/0000", {placeholder: "__/__/____"});
  $('.time').mask('00:00:00', {placeholder: "__:__:__"});
  $('.date_time').mask('00/00/0000 00:00:00', {placeholder: "__/__/____ __:__:__"});
  $('.phone').mask('000-000-0000', {placeholder: "(___) ___ ____"});
});


//# sourceMappingURL=main.js.map