document.addEventListener('DOMContentLoaded', function() {
    const registrationContainer = document.getElementById('registration-container');
    registrationContainer.innerHTML = `
        <h2>Register</h2>
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