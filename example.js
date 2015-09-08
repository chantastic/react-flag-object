require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFlagObject = require('react-flag-object');

var App = _react2['default'].createClass({
  displayName: 'App',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'section',
        null,
        _react2['default'].createElement(
          'h2',
          null,
          ' Defaults '
        ),
        _react2['default'].createElement(
          _reactFlagObject.Flag,
          null,
          _react2['default'].createElement(
            _reactFlagObject.Image,
            null,
            _react2['default'].createElement(_reactFlagObject.Img, { src: 'http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e', alt: 'chantastic' })
          ),
          _react2['default'].createElement(
            _reactFlagObject.Body,
            null,
            'I\'ve spent most of my career focused on taming styles in CSS. I saw it as a problem that would never be solved. Then, #reactjs happened. @chantastic 7 hours ago'
          )
        )
      ),
      _react2['default'].createElement(
        'section',
        null,
        _react2['default'].createElement(
          'h2',
          null,
          ' top '
        ),
        _react2['default'].createElement(
          _reactFlagObject.Flag,
          null,
          _react2['default'].createElement(
            _reactFlagObject.Image,
            { bottom: true },
            _react2['default'].createElement(_reactFlagObject.Img, { src: 'http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e', alt: 'chantastic' })
          ),
          _react2['default'].createElement(
            _reactFlagObject.Body,
            { top: true },
            'I\'ve spent most of my career focused on taming styles in CSS. I saw it as a problem that would never be solved. Then, #reactjs happened. @chantastic 7 hours ago'
          )
        )
      ),
      _react2['default'].createElement(
        'section',
        null,
        _react2['default'].createElement(
          'h2',
          null,
          ' bottom '
        ),
        _react2['default'].createElement(
          _reactFlagObject.Flag,
          null,
          _react2['default'].createElement(
            _reactFlagObject.Image,
            { bottom: true },
            _react2['default'].createElement(_reactFlagObject.Img, { src: 'http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e', alt: 'chantastic' })
          ),
          _react2['default'].createElement(
            _reactFlagObject.Body,
            { bottom: true },
            'I\'ve spent most of my career focused on taming styles in CSS. I saw it as a problem that would never be solved. Then, #reactjs happened. @chantastic 7 hours ago'
          )
        )
      ),
      _react2['default'].createElement(
        'section',
        null,
        _react2['default'].createElement(
          'h2',
          null,
          ' reverse '
        ),
        _react2['default'].createElement(
          _reactFlagObject.Flag,
          null,
          _react2['default'].createElement(
            _reactFlagObject.Body,
            null,
            'I\'ve spent most of my career focused on taming styles in CSS. I saw it as a problem that would never be solved. Then, #reactjs happened. @chantastic 7 hours ago'
          ),
          _react2['default'].createElement(
            _reactFlagObject.Image,
            { reverse: true },
            _react2['default'].createElement(_reactFlagObject.Img, { src: 'http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e', alt: 'chantastic' })
          )
        )
      )
    );
  }
});

_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-flag-object":undefined}]},{},[1]);
