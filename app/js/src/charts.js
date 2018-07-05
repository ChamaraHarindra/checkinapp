/* eslint-disable object-curly-newline */
/* global Chart */
import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.0.0-rc.1): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
// random Numbers
const random = () => Math.round(Math.random() * 100)

$(function() {
  $('.chart').easyPieChart({
    easing: 'easeOutBounce',
    barColor: '#2ECC71',
    scaleColor:false,
    size: 60,
    lineWidth: 7,
    lineCap: 'butt',
    onStep: function(from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent));
    }
  });
});// eslint-disable-next-line no-unused-vars
