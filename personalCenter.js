sf.init({
  UId: "personalCenter",
  components: [
    "sf-title-content",
    "sf-button",
    "sf-label-value",
    "sf-switch",
    "sf-upload",
    "sf-input",
    "sf-theme",
    "sf-select",
    "sf-option"
  ],
  plugins: ["push", "moment"],
  data: {
    api: {},
    info: {
      username: "",
      name: "",
      phone: "",
      email: "",
      password: "",
      avatar: []
    },
    theme: "blue",
    notification: false,
    langs: [
      { label: "中文", value: "cn" },
      { label: "English", value: "en" }
    ]
  },
  init: function() {
    debugger;
    sf.Command.Request({
      url: "/api/info"
    })
      .then(function(data) {
        debugger;
      })
      .catch(function(err) {
        debugger;
      });
  },
  methods: {
    edit: function() {
      sf.Command.Beginload();
    },
    notificationToggle: function(value) {
      this.notification = value;
      sf.Plugin.push.create("Hello World!");
    }
  }
});
