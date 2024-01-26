document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('login-container');
    loginContainer.innerHTML = `
        <h2>Login</h2>
        <form id="login-form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br>

            <button type="button" id="login-button">Login</button>
        </form>
    `
    ;
});