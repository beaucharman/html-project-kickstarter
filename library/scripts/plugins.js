/**
 * Plugins
 * ------------------------------------------------------------------------
 * plugins.js
 * @version 2.1 | April 27th 2013
 * @package HTML Project Kickstarter
 * @author  Beau Charman | @beaucharman | http://beaucharman.me
 * @link    https://github.com/beaucharman/HTML-Project-Kickstarter
 * @license MIT License
 *
 * Thank you http://html5boilerplate.com/
 * ------------------------------------------------------------------------ */

/* Remove the .js class from the html tag is javascript is enabled */
var documentClassName = document.documentElement.className;
documentClassName = documentClassName.replace(/\bno-js\b/g, '') + ' js ';

/* Avoid `console` errors in browsers that lack a console. [from boilerplate] */
(function() {
  'use strict';
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());