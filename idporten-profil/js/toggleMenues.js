(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*
* To avoid double hamburger menu on pages with MinID menu,
* we have MinID menu elements in main menu too.
* The MinID elements are hidden by default (CSS settings)
* This script adds a class to make the elements visible on mobile sized screens,
* if and only if the pages contains a MinID menu.
* The MinID menu is then hidden.
*
* Result:
* For desktop the MinID menu choices are found in the MinID menu to the right of the page title.
* For mobile the MinID menu choices are found in the top menu (hamburger).
*/

var toggleMenues = function toggleMenues() {
  var $ = jQuery.noConflict();

  var $miMenu = $('#js-mi-menu');
  if ($miMenu.length === 0) {
    // Current page has no minID menu, nothing to toggle.
    return;
  }

  var isMobile = $('.h-Menu_Trigger-mobile').is(':visible');

  if (isMobile) {
    $('.mi-Menu_Trigger').addClass('mi-Menu_Trigger-disabled');
    $('.h-Menu-MinID').addClass('h-Menu-MinID-active');
  } else {
    $('.mi-Menu_Trigger').removeClass('mi-Menu_Trigger-disabled');
    $('.h-Menu-MinID').removeClass('h-Menu-MinID-active');
  }
};

toggleMenues();

jQuery(window).on('resize', function () {
  toggleMenues();
});

},{}]},{},[1]);
