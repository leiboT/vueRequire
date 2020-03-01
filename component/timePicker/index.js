define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "time-picker",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.TimePicker, context.data, context.children);
    }
  };
});
