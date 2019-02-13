(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/* Used on kontaktinfomodul-1F where there are two forms, one enabled and one disabled.
* When user has filled out first form and presses the button, next form is enabled
* and current disabled.
* Step indicator is updated
*/

var toggleForm = function toggleForm() {
  var $ = jQuery.noConflict();

  var $formToggler = $('.js-toggleForm');
  var progressDots = $('.fm-Progress_Dot');
  var $secondForm = $('.dpb-Custom');

  $formToggler.on('click', function (e) {
    console.log("trykker på knappen");
    e.preventDefault();
    // Enable next form:
    $secondForm.removeClass('disabled');
    $secondForm.find('a').attr('tabindex', '0');
    $secondForm.find('button').attr('tabindex', '0');

    // Disalbe current form:
    $formToggler.closest('form').addClass('disabled');
    $formToggler.attr('tabindex', '-1');
    $('.with-icon').find('a').attr('tabindex', '-1');

    // Advance progress
    $(progressDots[0]).removeClass('active');
    $(progressDots[1]).addClass('active');
  });
};

toggleForm();

},{}]},{},[1]);
