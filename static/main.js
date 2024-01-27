document.addEventListener("DOMContentLoaded", function () {
  loadContent("/home");

  document
    .getElementById("content")
    .addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        event.preventDefault();
        loadContent(event.target.getAttribute("href"));
      }
    });
});

function loadContent(url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        document.getElementById("content").innerHTML = xhr.responseText;
      } else {
        console.error("Error loading content:", xhr.status);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function attemptLogin() {
  //   var username = document.getElementById("username").value;
  //   var password = document.getElementById("password").value;

  //   if (username === "username" && password === "password") {
  //     console.log("Login successful");
  //     loadContent("/home");
  //   } else {
  //     alert("Invalid login, please check your username and/or password");
  //   }
  alert("Login successful");
  console.log("Button working");
}
