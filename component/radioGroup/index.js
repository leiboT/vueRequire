define(["ERadioGroup"], function(ERadioGroup) {
  "use strict";
  return {
    name: "sf-radio-group",
    functional: true,
    render: function(createElement, context) {
      return createElement(ERadioGroup, context.data, context.children);
    }
  };
});
