"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _materialKitReact = require("assets/jss/material-kit-react.jsx");

var badgeStyle = {
  badge: {
    marginRight: "3px",
    borderRadius: "12px",
    padding: "5px 12px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block"
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
    backgroundColor: "#6c757d"
  }
};
var _default = badgeStyle;
exports.default = _default;