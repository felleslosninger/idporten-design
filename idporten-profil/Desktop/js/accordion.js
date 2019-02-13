(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var accordion = function accordion() {

  var $ = jQuery.noConflict();

  if ($('.js-initially-open').length > 0) {
    $('.js-initially-open').click();
  }

  $('.la-List_Element').on('click', function (e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    var $list = $(document.getElementById($target.attr('aria-controls')));
    // addAnimation class used to prevent animation on page load. Safe to add now:
    $target.find('.fa-angle-down').addClass('addAnimation');
    // There are two animations. They must run simultaneously:
    if ($list.hasClass('open')) {
      // about to close, aria attribute is updated and this triggers arrow animation
      $target.attr('aria-expanded', 'false');
    } else {
      // about to open, aria attribute is updated and this triggers arrow animation
      $target.attr('aria-expanded', 'true');
    }
    // List open / close with animation
    $list.slideToggle(300, function () {
      $list.toggleClass('open');
    });
  });

  $(document).ready(function () {
    if ($('.js-initially-open').length > 0) {
      $('.js-initially-open').click();
    }
  });
};

accordion();

},{}]},{},[1]);
