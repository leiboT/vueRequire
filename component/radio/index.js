define(["ERadio"], function(ERadio) {
  "use strict";
  return {
    name: "sf-radio",
    functional: true,
    render: function(createElement, context) {
      return createElement(ERadio, context.data, context.children);
    }
  };
});
