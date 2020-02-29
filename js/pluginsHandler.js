define("pluginsHandler", function() {
  "use strict";
  return function(plugins, callback) {
    var maybePluginsMap = {
      push: "push",
      moment: "moment",
      jquery: "jquery"
    };
    var result = {};
    if (Array.isArray(plugins) && plugins.length) {
      var correctPlugins = [];
      plugins.forEach(function(name) {
        var _name = maybePluginsMap[name.toLowerCase()];
        if (_name) {
          correctPlugins.push(_name);
        }
      });
      if (correctPlugins.length) {
        require(correctPlugins, function() {
          var mod = arguments;
          correctPlugins.forEach(function(name, index) {
            result[name] = mod[index];
          });
          callback(result);
        });
      } else {
        callback(result);
      }
    } else {
      callback(result);
    }
  };
});
