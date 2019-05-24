"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _materialKitReact = require("assets/jss/material-kit-react.jsx");

var customLinearProgressStyle = {
  root: {
    height: "4px",
    marginBottom: "20px",
    overflow: "hidden"
  },
  bar: {
    height: "4px"
  },
  primary: {
    backgroundColor: _materialKitReact.primaryColor
  },
  warning: {
    backgroundColor: _materialKitReact.warningColor
  },
  danger: {
    backgroundColor: _materialKitReact.dangerColor
  },
  success: {
    backgroundColor: _materialKitReact.successColor
  },
  info: {
    backgroundColor: _materialKitReact.infoColor
  },
  rose: {
    backgroundColor: _materialKitReact.roseColor
  },
  gray: {
    backgroundColor: _materialKitReact.grayColor
  },
  primaryBackground: {
    background: "rgba(156, 39, 176, 0.2)"
  },
  warningBackground: {
    background: "rgba(255, 152, 0, 0.2)"
  },
  dangerBackground: {
    background: "rgba(244, 67, 54, 0.2)"
  },
  successBackground: {
    background: "rgba(76, 175, 80, 0.2)"
  },
  infoBackground: {
    background: "rgba(0, 188, 212, 0.2)"
  },
  roseBackground: {
    background: "rgba(233, 30, 99, 0.2)"
  },
  grayBackground: {
    background: "rgba(221, 221, 221, 0.2)"
  }
};
var _default = customLinearProgressStyle;
exports.default = _default;