let app = new Vue({
    el: '#app',
    data: {
        serverUrl: "http://localhost:8082",
        nin: '',
        password: '',
        passwordFieldType: 'password',
        passwordToggleIcon: 'fas fa-eye'
    },
    methods: {
        isValidNin() {
            return this.nin.length === 5;
        },
        isValidPassword() {
            const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            return re.test(this.password);
        },
        togglePasswordVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
            this.passwordToggleIcon = this.passwordFieldType === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
        },
        async loginUser() {
            try {
                console.log('Sending login request to:', `${this.serverUrl}/auth/login`);
                const response = await fetch(`${this.serverUrl}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nin: this.nin,
                        password: this.password
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Login successful, response data:', data);
                    alert("Login successful! Token: " + data.jwt);
                    window.location.href = './dashboard.html';
                } else {
                    const error = await response.text();
                    console.log('Login failed, response text:', error);
                    alert("Login failed: " + error);
                }
            } catch (error) {
                console.error('Network error:', error);
                alert("An error occurred. Please try again later.");
            }
        }
    }
});
