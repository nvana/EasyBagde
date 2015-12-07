var page = require('webpage').create();
page.open('https://stackoverflow.com/users/login/', function(status) {
  console.log("Status: " + status);
  if (status === "success") {
    page.evaluate(function() {
      document.querySelector("#email").value = "mail@mail.com";
      document.querySelector("#password").value = "myPassword";
      document.querySelector("#submit-button").click();
      console.log("Connected");

    });
    window.setTimeout(function() {
      page.render('render.png');
      phantom.exit();
    },3000);
  }
});
