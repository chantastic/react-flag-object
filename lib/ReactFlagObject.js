'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FlagJs = require('./Flag.js');

var _FlagJs2 = _interopRequireDefault(_FlagJs);

var _BodyJs = require('./Body.js');

var _BodyJs2 = _interopRequireDefault(_BodyJs);

var _ImageJs = require('./Image.js');

var _ImageJs2 = _interopRequireDefault(_ImageJs);

var _ImgJs = require('./Img.js');

var _ImgJs2 = _interopRequireDefault(_ImgJs);

// TODO (with React 0.14.x):
// * use content to push `reverse` prop to Flag
// * use content to push `bottom` prop to Flag
// * use content to push `top` prop to Flag

exports['default'] = { Flag: _FlagJs2['default'], Body: _BodyJs2['default'], Image: _ImageJs2['default'], Img: _ImgJs2['default'] };
module.exports = exports['default'];