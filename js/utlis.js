// 工具模块
define("utlis", {
  /**
   * 是否String类型
   * @param {*} v
   * @returns Boolean
   */
  IsString: function(v) {
    return Object.prototype.toString.call(v) === "[object String]";
  },
  /**
   * 是否Number类型
   * @param {*} v
   * @returns Boolean
   */
  IsNumber: function(v) {
    return Object.prototype.toString.call(v) === "[object Number]";
  },
  /**
   * 是否Boolean类型
   * @param {*} v
   * @returns Boolean
   */
  IsBoolean: function(v) {
    return Object.prototype.toString.call(v) === "[object Boolean]";
  },
  /**
   * 是否Function类型
   * @param {*} v
   * @returns Boolean
   */
  IsFunction: function(v) {
    return Object.prototype.toString.call(v) === "[object Function]";
  },
  /**
   * 是否为null
   * @param {*} v
   * @returns Boolean
   */
  IsNull: function(v) {
    return Object.prototype.toString.call(v) === "[object Null]";
  },
  /**
   * 是否
   * @param {*} v
   * @returns Boolean
   */
  IsObject: function(v) {
    return Object.prototype.toString.call(v) === "[object Object]";
  },
  /**
   * 是否为Undefined
   * @param {*} v
   * @returns Boolean
   */
  IsUndefined: function(v) {
    return Object.prototype.toString.call(v) === "[object Undefined]";
  },
  /**
   * 是否Array类型
   * @param {*} v
   * @returns Boolean
   */
  IsArray: function(v) {
    return Object.prototype.toString.call(v) === "[object Array]";
  },
  /**
   * 是否Date类型
   * @param {*} v
   * @returns Boolean
   */
  IsDate: function(v) {
    return Object.prototype.toString.call(v) === "[object Date]";
  },
  /**
   * 是否RegExp类型
   * @param {*} v
   * @returns Boolean
   */
  IsRegExp: function(v) {
    return Object.prototype.toString.call(v) === "[object RegExp]";
  },
  /**
   * 是否为空 为 null undefined 空字符串 成立
   * @param {*} v
   * @returns Boolean
   */
  IsEmpty: function(v) {
    return !v && v !== false && v !== 0;
  },
  /**
   * 获取URL中的参数
   * @param {any} objParam
   */
  GetUrlParam: function(objParam) {
    var reg = new RegExp("(^|&)" + objParam + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  },
  /**
   * 获取Guid
   */
  GetGuid: function() {
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  },
  /**
   * 获取系统时间
   */
  GetSystemDate: function() {
    return new Date();
  },
  /**
   * 序列化
   * @param {Object} obj
   * @returns String
   */
  Serialize: function(obj) {
    return JSON.stringify(obj);
  },
  /**
   * 反序列化
   * @param {String} str
   * @returns Object
   */
  DeSerialize: function(str) {
    return JSON.parse(str);
  },
  /**
   * set Cookie
   * @param {any} name
   * @param {any} value
   * @param {any} time 分钟
   */
  SetCookie: function(name, value, time) {
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
  GetCookie: function(name) {
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"),
      arr = document.cookie.match(reg);
    if (arr) return decodeURIComponent(arr[2]);
    else return null;
  },
  /**
   * remove Cookie
   * @param {any} name
   */
  RemoveCookie: function(name) {
    this.SetCookie(name, "", -1);
  },
  /**
   * removeAll Cookie
   */
  RemoveAllCookie: function() {
    var self = this;
    document.cookie.match(/[^ =;]+(?=\=)/g).forEach(function(key) {
      self.RemoveCookie(key);
    });
  },
  /**
   * set LocalStorage
   * @param {any} key
   * @param {any} value
   */
  SetLocalStorage: function(key, value) {
    window.localStorage.setItem(key, value);
  },
  /**
   * get LocalStorage
   * @param {any} key
   */
  GetLocalStorage: function(key) {
    return window.localStorage.getItem(key);
  },
  /**
   * remove LocalStorage
   * @param {any} key
   */
  RemoveLocalStorage: function(key) {
    window.localStorage.removeItem(key);
  },
  /**
   * removeAll LocalStorage
   */
  RemoveAllLocalStorage: function() {
    window.localStorage.clear();
  },
  /**
   * set SessionStorage
   * @param {any} key
   * @param {any} value
   */
  SetSessionStorage: function(key, value) {
    window.sessionStorage.setItem(key, value);
  },
  /**
   * get SessionStorage
   * @param {any} key
   */
  GetSessionStorage: function(key) {
    return window.sessionStorage.getItem(key);
  },
  /**
   * remove SessionStorage
   * @param {any} key
   */
  RemoveSessionStorage: function(key) {
    window.sessionStorage.removeItem(key);
  },
  /**
   * removeAll SessionStorage
   */
  RemoveAllSessionStorage: function() {
    window.sessionStorage.clear();
  },
  /**
   * 获取UUIDKey
   * @returns
   */
  GetUUIDKey: function() {
    return "uuid";
  },
  /**
   * 获取UUID
   * @returns
   */
  GetUUID: function() {
    return this.GetLocalStorage(this.GetUUIDKey());
  },
  /**
   * 设置UUID
   * @param {*} uuid
   */
  SetUUID: function(uuid) {
    this.SetLocalStorage(this.GetUUIDKey(), uuid);
  },
  /**
   * removeUUID
   */
  RemoveUUID: function() {
    this.RemoveLocalStorage(this.GetUUIDKey());
  },
  /**
   * 一次性定时器
   * @param {any} callback 回调
   * @param {any} timeout 间隔时间
   */
  SetTimeout: function(callback, timeout) {
    window.setTimeout(callback, timeout);
  },
  /**
   * 周期性定时器
   * @param {any} callback 回调
   * @param {any} timeout 间隔时间
   */
  SetInterval: function(callback, timeout) {
    window.setInterval(callback, timeout);
  }
});
