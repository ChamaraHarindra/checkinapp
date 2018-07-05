/* eslint-disable object-shorthand */
/* global Chart, CustomTooltips, getStyle, hexToRgba */
import $ from 'jquery'



// Google map popover
$("[data-toggle=popover]").each(function(i, obj) {

  $(this).popover({
    html: true,
    content: function() {
      var id = $(this).attr('id')
      return $('#popover-content-' + id).html();
    }
  });
  });

  $('.popover-dismiss').popover({
    trigger: 'focus'
  })



