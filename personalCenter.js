sf.init({
  components: [
    "sf-title-content",
    "sf-button",
    "sf-label-value",
    "sf-switch",
    "sf-upload",
    "sf-input",
    "sf-theme"
  ],
  plugin: ["jquery"],
  data: function() {
    return {
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
      notification: false
    };
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
    }
  }
});
