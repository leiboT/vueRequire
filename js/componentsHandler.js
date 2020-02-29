define("componentsHandler", function() {
  "use strict";
  return function(ops, callback) {
    var prefix = "sf-";
    require(ops.components, function() {
      var componentList = arguments;
      var _components = {};
      for (var i = 0; i < componentList.length; i++) {
        var record = componentList[i];
        record.name = prefix + record.name;
        _components[record.name] = record;
      }
      callback(_components);
    });
  };
});
