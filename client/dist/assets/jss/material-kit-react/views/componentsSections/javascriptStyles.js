"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _materialKitReact = require("assets/jss/material-kit-react.jsx");

var _modalStyle = _interopRequireDefault(require("assets/jss/material-kit-react/modalStyle.jsx"));

var _tooltipsStyle = _interopRequireDefault(require("assets/jss/material-kit-react/tooltipsStyle.jsx"));

var _popoverStyles = _interopRequireDefault(require("assets/jss/material-kit-react/popoverStyles.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var javascriptStyles = _objectSpread({
  section: {
    padding: "70px 0 0"
  },
  container: _materialKitReact.container,
  title: _objectSpread({}, _materialKitReact.title, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  icon: {
    width: "17px",
    height: "17px",
    marginRight: "4px"
  }
}, _modalStyle.default, {
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0"
  }
}, _tooltipsStyle.default, _popoverStyles.default);

var _default = javascriptStyles;
exports.default = _default;