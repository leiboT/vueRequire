"use strict";
requirejs.config({
  baseURL: "/js",
  // 模块路径配置
  paths: {
    vue: "./lib/vue/vue.min",
    vueI18n: "./lib/vue-i18n/vue-i18n.min",
    axios: "./lib/axios/axios.min",
    jquery: "./lib/jquery/jquery.min",
    moment: "./lib/moment/moment.min",
    layer: "./lib/layer/layer",
    mousetrap: "./lib/mousetrap/mousetrap.min",
    push: "./lib/push/push.min",
    sortablejs: "./lib/sortable/sortable.min",
    EZhCNLang: "./lib/element-ui/locale/zh-CN",
    EEnLang: "./lib/element-ui/locale/en",
    ELIndex: "./lib/element-ui/index",
    GirdLayout: "./lib/vue-grid-layout/vue-grid-layout.umd.min",
    Draggable: "./lib/vuedraggable/vuedraggable.umd.min",
    agGrid: "./lib/ag-grid-enterprise/dist/ag-grid-enterprise.min.noStyle",
    AGGridVue: "./lib/ag-grid-vue/ag-grid-vue.umd.min",
    AGGridVueLocale: "./lib/ag-grid-vue/locale",
    // 后续优化：为进一步减少组件体积 基于elementUI已构建完成的组件js（已重新打包但组件间还是有公共代码）编写的组件 后续全部替换为其Vue单文件实现
    "sf-button": "./component/button/index",
    "sf-input": "./component/input/index",
    "sf-icon": "./component/icon/index",
    "sf-title-content": "./component/titleContent/index",
    "sf-label-value": "./component/labelValue/index",
    "sf-switch": "./component/switch/index",
    "sf-upload": "./component/upload/index",
    "sf-theme": "./component/theme/index",
    "sf-grid-layout": "./component/gridLayout/index",
    "sf-dnd": "./component/dnd/index",
    "sf-row": "./component/row/index",
    "sf-col": "./component/col/index",
    "sf-radio": "./component/radio/index",
    "sf-radio-button": "./component/radioButton/index",
    "sf-radio-group": "./component/radioGroup/index",
    "sf-checkbox": "./component/checkbox/index",
    "sf-checkbox-button": "./component/checkboxButton/index",
    "sf-checkbox-group": "./component/checkboxGroup/index",
    "sf-input-number": "./component/inputNumber/index",
    "sf-select": "./component/select/index",
    "sf-option": "./component/option/index",
    "sf-option-group": "./component/optionGroup/index",
    "sf-cascader": "./component/cascader/index",
    "sf-drawer": "./component/drawer/index",
    "sf-table": "./component/table/index"
  },
  shim: {
    layer: {
      deps: ["css!./lib/layer/theme/default/layer.css"]
    }
  }
});

(function () {
  function SF() {
    var _sf = this;
    /**
     * 前端存储
     */
    function _browserStorage() {
      var uuidKey = "uuid";
      var self = this;
      // 本地存储--Cookie
      this.Cookie = {
        /**
         * set Cookie
         * @param {any} name
         * @param {any} value
         * @param {any} time 分钟
         */
        set: function (name, value, time) {
          time = time || 0;
          var cookie = [name + "=" + encodeURIComponent(value), "path=/"];
          if (time !== 0) {
            var exp = new Date();
            exp.setTime(exp.getTime() + time * 60 * 1000);
            cookie.push("expires=" + exp.toGMTString());
          }
          document.cookie = cookie.join(";");
        },
        /**
         * get Cookie
         * @param {any} name
         */
        get: function (name) {
          var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"),
            arr = document.cookie.match(reg);
          if (arr) return decodeURIComponent(arr[2]);
          else return null;
        },
        /**
         * remove Cookie
         * @param {any} name
         */
        remove: function (name) {
          this.set(name, "", -1);
        },
        /**
         * removeAll Cookie
         */
        removeAll: function () {
          var self = this;
          document.cookie.match(/[^ =;]+(?=\=)/g).forEach(function (key) {
            self.remove(key);
          });
        }
      };
      // 本地存储--LocalStorage
      this.LocalStorage = {
        /**
         * set LocalStorage
         * @param {any} key
         * @param {any} value
         */
        set: function (key, value) {
          window.localStorage.setItem(key, value);
        },
        /**
         * get LocalStorage
         * @param {any} key
         */
        get: function (key) {
          return window.localStorage.getItem(key);
        },
        /**
         * remove LocalStorage
         * @param {any} key
         */
        remove: function (key) {
          window.localStorage.removeItem(key);
        },
        /**
         * removeAll LocalStorage
         */
        removeAll: function () {
          window.localStorage.clear();
        }
      };
      // 本地存储--SessionStorage
      this.SessionStorage = {
        /**
         * set SessionStorage
         * @param {any} key
         * @param {any} value
         */
        set: function (key, value) {
          window.sessionStorage.setItem(key, value);
        },
        /**
         * get SessionStorage
         * @param {any} key
         */
        get: function (key) {
          return window.sessionStorage.getItem(key);
        },
        /**
         * remove SessionStorage
         * @param {any} key
         */
        remove: function (key) {
          window.sessionStorage.removeItem(key);
        },
        /**
         * removeAll SessionStorage
         */
        removeAll: function () {
          window.sessionStorage.clear();
        }
      };
      // UUID相关
      this.UUID = {
        get: function () {
          return self.LocalStorage.get(uuidKey);
        },
        set: function (uuid) {
          self.LocalStorage.set(uuidKey, uuid);
        },
        remove: function () {
          self.LocalStorage.remove(uuidKey);
        }
      };
    }

    /**
     * 定时器
     */
    function _timer() {
      /**
       * 一次性定时器
       * @param {any} callback 回调
       * @param {any} timeout 间隔时间
       */
      this.SetTimeout = function (callback, timeout) {
        window.setTimeout(callback, timeout);
      };
      /**
       * 周期性定时器
       * @param {any} callback 回调
       * @param {any} timeout 间隔时间
       */
      this.SetInterval = function (callback, timeout) {
        window.setInterval(callback, timeout);
      };
    }

    /**
     * 序列化|反序列化
     */
    function _serialize() {
      /**
       * 序列化
       * @param {Object} obj
       * @returns String
       */
      this.Serialize = function (obj) {
        return JSON.stringify(obj);
      };
      /**
       * 反序列化
       * @param {String} str
       * @returns Object
       */
      this.DeSerialize = function (str) {
        return JSON.parse(str);
      };
    }

    /**
     * 类型判断
     */
    function _typeJudge() {
      /**
       * 是否为Function类型
       * @param {any} v
       * @returns Boolean
       */
      this.IsFunction = function (v) {
        return Object.prototype.toString.call(v) === "[object Function]";
      };
      /**
       * 是否为Object类型
       * @param {any} v
       * @returns Boolean
       */
      this.IsObject = function (v) {
        return Object.prototype.toString.call(v) === "[object Object]";
      };
      /**
       * 是否为String类型
       * @param {any} v
       * @returns Boolean
       */
      this.IsString = function (v) {
        return Object.prototype.toString.call(v) === "[object String]";
      };
      /**
       * 是否为Array类型
       * @param {any} v
       * @returns Boolean
       */
      this.IsArray = function (v) {
        return Array.isArray(v);
      };
      /**
       * 是否为空 null undefined
       * @param {any} v
       */
      this.IsEmpty = function (v) {
        if (v === null || v === undefined) {
          return true;
        }
        return false;
      };
    }

    /**
     * iframe相关
     */
    function _iframe() {
      var self = this;
      /**
       * 获取iframe
       * @param {any} id
       * @return {any} iframeWindow
       */
      this.GetIframeWindowById = function (id) {
        var iframe;
        if (document.all) {
          // ie
          iframe = window.top.document.frames[id];
          return iframe.window;
        } else {
          iframe = window.top.document.getElementById(id);
          return iframe.contentWindow;
        }
      };

      /**
       * 返回当前iframe的Id
       */
      this.GetSelfIframeWindowId = function () {
        if (window != undefined) {
          return window.frameElement.id;
        }
        return "";
      };

      /**
       * 返回打开TabPage的来源Iframe Window
       */
      this.GetSrcWindowOnTab = function () {
        var srcWinId = self.GetUrlParam("srcwinid");
        if (!self.IsEmpty(srcWinId)) {
          return self.GetIframeWindowById(srcWinId);
        }
        return null;
      };
    }

    /**
     * 页面页签
     */
    function _pageTabs() {
      var self = this;
      /**
       * 新增tab页签
       * @param {any} tabId  自定义唯一tabid
       * @param {any} href    相对URL地址
       * @param {any} title    页面标题
       */
      this.AddTab = function (tabId, href, title) {
        if (!self.IsEmpty(href)) {
          //追加来源windowid，便于回调方法使用
          var srcWinId = self.GetUrlParam("srcwinid");
          if (self.IsEmpty(srcWinId)) {
            srcWinId = self.GetSelfIframeWindowId();
            if (href.indexOf("?") > -1) {
              href = href + "&srcwinid=" + srcWinId;
            } else {
              href = href + "?srcwinid=" + srcWinId;
            }
          }
        }
        window.top.layui &&
          window.top.layui.sf &&
          window.top.layui.sf.tabAdd(tabId, href, title);
        self.ChangeTab(tabId);
      };

      /**
       * 删除tab页签
       * @param {any} tabId
       */
      this.DeleteTab = function (tabId) {
        window.top.layui &&
          window.top.layui.sf &&
          window.top.layui.sf.tabDelete(tabId);
      };

      /**
       * 关闭当前页签
       * @param {any} tabId
       */
      this.CloseSelfTab = function (tabId) {
        var winId = self.GetSelfIframeWindowId();
        if (!self.IsEmpty(winId)) {
          self.DeleteTab(winId);
          tabId && self.ChangeTab(tabId);
        }
      };

      /**
       * 切换tab页签
       * @param {any} tabId
       */
      this.ChangeTab = function (tabId) {
        window.top.layui &&
          window.top.layui.sf &&
          window.top.layui.sf.tabChange(tabId);
      };
    }

    /**
     * 工具函数
     */
    function _tools() {
      var self = this;
      /**
       * 数量以及金额的格式化
       * @param {*} s 数字
       * @param {*} n 精度
       * @returns
       */
      this.FormatMoney = function (s, n) {
        if (s) {
          n = n >= 0 && n <= 20 ? n : 2;
          s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
          let l = s
            .split(".")[0]
            .split("")
            .reverse();
          let r = s.split(".")[1];
          let t = "";
          for (let i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 === 0 && i + 1 !== l.length ? "," : "");
          }
          if (r !== undefined) {
            return (
              t
                .split("")
                .reverse()
                .join("") +
              "." +
              r
            );
          }
          return t
            .split("")
            .reverse()
            .join("");
        } else {
          return "";
        }
      };

      /**
       * Guid
       */
      this.GetGuid = function () {
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
          var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        });
      };

      /**
       * 系统时间
       */
      this.GetSystemDate = function () {
        return new Date();
      };

      /**
       * 获取URL中的参数
       * @param {any} objParam
       */
      this.GetUrlParam = function (objParam) {
        var reg = new RegExp("(^|&)" + objParam + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
      };
    }

    /**
     * ajax请求
     */
    function _request($, layer) {
      var self = this;
      // 配置文件所在路径
      var configJsonUrl = "/js/sf.config.json";
      // ajax请求baseURL
      var baseURL;
      // 获取前端配置文件信息
      $.ajax({
        url: configJsonUrl,
        async: false,
        success: function (res) {
          baseURL = res.baseURL;
        }
      });
      /**
       * ajax请求 支持链式回调
       * @param {any} ops
       */
      this.Request = function (ops) {
        var loadingIndex = -1;
        // 是否禁用响应错误处理
        var disableResponseErrorHandler = ops.disableResponseErrorHandler;
        // 是否开启成功提示
        var enableSuccessTip = ops.enableSuccessTip;
        // 是否禁用请求loading
        var disableLoading = ops.disableLoading;
        var oriSuccess = ops.success;
        var oriError = ops.error;
        var oriSuccessIsFunction = $.isFunction(oriSuccess);
        var oriErrorIsFunction = $.isFunction(oriError);
        var canRewriteConfig = {
          timeout: 60000,
          contentType: "application/json"
        };
        var Deferred = $.Deferred();
        var forbidConfig = {
          beforeSend: function (xhr, request) {
            var oriRequestUrl = request.url;
            request.url =
              /^http/.test(oriRequestUrl) || !baseURL
                ? oriRequestUrl
                : baseURL + oriRequestUrl;
            var token = self.UUID.get();
            if (token) {
              xhr.setRequestHeader("token", token);
            }
            if (disableLoading) {
              return;
            }
            // 关闭上一个loading 再开启loading
            if (loadingIndex != -1) {
              layer.close(loadingIndex);
            }
            loadingIndex = layer.load(2);
          },
          success: function (res) {
            if (!disableLoading && loadingIndex != -1) {
              layer.close(loadingIndex);
              loadingIndex = -1;
            }
            if (res.StatusCode === 401) {
              // 认证授权失败
              // 清空web对于UUID的缓存
              self.UUID.remove();
              // 跳转登录页
              window.location.href = "/SysUserLogin";
            } else {
              if (res.IsSucceed) {
                // 开启成功提示
                if (enableSuccessTip) {
                  self.ShowMessage(res.Message || "操作成功", {
                    icon: 1
                  });
                }
                oriSuccessIsFunction && oriSuccess(res);
                Deferred.resolve(res);
              } else {
                // 错误处理
                if (!disableResponseErrorHandler) {
                  _sf.exceptionHandler(res, 1);
                }
                oriErrorIsFunction && oriError(res);
                Deferred.reject(res);
              }
            }
          },
          error: function (err) {
            if (!disableLoading && loadingIndex != -1) {
              layer.close(loadingIndex);
              loadingIndex = -1;
            }
            if (!disableResponseErrorHandler) {
              _sf.exceptionHandler(err, 2);
            }
            // 错误信息全返回
            oriErrorIsFunction && oriError(err);
            Deferred.reject(err);
          }
        };
        var finalConfig = $.extend(canRewriteConfig, ops, forbidConfig);
        $.ajax(finalConfig);
        return Deferred.promise();
      };

      /**
       * ajax请求 默认get 支持链式回调
       * @param {any} ops
       */
      this.RequestGet = function (ops) {
        return self.Request(
          $.extend(ops, {
            type: "get"
          })
        );
      };

      /**
       * ajax请求 默认post 支持链式回调
       * @param {any} ops
       */
      this.RequestPost = function (ops) {
        var obj = {
          type: "post",
          data: "{}"
        };
        if (ops) {
          obj.data =
            typeof ops.data == "object" ? JSON.stringify(ops.data) : ops.data;
        }
        return self.Request($.extend(ops, obj));
      };

      /**
       * 加载数据
       * @param {any} url
       * @param {any} data
       * @param {any} SuccessFun
       */
      this.LoadData = function (url, data, SuccessFun, ops) {
        //by ggw 20200216 增加禁用加载中图标
        var disableLoading = false;
        if (ops != undefined && ops != null) {
          if (ops.disableLoading != undefined) {
            disableLoading = ops.disableLoading;
          }
        }

        self.Request({
          disableLoading: disableLoading,
          type: "post",
          contentType: "application/json",
          url: url,
          data: data,
          success: function (res) {
            if (res.IsSucceed) {
              SuccessFun(res);
            } else {
              self.ShowAlert(res.Message);
            }
          },
          error: function (err) {
            self.ShowAlert(JSON.stringify(err));
          }
        });
      };
    }

    /**
     * 日期时间
     */
    function _moment(moment) {
      this.Moment = {
        /**
         * 日期时间 format
         * @param {any} time
         * @param {any} rule
         */
        format: function (time, rule) {
          return moment(time).format(rule);
        },
        /**
         * 日期时间 get
         * @param {any} time
         */
        get: function (time) {
          return moment(time).valueOf();
        }
      };
    }

    /**
     * layer
     */
    function _layer(layer) {
      var self = this;
      /**
       * 弹出一个loading层
       */
      this.Beginload = function () {
        return layer.load();
      };

      /**
       * 关闭一个loading层
       * @param {any} load
       */
      this.Closeload = function (load) {
        layer.close(load);
      };

      /**
       * 关闭layer开窗
       * @param {any} index
       */
      this.CloseLayerModal = function (index) {
        layer.close(index);
      };

      /**
       * 访问父页面
       */
      this.ParentPage = function () {
        if (parent != self) {
          // 自身不为顶层窗口时
          return parent;
        }
      };

      /**
       * 打开页面
       * @param {any} options
       */
      this.ShowPage = function (options) {
        return layer.open(options);
      };

      /**
       * 开窗
       * @param {any} options
       */
      this.OpenModal = function (options) {
        return layer.open(options);
      };

      /**
       * 打开明细
       * @param {any} objTitle
       * @param {any} objUrl
       * @param {any} successFun 弹窗成功回调方法
       * @param {any} ingoreCloseCfm 是否忽略关闭弹窗询问提示
       * @param {any} closeFun 关闭弹窗回调方法
       */
      this.ShowDetailPage = function (
        objTitle,
        objUrl,
        shade,
        successFun,
        closeFun,
        ingoreCloseCfm
      ) {
        layer.open({
          type: 2,
          anim: -1,
          skin: "layui-anim sf-anim-rl",
          title: objTitle,
          area: ["80%", "100%"],
          shade: shade || 0,
          maxmin: true,
          offset: [0, window.innerWidth() * 0.2],
          moveOut: true,
          content: [objUrl, "no"],
          success: function (layero, index) {
            // 层弹出后的成功回调方法
            //add by ggw 20200208
            if (successFun != undefined && self.IsFunction(successFun)) {
              successFun(layero, index);
            }
          },
          yes: function (index, layero) {
            // 确定按钮回调方法
            layer.close(index); // 如果设定了yes回调，需进行手工关闭

            //add by ggw 20200208 增加关闭页面回调
            if (closeFun != undefined && self.IsFunction(closeFun)) {
              closeFun(layero, index);
            }
          },
          cancel: function (index, layero) {
            if (ingoreCloseCfm != undefined && ingoreCloseCfm) {
              //忽略关闭弹窗询问提示
              //add by ggw 20200208
              layer.close(index);

              //add by ggw 20200208 增加关闭页面回调
              if (closeFun != undefined && self.IsFunction(closeFun)) {
                closeFun(layero, index);
              }
            } else {
              // 右上角关闭按钮触发的回调
              layer.confirm(
                "确定要关闭么?",
                {
                  icon: 3,
                  title: "提示"
                },
                function (i) {
                  layer.close(i);
                  layer.close(index);

                  //add by ggw 20200208 增加关闭页面回调
                  if (closeFun != undefined && self.IsFunction(closeFun)) {
                    closeFun(layero, index);
                  }
                }
              );
            }
            return false;
          },
          end: function () {
            // 层销毁后触发的回调
          }
          // full/min/restore -分别代表最大化、最小化、还原 后触发的回调,携带一个参数，即当前层DOM
        });
      };

      /**
       * 关闭当前弹出的layui页面
       */
      this.ClosePage = function () {
        // 当你在iframe页面关闭自身时
        var index = parent.layer.getFrameIndex(window.name); // 先得到当前iframe层的索引
        parent.layer.close(index); // 再执行关闭
      };

      /**
       * 关闭所有弹窗
       */
      this.CloseAll = function () {
        layer.closeAll();
      };

      /**
       * 提示
       * @param {any} content
       * @param {any} options
       * @param {any} yes
       */
      this.ShowAlert = function (content, options, yes) {
        return layer.alert(content, options, yes);
      };

      /**
       * 确认
       * @param {any} content
       * @param {any} options
       * @param {any} yes
       * @param {any} cancel
       */
      this.ShowConfirm = function (content, options, yes, cancel) {
        if (options == undefined) {
          options = {
            icon: 1,
            btn: ["确认", "取消"]
          };
        }

        //by ggw 20200121 把yes包了一层,先关闭提示窗
        return layer.confirm(
          content,
          options,
          function (index) {
            layer.close(index);
            if (yes != undefined && self.IsFunction(yes)) {
              yes();
            }
          },
          cancel
        );

        //return layer.confirm(content, options, yes, cancel);
      };

      /**
       * 显示信息
       * @param {any} content
       * @param {any} options
       * @param {any} end
       */
      this.ShowMessage = function (content, options, end) {
        return layer.msg(content, options || {}, end);
      };

      /**
       * 关闭弹窗并提示是否确认关闭
       */
      this.ClosePageAndConfirm = function () {
        /* layer.open({
               content: '您确定要关闭吗？',
               btn: ['确定', '取消'],
               btn1: function (index, layero) {
                   // 按钮【按钮一】的回调
                   var index = parent.layer.getFrameIndex(window.name); // 先得到当前iframe层的索引
                   parent.layer.close(index); // 再执行关闭
               },
               btn2: function (index, layero) {
                   // layer.closeAll();
               },
               cancel: function () {
                   // 右上角关闭回调
                   // layer.closeAll();
                   // return false 开启该代码可禁止点击该按钮关闭
               }
           });*/
        var index = parent.layer.getFrameIndex(window.name); // 先得到当前iframe层的索引
        parent.layer.close(index); // 再执行关闭
      };
    }

    /**
     * 平台系统信息处理器
     * @param {Object} collection
     */
    function _systemInfoHandler(collection) {
      collection.User = {};
    }

    /**
     * 平台指令处理器
     * 指令目前挂于SF实例上
     * @param {Object} collection
     * @param {Function} callback
     */
    function _commandHandler(collection, callback) {
      var Command = {};
      _sf.Command = Command;
      // 初始化同步指令
      _browserStorage.call(Command);
      _timer.call(Command);
      _serialize.call(Command);
      _typeJudge.call(Command);
      _iframe.call(Command);
      _pageTabs.call(Command);
      _tools.call(Command);
      // 初始化异步指令
      require(["jquery", "layer"], function ($, layer) {
        _layer.call(Command, layer);
        _request.call(Command, $, layer);
        callback();
      });
    }

    /**
     * 多语言处理器
     * @param {String} UId
     * @param {Function} callback
     */
    function _i18nHandler(UId, callback) {
      // 组件多语言（基础组件，ag-grid）
      require([
        "vue",
        "vueI18n",
        "ELIndex",
        "EZhCNLang",
        "EEnLang",
        "AGGridVueLocale"
      ], function (Vue, VueI18n, ELIndex, EZhCNLang, EEnLang, AGGridVueLocale) {
        var localeRely = UId ? ["./i18n/" + UId] : [];
        // 业务代码多语言
        require(localeRely, function (rely) {
          Vue.use(VueI18n);
          var lang = rely;
          if (lang) {
            // 合并语言包
            Object.assign(lang.cn, EZhCNLang, AGGridVueLocale.cn);
            Object.assign(lang.en, EEnLang, AGGridVueLocale.en);
          }
          var i18n = new VueI18n({
            locale: "cn",
            messages: lang
          });
          Vue.use(ELIndex, {
            i18n: function (key, value) {
              return i18n.t(key, value);
            }
          });
          callback(i18n);
        });
      });
    }

    /**
     * 组件处理器
     * @param {Array} components
     * @param {Function} callback
     */
    function _componentsHandler(components, callback) {
      var prefix = "sf-";
      require(components, function () {
        var componentList = arguments;
        var _components = {};
        for (var i = 0; i < componentList.length; i++) {
          var record = componentList[i];
          record.name = prefix + record.name;
          _components[record.name] = record;
        }
        callback(_components);
      });
    }

    /**
    * 插件处理器
    * @param {Array} plugins
    * @param {Function} callback
    */
    function _pluginsHandler(plugins, callback) {
      require(["vue"], function (Vue) {
        var maybePluginsMap = {
          push: "push",
          moment: "moment",
        };
        if (Array.isArray(plugins) && plugins.length) {
          var correctPlugins = [];
          plugins.forEach(function (name) {
            var _name = maybePluginsMap[name.toLowerCase()];
            if (_name) {
              correctPlugins.push(_name);
            }
          })
          if (correctPlugins.length) {
            Vue.prototype.$sf = {};
            require(correctPlugins, function () {
              var mod = arguments;
              correctPlugins.forEach(function (name, index) {
                Vue.prototype.$sf[name] = mod[index];
              });
              callback();
            });
          } else {
            callback();
          }
        } else {
          callback();
        }
      })
    }

    /**
     * 平台初始化
     * @param {Object} ops
     */
    this.init = function (ops) {
      require([
        "vue",
        "ELIndex",
        "vueI18n",
        "css!../css/reset.css",
        "css!./lib/element-ui/css/index.css"
      ], function (Vue, ELIndex) {
        _systemInfoHandler(_sf);
        var collection = {};
        // Vue.prototype.$sf = collection;
        // 平台指令文档
        _commandHandler(collection, function () {
          _i18nHandler(ops.UId, function (i18n) {
            _componentsHandler(ops.components, function (components) {
              _pluginsHandler(ops.plugins, function () {
                // 初始化 Loading Notification
                // Vue.use(ELIndex.Loading);
                // Vue.use(ELIndex.Notification);
                // 创建Vue根实例
                new Vue({
                  el: "#app",
                  i18n: i18n,
                  components: components,
                  created: ops.created,
                  mounted: ops.mounted,
                  watch: ops.watch,
                  computed: ops.computed,
                  data: ops.data,
                  methods: ops.methods
                });
              });
            });
          });
        });
      });
    };
  }

  /**
   * 异常错误处理
   * @param {any} error
   * tip: 异常处理已分类 但还要优化
   */
  SF.prototype.exceptionHandler = function (error, type) {
    // 上报
    // 前端提示
    if (!error) {
      return;
    }
    switch (type) {
      case 1: // ajax请求成功但业务状态码不正常
        this.Command.ShowAlert(error.Message, {
          icon: 2,
          title: "请求成功但有异常"
        });
        break;
      case 2: // ajax请求失败
        this.Command.ShowAlert(error.statusText, {
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
  // 创建SF实例
  var sf = new SF();
  window.sf = sf;
  // 开启代码错误Watcher
  window.onerror = function (message, file, row, col) {
    sf.exceptionHandler({
      message: message,
      file: file,
      row: row,
      col: col
    });
    return true;
  };
})();
