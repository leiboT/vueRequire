define("command", ["jquery", "utlis", "layer"], function($, utlis, layer) {
  "use strict";
  return {
    /**
     * 弹出一个loading层
     * @param type
     */
    Beginload: function(type) {
      return layer.load(type);
    },

    /**
     * 关闭一个loading层
     * @param {any} load
     */
    Closeload: function(load) {
      layer.close(load);
    },

    /**
     * 关闭layer开窗
     * @param {any} index
     */
    CloseLayerModal: function(index) {
      layer.close(index);
    },

    /**
     * 访问父页面
     */
    ParentPage: function() {
      if (parent != window) {
        // 自身不为顶层窗口时
        return parent;
      }
    },

    /**
     * 打开页面
     * @param {any} options
     */
    ShowPage: function(options) {
      return layer.open(options);
    },

    /**
     * 开窗
     * @param {any} options
     */
    OpenModal: function(options) {
      return layer.open(options);
    },

    /**
     * 打开明细
     * @param {any} objTitle
     * @param {any} objUrl
     * @param {any} successFun 弹窗成功回调方法
     * @param {any} ingoreCloseCfm 是否忽略关闭弹窗询问提示
     * @param {any} closeFun 关闭弹窗回调方法
     */
    ShowDetailPage: function(
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
        offset: [0, $(window).width() * 0.2],
        moveOut: true,
        content: [objUrl, "no"],
        success: function(layero, index) {
          // 层弹出后的成功回调方法
          //add by ggw 20200208
          if (successFun != undefined && utlis.IsFunction(successFun)) {
            successFun(layero, index);
          }
        },
        yes: function(index, layero) {
          // 确定按钮回调方法
          layer.close(index); // 如果设定了yes回调，需进行手工关闭

          //add by ggw 20200208 增加关闭页面回调
          if (closeFun != undefined && utlis.IsFunction(closeFun)) {
            closeFun(layero, index);
          }
        },
        cancel: function(index, layero) {
          if (ingoreCloseCfm != undefined && ingoreCloseCfm) {
            //忽略关闭弹窗询问提示
            //add by ggw 20200208
            layer.close(index);

            //add by ggw 20200208 增加关闭页面回调
            if (closeFun != undefined && utlis.IsFunction(closeFun)) {
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
              function(i) {
                layer.close(i);
                layer.close(index);

                //add by ggw 20200208 增加关闭页面回调
                if (closeFun != undefined && utlis.IsFunction(closeFun)) {
                  closeFun(layero, index);
                }
              }
            );
          }
          return false;
        },
        end: function() {
          // 层销毁后触发的回调
        }
        // full/min/restore -分别代表最大化、最小化、还原 后触发的回调,携带一个参数，即当前层DOM
      });
    },

    /**
     * 关闭当前弹出的layui页面
     */
    ClosePage: function() {
      // 当你在iframe页面关闭自身时
      var index = parent.layer.getFrameIndex(window.name); // 先得到当前iframe层的索引
      parent.layer.close(index); // 再执行关闭
    },

    /**
     * 关闭所有弹窗
     */
    CloseAll: function() {
      layer.closeAll();
    },

    /**
     * 提示
     * @param {any} content
     * @param {any} options
     * @param {any} yes
     */
    ShowAlert: function(content, options, yes) {
      return layer.alert(content, options, yes);
    },

    /**
     * 确认
     * @param {any} content
     * @param {any} options
     * @param {any} yes
     * @param {any} cancel
     */
    ShowConfirm: function(content, options, yes, cancel) {
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
        function(index) {
          layer.close(index);
          if (yes != undefined && utlis.IsFunction(yes)) {
            yes();
          }
        },
        cancel
      );

      //return layer.confirm(content, options, yes, cancel);
    },

    /**
     * 显示信息
     * @param {any} content
     * @param {any} options
     * @param {any} end
     */
    ShowMessage: function(content, options, end) {
      return layer.msg(content, options || {}, end);
    },

    /**
     * 关闭弹窗并提示是否确认关闭
     */
    ClosePageAndConfirm: function() {
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
    },
    /**
     * 获取iframe
     * @param {any} id
     * @return {any} iframeWindow
     */
    GetIframeWindowById: function(id) {
      var iframe;
      if (document.all) {
        // ie
        iframe = window.top.document.frames[id];
        return iframe.window;
      } else {
        iframe = window.top.document.getElementById(id);
        return iframe.contentWindow;
      }
    },

    /**
     * 返回当前iframe的Id
     */
    GetSelfIframeWindowId: function() {
      if (window != undefined) {
        return window.frameElement.id;
      }
      return "";
    },

    /**
     * 返回打开TabPage的来源Iframe Window
     */
    GetSrcWindowOnTab: function() {
      var srcWinId = utlis.GetUrlParam("srcwinid");
      if (!utlis.IsEmpty(srcWinId)) {
        return this.GetIframeWindowById(srcWinId);
      }
      return null;
    },
    /**
     * 新增tab页签
     * @param {any} tabId  自定义唯一tabid
     * @param {any} href    相对URL地址
     * @param {any} title    页面标题
     */
    AddTab: function(tabId, href, title) {
      if (!utlis.IsEmpty(href)) {
        //追加来源windowid，便于回调方法使用
        var srcWinId = utlis.GetUrlParam("srcwinid");
        if (utlis.IsEmpty(srcWinId)) {
          srcWinId = this.GetSelfIframeWindowId();
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
      this.ChangeTab(tabId);
    },

    /**
     * 删除tab页签
     * @param {any} tabId
     */
    DeleteTab: function(tabId) {
      window.top.layui &&
        window.top.layui.sf &&
        window.top.layui.sf.tabDelete(tabId);
    },

    /**
     * 关闭当前页签
     * @param {any} tabId
     */
    CloseSelfTab: function(tabId) {
      var winId = this.GetSelfIframeWindowId();
      if (!utlis.IsEmpty(winId)) {
        this.DeleteTab(winId);
        tabId && this.ChangeTab(tabId);
      }
    },

    /**
     * 切换tab页签
     * @param {any} tabId
     */
    ChangeTab: function(tabId) {
      window.top.layui &&
        window.top.layui.sf &&
        window.top.layui.sf.tabChange(tabId);
    }
  };
});
