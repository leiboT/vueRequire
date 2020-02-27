define(["ECheckboxButton"], function(ECheckboxButton) {
  "use strict";
  return {
    name: "sf-checkbox-button",
    functional: true,
    render: function(createElement, context) {
      return createElement(ECheckboxButton, context.data, context.children);
    }
  };
});
