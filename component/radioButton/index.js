define(["ERadioButton"], function(ERadioButton) {
  "use strict";
  return {
    name: "sf-radio-button",
    functional: true,
    render: function(createElement, context) {
      return createElement(ERadioButton, context.data, context.children);
    }
  };
});
