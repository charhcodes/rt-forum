package forum

import (
	"net/http"
)

func ServeRegister(w http.ResponseWriter, r *http.Request) {
	// Simulate content retrieval from a database or other source
	content := `
	<h2>Register</h2>
	<form id="registration-form">
		<label for="username">Username:</label>
		<input type="text" id="username" name="username" required><br>

		<label for="email">Email:</label>
		<input type="text" id="email" name="email" required><br>

		<label for="password">Password:</label>
		<input type="password" id="password" name="password" required><br>

		<button type="button" id="register-button">Register</button>
	</form>
`
	w.Header().Set("Content-Type", "text/html")
	w.Write([]byte(content))
}
