"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _cardHeaderStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/cardHeaderStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function CardHeader(_ref) {
  var _classNames;

  var props = _extends({}, _ref);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      color = props.color,
      plain = props.plain,
      rest = _objectWithoutProperties(props, ["classes", "className", "children", "color", "plain"]);

  var cardHeaderClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.cardHeader, true), _defineProperty(_classNames, classes[color + "CardHeader"], color), _defineProperty(_classNames, classes.cardHeaderPlain, plain), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return _react.default.createElement("div", _extends({
    className: cardHeaderClasses
  }, rest), children);
}

CardHeader.propTypes = {
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  color: _propTypes.default.oneOf(["warning", "success", "danger", "info", "primary"]),
  plain: _propTypes.default.bool
};

var _default = (0, _withStyles.default)(_cardHeaderStyle.default)(CardHeader);

exports.default = _default;