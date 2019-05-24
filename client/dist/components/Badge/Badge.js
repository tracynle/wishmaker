"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _badgeStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/badgeStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Badge(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes,
      color = props.color,
      children = props.children;
  return _react.default.createElement("span", {
    className: classes.badge + " " + classes[color]
  }, children);
}

Badge.defaultProps = {
  color: "gray"
};
Badge.propTypes = {
  classes: _propTypes.default.object.isRequired,
  color: _propTypes.default.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"])
};

var _default = (0, _withStyles.default)(_badgeStyle.default)(Badge);

exports.default = _default;