(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var minidMenu = function minidMenu() {
  var $ = jQuery.noConflict();

  var $miMenu = $('#js-mi-menu');
  if ($miMenu.length === 0) {
    // Current page has no minID menu, no need to add event handlers
    return;
  }

  var $miMenuTrigger = $('.mi-Menu_Trigger');
  var $lastMenuElement = $miMenu.find('.js-last');

  $miMenuTrigger.on('click', function (e) {
    e.preventDefault();
    $miMenu.toggleClass('mi-Menu-open');
    if ($miMenu.hasClass('mi-Menu-open')) {
      $miMenuTrigger.attr('aria-expanded', 'true');
    } else {
      $miMenuTrigger.attr('aria-expanded', 'false');
    }
  });

  $miMenuTrigger.on('keydown', function (e) {
    if (e.keyCode === 9 && e.shiftKey) {
      // Shift+tab, go to last element in list if list open
      e.preventDefault();
      if ($miMenu.hasClass('mi-Menu-open')) {
        $lastMenuElement.focus();
      }
    }
  });

  $lastMenuElement.on('keydown', function (e) {
    if (e.keyCode === 9 && !e.shiftKey) {
      // Tab, go to menu trigger
      e.preventDefault();
      $miMenuTrigger.focus();
    }
  });

  $(document).on('click', function (event) {
    if (!document.getElementById('js-mi-menu').contains(event.target)) {
      $miMenuTrigger.attr('aria-expanded', 'false');
      $miMenu.removeClass('mi-Menu-open');
    }
  });
};

minidMenu();

},{}]},{},[1]);
