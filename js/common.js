window.addEventListener("load", function () {
  var signup_form = document.getElementById("signup-form");
  signup_form.addEventListener("submit", function (event) {
    var XHR = new XMLHttpRequest();
    var form_data = new FormData(signup_form);

    // On success
    XHR.addEventListener("load", signup_success);

    // On error
    XHR.addEventListener("error", on_error);

    // Set up request
    XHR.open("POST", "api/signup_submit.php");

    // Form data is sent with request
    XHR.send(form_data);

    document.getElementById("loading").style.display = "block";
    event.preventDefault();
  });

  //add code corresponding to login form as a part of your assignment
  var login_form = document.getElementById("login-form");
  login_form.addEventListener("submit", function (event) {
    var XHR = new XMLHttpRequest();
    var form_data = new FormData(login_form);

    //on success
    XHR.addEventListener("load", login_success);

    //on error
    XHR.addEventListener("error", on_error);

    //set up request
    XHR.open("POST", "api/login_submit.php");

    //form data is sent with the request
    XHR.send(form_data);

    document.getElementById("loading").style.display = "block";
    event.preventDefault();
  });
});

var signup_success = function (event) {
  document.getElementById("loading").style.display = "none";

  var response = JSON.parse(event.target.responseText);
  if (response.success) {
    alert(response.message);
    window.location.href = "index.php";
  } else {
    alert(response.message);
  }
};

//add function corresponding to login_success as a part of your assignment
var login_success = function (event) {
  document.getElementById("loading").style.display = "none";

  var response = JSON.parse(event.target.responseText);
  if (response.success) {
    location.reload();
  } else {
    alert(response.message);
  }
};

var on_error = function (event) {
  document.getElementById("loading").style.display = "none";

  alert("Oops! Something went wrong.");
};
