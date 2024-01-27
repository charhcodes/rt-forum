package forum

import (
	"net/http"
)

func ServeLogin(w http.ResponseWriter, r *http.Request) {
	content := `
	<h2>Login</h2>
	<form id="login-form">
		<label for="username">Username:</label>
		<input type="text" id="username" name="username" required><br>

		<label for="password">Password:</label>
		<input type="password" id="password" name="password" required><br>

		<button type="button" id="login-button" onclick="attemptLogin()">Login</button>
	</form>
	<script>
		function attemptLogin() {
  			console.log("Button working");
			var username = document.getElementById("username").value;
	  		var password = document.getElementById("password").value;

			if (username === "username" && password === "password") {
				console.log("Login successful");
				alert("Login successful");
			} else {
				alert("Invalid login, please check your username and/or password");
			}
		};
	</script>
	`
	w.Header().Set("Content-Type", "text/html")
	w.Write([]byte(content))
}
