define(["EUpload"], function(EUpload) {
  "use strict";
  return {
    name: "sf-upload",
    functional: true,
    render: function(createElement, context) {
      return createElement(EUpload, context.data, context.children);
    }
  };
});
