if(localStorage.getItem("username")=== null || localStorage.getItem("username")==="null"){
  $("#admin").hide();
  $("#welcome").hide();
  $("#logout").hide();
}
else{
  $("#login").hide();
  $("#register").hide();
  $("#welcome").append(localStorage.getItem("name"));
}

$("#favorites").button();
$("#logout").button();
$("#developers").button().off("click").on("click", function(){
  window.location.href = "developers.html";
});


$(function () {
  var dialog, form,

    // Regex from rom http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    name = $("#name"),
    email = $("#email"),
    password = $("#password"),
    passwordConf = $("#passwordConf"),
    allFields = $([]).add(name).add(email).add(password).add(passwordConf),
    tips = $(".validateTips");

    function updateTips(t) {
      tips.text(t)
      .addClass("ui-state-highlight");
      setTimeout(function () {
        tips.removeClass("ui-state-highlight", 1500);
      }, 500);
    }

    function checkLength(o, n, min, max) {
      if (o.val().length > max || o.val().length < min) {
        o.addClass("ui-state-error");
        updateTips("Length of " + n + " must be between " + min + " and " + max + ".");
        return false;
      } else {
        return true;
      }
    }

    function checkRegexp(o, regexp, n) {
      if (!(regexp.test(o.val()))) {
        o.addClass("ui-state-error");
        updateTips(n);
        return false;
      } else {
        return true;
      }
    }

    function addUser() {
      console.log("addUser");
      var valid = true;
      allFields.removeClass("ui-state-error");

      valid = valid && checkLength(name, "username", 3, 16);
      valid = valid && checkLength(email, "email", 6, 80);
      valid = valid && checkLength(password, "password", 5, 16);

      valid = valid && checkRegexp(name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter.");
      valid = valid && checkRegexp(email, emailRegex, "eg. ui@jquery.com");
      valid = valid && checkRegexp(password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9");
      if (password.val() !== passwordConf.val()) {
        console.log(password.value);
        valid = false;
        password.addClass("ui-state-error");
        passwordConf.addClass("ui-state-error");
        updateTips("Passwords do not match!");
      }

      var send = [];

      send.name = name.val();
      send.username = email.val();
      send.pw = password.val();

      console.log(send);

      if (valid) {
        dialog.dialog("close");
        console.log("running ajax 64");

        $.ajax({
          type: "POST",
          url: rootURL + "/register",
          data: send,
          dataType: "json",
          success: function (result) {
            if (result[0] === "User already exists") {
              alert("Username already exists! Try Again!!!");
            } else {
              alert("Successfully registered! Check your email for information!");
              console.log(result);
              localStorage.setItem("username", result[0]);
              localStorage.setItem("name", result[1]);
              location.reload();
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
          }
        });

      }
      return valid;
    }

    dialog = $("#register-form").dialog({
      autoOpen: false,
      height: 390,
      width: 400,
      modal: true,
      buttons: {
        "Create an account": addUser,
        Cancel: function () {
          dialog.dialog("close");
        }
      },
      close: function () {
        form[0].reset();
        allFields.removeClass("ui-state-error");
      }
    });

    form = dialog.find("form").on("submit", function (event) {
      event.preventDefault();
      addUser();
    });

    $("#register").button().on("click", function () {
      dialog.dialog("open");
      $('.ui-widget-overlay').off("click").on("click", function () {
            //Close the dialog
            console.log("clicked overlay");
            dialog.dialog("close");
          });
    });


    dialogLogin = $("#login-form").dialog({
      autoOpen: false,
      height: 300,
      width: 380,
      modal: true,
      buttons: {
        "Login!": login,
        "Forgot password": forgotPassword
      },
      close: function () {
        form[0].reset();
        allFields.removeClass("ui-state-error");
      }
    });

    form = dialogLogin.find("form").on("submit", function (event) {
      event.preventDefault();
      login();
    });

    $("#login").button().on("click", function () {

      dialogLogin.dialog("open");
      $('.ui-widget-overlay').off("click").on("click", function () {
            //Close the dialog
            console.log("clicked overlay");
            dialogLogin.dialog("close");
          });
    });

    function forgotPassword() {
      console.log("in forgot password");

      var send = {};
      send.username = $("#nameLogin").val();

        //alert("Email has been sent to "+send.username);

        console.log(send);

        $.ajax({
          type: "POST",
          url: rootURL + "/sendEmail",
          data: send,
          dataType: "json",
          success: function (result) {
            console.log(result);
            alert(result);
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
          }
        });


      }

      function login() {

        console.log("logging in");

        var valid = true;
        allFields.removeClass("ui-state-error");

        var send = [];

        send.name = $("#nameLogin").val();
        send.pw = $("#passwordLogin").val();

        console.log(send);

        if (valid) {
          dialogLogin.dialog("close");

          $.ajax({
            type: "POST",
            url: rootURL + "/login",
            data: send,
            dataType: "json",
            success: function (result) {
              console.log(result);
              if (result[0] === "Invalid login") {
                alert("Invalid Login! Try again!");
              } else {
                console.log("logged in to " + result[0]);
                localStorage.setItem("username", result[0]);
                localStorage.setItem("name", result[1]);
                location.reload();
              }

            },
            error: function (jqXHR, textStatus, errorThrown) {
              console.log(jqXHR, textStatus, errorThrown);
            }
          });

        }
        return valid;

      }
      $("#logout").on("click", function () {
        console.log("logging out");

        $.ajax({
          type: "POST",
          url: rootURL + "/logout",
          success: function (result) {
            console.log(result);
            localStorage.setItem("username", null);
            localStorage.setItem("name", null);
            location.reload();
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
          }
        });
      });
    });