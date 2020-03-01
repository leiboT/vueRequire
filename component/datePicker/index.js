define(["ELIndex"], function(ELIndex) {
  "use strict";
  return {
    name: "date-picker",
    functional: true,
    render: function(createElement, context) {
      return createElement(ELIndex.DatePicker, context.data, context.children);
    }
  };
});
