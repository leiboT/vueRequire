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
  plugins: ["push"],
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
  created: function() {
    // debugger;
  },

  methods: {
    edit: function() {
      debugger;
    },
    notificationToggle: function(value) {
      this.notification = value;
      this.sf.push.create("Hello World!", "xxxxxxxxxxxxxxxxxxx");
    }
  }
});
