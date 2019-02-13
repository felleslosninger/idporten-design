(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchList = function () {
  function SearchList() {
    _classCallCheck(this, SearchList);

    var $ = jQuery.noConflict();

    this.inputField = $('#js-country').find('input[type=text]');
    this.countrycode = $('#js-country').find('input[type=hidden]');
    this.inputList = $('#js-country-list');
    this.trigger = $('#js-trigger');
    this.errorHandler = $('#js-country');
    this.listElements = this.inputList.find('li');
    this.current = 0;
  }

  _createClass(SearchList, [{
    key: 'addEvents',
    value: function addEvents() {

      var $ = jQuery.noConflict();
      var self = this;

      $('form').submit(function (e) {
        if (self.countrycode.val().length === 0) {
          e.preventDefault();
          self.checkInput(self.inputField.val());
        }
      });

      self.inputField.on('keydown', function (e) {
        self.errorHandler.removeClass('error');
        if (e.keyCode === 9) {
          return true;
        }
        if (!self.inputList.hasClass('open')) {
          self.openMenu();
        }
      });

      self.inputField.on('keyup click input', function (e) {

        if (e.keyCode === 27) {
          // Escape, close inputList if open
          e.preventDefault();
          if (self.inputList.hasClass('open')) {
            self.closeMenu();
          }
          return true;
        } else if (e.keyCode === 38) {
          // Up arrow, go to last element in list if list open
          e.preventDefault();
          if (self.inputList.hasClass('open')) {
            $.each(self.listElements, function (j) {
              if ($(this).is(':visible')) {
                $(this).find('> a').focus();
                self.current = j;
              }
            });
          }
          return true;
        } else if (e.keyCode === 40) {
          // Down arrow, go to first element in list if list open
          e.preventDefault();
          if (self.inputList.hasClass('open')) {
            var found = false;
            $.each(self.listElements, function (i) {
              if ($(this).is(':visible') && !found) {
                $(this).find('> a').focus();
                found = true;
                self.current = i;
              }
            });
          }
          return true;
        }
        if (this.value.length > 0) {
          self.listElements.filter(function () {
            var listElm = $(this).find('a').html().toLowerCase();
            var typedText = self.inputField.val().toLowerCase();
            if (listElm.indexOf(typedText) === 0) {
              $(this).show();
              return true;
            } else {
              $(this).hide();
              return false;
            }
          });
        } else {
          self.listElements.show();
        }
      });

      self.trigger.on('click', function (e) {
        e.preventDefault();
        if (!self.inputList.hasClass('open')) {
          self.openMenu();
        } else {
          self.closeMenu();
        }
      });

      self.inputList.find('a').on('click', function (e) {
        e.preventDefault();
        self.inputField.val($(this).html());
        self.countrycode.val($(this).attr('data-id'));
        self.closeMenu();
      });

      self.inputList.find('a').on('keydown', function (e) {
        if (e.keyCode === 38) {
          e.preventDefault();
          var newCurrent = -1;
          var toFocus = null;
          $.each(self.listElements, function (i) {
            if ($(this).is(':visible') && i < self.current) {
              newCurrent = i;
              toFocus = $(this);
            }
          });
          if (newCurrent === -1) {
            $.each(self.listElements, function (j) {
              if ($(this).is(':visible')) {
                $(this).find('> a').focus();
                self.current = j;
              }
            });
          } else {
            if (toFocus !== null) {
              toFocus.find('> a').focus();
              self.current = newCurrent;
            }
          }
        } else if (e.keyCode === 40) {
          e.preventDefault();
          var _newCurrent = -1;
          var _toFocus = null;
          var found = false;
          $.each(self.listElements, function (i) {
            if ($(this).is(':visible') && i > self.current && !found) {
              _newCurrent = i;
              _toFocus = $(this);
              found = true;
            }
          });
          if (_newCurrent === -1) {
            // start from top
            self.current = 0;
            found = false;
            $.each(self.listElements, function (i) {
              if ($(this).is(':visible') && !found) {
                $(this).find('> a').focus();
                found = true;
                self.current = i;
              }
            });
          } else {
            _toFocus.find('> a').focus();
            self.current = _newCurrent;
          }
        } else if (e.keyCode === 9) {
          e.preventDefault();
          self.inputField.val($(this).html());
          self.closeMenu();
          $('.button-holder').find('> .submit').focus();
        }
      });

      $(document).on('click', function (e) {
        if (!document.getElementById('js-country').contains(e.target) && !document.getElementById('js-country-list').contains(e.target)) {
          self.closeMenu();
        }
      });

      $("form").submit(function (e) {
        if (self.countrycode.val().length === 0) {
          e.preventDefault();
          self.checkInput(self.inputField.val());
        }
      });
    }
  }, {
    key: 'openMenu',
    value: function openMenu() {
      var $ = jQuery.noConflict();

      this.updateAria(true);
      this.inputList.slideDown(200, function () {
        $(this).addClass('open');
      });
    }
  }, {
    key: 'closeMenu',
    value: function closeMenu() {
      var $ = jQuery.noConflict();

      this.updateAria(false);
      this.inputList.slideUp(200, function () {
        $(this).removeClass('open');
      });
    }
  }, {
    key: 'checkInput',
    value: function checkInput(name) {
      var $ = jQuery.noConflict();
      var self = this;
      var countryId = null;
      $.each(self.listElements, function (i) {
        if (countryId === null) {
          var countryElm = $(this).find('> a');
          if (countryElm.html().toLowerCase() === name.trim().toLowerCase()) {
            countryId = countryElm.attr('data-id');
            self.countrycode.val(countryId);
            return true;
          }
        }
      });
      if (countryId === null) {
        this.errorHandler.addClass('error');
      }
    }
  }, {
    key: 'updateAria',
    value: function updateAria(state) {
      this.inputField.attr('aria-expanded', state);
      this.trigger.attr('aria-expanded', state);
    }
  }]);

  return SearchList;
}();

;

var countrySelector = function countrySelector() {

  var $ = jQuery.noConflict();

  if ($('#js-country-list').length > 0) {
    var searchCtrl = new SearchList();
    searchCtrl.addEvents();
  }
};

countrySelector();

},{}]},{},[1]);
