// Ajax请求模块
define("request", [
  "jquery",
  "command",
  "exceptionHandler",
  "config",
  "utlis"
], function($, command, exceptionHandler, config, utlis) {
  "use strict";
  return {
    /**
     * ajax请求 支持链式回调
     * @param {any} ops
     */
    Request: function(ops) {
      var loadingIndex = -1;
      // 是否禁用响应错误处理
      var disableResponseErrorHandler = ops.disableResponseErrorHandler;
      // 是否开启成功提示
      var enableSuccessTip = ops.enableSuccessTip;
      // 是否禁用请求loading
      var disableLoading = ops.disableLoading;
      var oriSuccess = ops.success;
      var oriError = ops.error;
      var oriSuccessIsFunction = utlis.IsFunction(oriSuccess);
      var oriErrorIsFunction = utlis.IsFunction(oriError);
      var canRewriteConfig = {
        timeout: 60000,
        contentType: "application/json"
      };
      var Deferred = $.Deferred();
      var forbidConfig = {
        beforeSend: function(xhr, request) {
          var oriRequestUrl = request.url;
          request.url =
            /^http/.test(oriRequestUrl) || !config.baseURL
              ? oriRequestUrl
              : config.baseURL + oriRequestUrl;
          var token = utlis.GetUUID();
          if (token) {
            xhr.setRequestHeader("token", token);
          }
          if (disableLoading) {
            return;
          }
          // 关闭上一个loading 再开启loading
          if (loadingIndex != -1) {
            command.Closeload(loadingIndex);
          }
          loadingIndex = command.Beginload(2);
        },
        success: function(res) {
          if (!disableLoading && loadingIndex != -1) {
            command.Closeload(loadingIndex);
            loadingIndex = -1;
          }
          if (res.StatusCode === 401) {
            // 认证授权失败
            // 清空web对于UUID的缓存
            utlis.RemoveUUID();
            // 跳转登录页
            window.location.href = "/SysUserLogin";
          } else {
            if (res.IsSucceed) {
              // 开启成功提示
              if (enableSuccessTip) {
                command.ShowMessage(res.Message || "操作成功", {
                  icon: 1
                });
              }
              oriSuccessIsFunction && oriSuccess(res);
              Deferred.resolve(res);
            } else {
              // 错误处理
              if (!disableResponseErrorHandler) {
                exceptionHandler(res, 1);
              }
              oriErrorIsFunction && oriError(res);
              Deferred.reject(res);
            }
          }
        },
        error: function(err) {
          if (!disableLoading && loadingIndex != -1) {
            command.Closeload(loadingIndex);
            loadingIndex = -1;
          }
          if (!disableResponseErrorHandler) {
            exceptionHandler(err, 2);
          }
          // 错误信息全返回
          oriErrorIsFunction && oriError(err);
          Deferred.reject(err);
        }
      };
      var finalConfig = $.extend(canRewriteConfig, ops, forbidConfig);
      $.ajax(finalConfig);
      return Deferred.promise();
    },
    /**
     * ajax请求 默认get 支持链式回调
     * @param {any} ops
     */
    RequestGet: function(ops) {
      return this.Request(
        $.extend(ops, {
          type: "get"
        })
      );
    },
    /**
     * ajax请求 默认post 支持链式回调
     * @param {any} ops
     */
    RequestPost: function(ops) {
      var obj = {
        type: "post",
        data: "{}"
      };
      if (ops) {
        obj.data =
          typeof ops.data == "object" ? JSON.stringify(ops.data) : ops.data;
      }
      return this.Request($.extend(ops, obj));
    },
    /**
     * 加载数据
     * @param {any} url
     * @param {any} data
     * @param {any} SuccessFun
     */
    LoadData: function(url, data, SuccessFun, ops) {
      //by ggw 20200216 增加禁用加载中图标
      var disableLoading = false;
      if (ops != undefined && ops != null) {
        if (ops.disableLoading != undefined) {
          disableLoading = ops.disableLoading;
        }
      }

      this.Request({
        disableLoading: disableLoading,
        type: "post",
        contentType: "application/json",
        url: url,
        data: data,
        success: function(res) {
          if (res.IsSucceed) {
            SuccessFun(res);
          } else {
            command.ShowAlert(res.Message);
          }
        },
        error: function(err) {
          command.ShowAlert(JSON.stringify(err));
        }
      });
    }
  };
});
