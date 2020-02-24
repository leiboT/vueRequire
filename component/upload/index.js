define(["BUpload", "css!./component/upload/index.css"], function(BUpload) {
    "use strict";
    return {
      name: "sf-upload",
      functional: true,
      render: function(createElement, context) {
        return createElement(BUpload.BUpload, context.data, context.children);
      }
    };
  });
  