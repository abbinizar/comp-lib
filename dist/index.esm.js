import React from 'react';
import styled from 'styled-components';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var _templateObject$1;
var cyanBlue$1 = "#307FE2";
var TextStyle = styled.h1(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), cyanBlue$1);

var Text = function Text(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(TextStyle, null, text);
};

var _templateObject;
var cyanBlue = "#307FE2";
var Button = styled.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  height: 30px;\n  width: 100px;\n  border: unset;\n  color: #fff;\n  border-radius: 8px;\n  font-weight: 700;\n  cursor: pointer;\n"])), cyanBlue);

var ButtonPrimary = function ButtonPrimary(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/React.createElement(Button, null, label);
};

export { ButtonPrimary, Text };
