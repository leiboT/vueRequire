define([
  "AGGridVue",
  "css!../lib/ag-grid-enterprise/dist/styles/ag-grid.css",
  "css!../lib/ag-grid-enterprise/dist/styles/ag-theme-material.css"
], function(AGGridVue) {
  "use strict";
  return {
    name: "table",
    functional: true,
    render: function(createElement, context) {
      context.data.class = "ag-theme-material";
      return createElement(AGGridVue.AgGridVue, context.data, context.children);
    }
  };
});
