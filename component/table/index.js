define([
  "AGGridVue",
  "css!../lib/ag-grid-enterprise/styles/ag-grid.min.css",
  "css!../lib/ag-grid-enterprise/styles/ag-theme-balham.min.css"
], function(AGGridVue) {
  "use strict";
  return {
    name: "table",
    functional: true,
    render: function(createElement, context) {
      context.data.class = "ag-theme-balham";
      return createElement(AGGridVue.AgGridVue, context.data, context.children);
    }
  };
});
