// 异常处理模块
define("exceptionHandler", ["command"], function(command) {
  "use strict";
  return function(error, type) {
    // 上报
    // 前端提示
    if (!error) {
      return;
    }
    switch (type) {
      case 1: // ajax请求成功但业务状态码不正常
        command.ShowAlert(error.Message, {
          icon: 2,
          title: "请求成功但有异常"
        });
        break;
      case 2: // ajax请求失败
        command.ShowAlert(error.statusText, {
          icon: 2,
          title: "请求失败"
        });
        break;
      default:
        // 代码错误
        console.error(
          "sf.warn: " +
            "message: " +
            error.message +
            "; file：" +
            error.file +
            "; row：" +
            error.row +
            "; col：" +
            error.col
        );
        break;
    }
  };
});
