import React, { useState, useRef, useCallback } from 'react';

var styles = {"test":"_3ybTi","buttonContainer":"_tWHtY","shadowWave":"_35-LA","bismillahButton":"_3fhp3","buttonText":"_iZGq1","light":"_3gN_3","deepOceanFlow":"_1XIxk","rippling":"_1g-0t","dark":"_3QbTe","wave":"_AQ3Fh","oceanWave":"_20E4S","ripple":"_2hqqe","rippleEffect":"_3tI_s","gradientFlow":"_3rUPT","rotateGradient":"_1MVuN","pulseGradient":"_1i6et","waterFlow":"_3850X","waterGlow":"_3rtN8","shimmerEffect":"_2sZ8A"};

var BismillahBtn = function BismillahBtn(_ref) {
  var text = _ref.text,
    _ref$isDark = _ref.isDark,
    isDark = _ref$isDark === void 0 ? false : _ref$isDark,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '200px' : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? '50px' : _ref$height;
  var _useState = useState({
      x: 50,
      y: 50
    }),
    mousePosition = _useState[0],
    setMousePosition = _useState[1];
  var buttonRef = useRef(null);
  var rippleTimeoutRef = useRef(null);
  var handleMouseMove = useCallback(function (event) {
    var button = event.currentTarget;
    var rect = button.getBoundingClientRect();
    var x = (event.clientX - rect.left) / rect.width * 100;
    var y = (event.clientY - rect.top) / rect.height * 100;
    setMousePosition({
      x: x,
      y: y
    });
  }, []);
  var handleClick = useCallback(function (event) {
    var button = buttonRef.current;
    if (!button) return;
    var rect = button.getBoundingClientRect();
    var x = (event.clientX - rect.left) / rect.width * 100;
    var y = (event.clientY - rect.top) / rect.height * 100;
    button.style.setProperty('--ripple-x', x + "%");
    button.style.setProperty('--ripple-y', y + "%");
    button.classList.add(styles.rippling);
    if (rippleTimeoutRef.current) {
      clearTimeout(rippleTimeoutRef.current);
    }
    rippleTimeoutRef.current = setTimeout(function () {
      if (button) {
        button.classList.remove(styles.rippling);
      }
    }, 1000);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: styles.buttonContainer
  }, /*#__PURE__*/React.createElement("button", {
    ref: buttonRef,
    className: styles.bismillahButton + " " + (isDark ? styles.dark : styles.light),
    style: {
      width: width,
      height: height,
      '--mouse-x': mousePosition.x + "%",
      '--mouse-y': mousePosition.y + "%"
    },
    onClick: handleClick,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseMove
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.buttonText
  }, text), /*#__PURE__*/React.createElement("div", {
    className: styles.wave
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.wave
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.wave
  })));
};

export { BismillahBtn };
//# sourceMappingURL=index.modern.js.map
