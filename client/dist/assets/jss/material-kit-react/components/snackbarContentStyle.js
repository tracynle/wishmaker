"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _materialKitReact = require("assets/jss/material-kit-react.jsx");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var snackbarContentStyle = {
  root: _objectSpread({}, _materialKitReact.defaultFont, {
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "0px",
    maxWidth: "100%",
    minWidth: "auto",
    boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  }),
  info: _objectSpread({
    backgroundColor: "#00d3ee",
    color: "#ffffff"
  }, _materialKitReact.infoBoxShadow),
  success: _objectSpread({
    backgroundColor: "#5cb860",
    color: "#ffffff"
  }, _materialKitReact.successBoxShadow),
  warning: _objectSpread({
    backgroundColor: "#ffa21a",
    color: "#ffffff"
  }, _materialKitReact.warningBoxShadow),
  danger: _objectSpread({
    backgroundColor: "#f55a4e",
    color: "#ffffff"
  }, _materialKitReact.dangerBoxShadow),
  primary: _objectSpread({
    backgroundColor: "#af2cc5",
    color: "#ffffff"
  }, _materialKitReact.primaryBoxShadow),
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: "14px",
    height: "14px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    position: "absolute",
    right: "-4px",
    top: "0",
    padding: "0"
  },
  icon: {
    display: "block",
    float: "left",
    marginRight: "1.071rem"
  },
  container: _objectSpread({}, _materialKitReact.container, {
    position: "relative"
  })
};
var _default = snackbarContentStyle;
exports.default = _default;