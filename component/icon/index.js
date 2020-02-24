define(["BIcon", "css!./component/icon/index.css"], function(BIcon) {
  "use strict";
  return {
    name: "sf-icon",
    functional: true,
    render: function(createElement, context) {
      return createElement(BIcon.BIcon, context.data, context.children);
    }
  };
});
