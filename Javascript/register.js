let app = new Vue({
    el: '#app',
    data: {
        serverUrl: "http://localhost:8082",
        form: {
            username: '',
            email: '',
            password: '',
            password2: '',
            age: '',
            gender: '',
            nin: '',
            localGovernment: '',
            state: '',
            phoneNumber: ''
        },
        errors: {},
        inputs: [
            { id: 'username', type: 'text', placeholder: 'Name', label: 'Name:' },
            { id: 'email', type: 'email', placeholder: 'Email', label: 'Email:' },
            { id: 'password', type: 'password', placeholder: 'Password', label: 'Password:', visible: false },
            { id: 'password2', type: 'password', placeholder: 'Input Password Again', label: 'Confirm Password:', visible: false },
            { id: 'age', type: 'number', placeholder: 'Age', label: 'Age:' },
            { id: 'gender', type: 'text', placeholder: 'Gender', label: 'Gender:' },
            { id: 'nin', type: 'number', placeholder: 'National Identification Number (NIN)', label: 'NIN:' },
            { id: 'localGovernment', type: 'text', placeholder: 'Local Government', label: 'Local Government:' },
            { id: 'state', type: 'text', placeholder: 'State', label: 'State:' },
            { id: 'phoneNumber', type: 'text', placeholder: 'Phone Number', label: 'Phone Number:' }
        ]
    },
    methods: {
        validateForm() {
            this.errors = {};

            if (!this.form.username) {
                this.errors.username = 'Name is required';
            }
            if (!this.form.email) {
                this.errors.email = 'Email is required';
            } else if (!this.validEmail(this.form.email)) {
                this.errors.email = 'Valid email required';
            }
            if (!this.form.password) {
                this.errors.password = 'Password is required';
            }
            if (this.form.password !== this.form.password2) {
                this.errors.password2 = 'Passwords do not match';
            }
            if (!this.form.age) {
                this.errors.age = 'Age is required';
            }
            if (!this.form.gender) {
                this.errors.gender = 'Gender is required';
            }
            if (!this.form.nin) {
                this.errors.nin = 'NIN is required';
            }
            if (!this.form.localGovernment) {
                this.errors.localGovernment = 'Local Government is required';
            }
            if (!this.form.state) {
                this.errors.state = 'State is required';
            }
            if (!this.form.phoneNumber) {
                this.errors.phoneNumber = 'Phone Number is required';
            }

            if (Object.keys(this.errors).length === 0) {
                this.submitForm();
            }
        },
        validEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/i;
            return re.test(email);
        },
        async submitForm() {
            try {
                const response = await fetch(`${this.serverUrl}/auth/register`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        username: this.form.username,
                        email: this.form.email,
                        password: this.form.password,
                        age: this.form.age,
                        gender: this.form.gender,
                        nin: this.form.nin,
                        localGovernment: this.form.localGovernment,
                        state: this.form.state,
                        phoneNumber: this.form.phoneNumber,
                        anonymousId: null,
                        tenDigitCode: null
                    })
                });

                const data = await response.json();

                if (data.status === 'success') {
                    alert("Sign up Successful");
                    window.location.href = './log-in.html';
                } else {
                    alert("Sign up failed: " + data.message);
                }
            } catch (error) {
                console.error('Error:', error);
                alert("An error occurred. Please try again later.");
            }
        },
        toggleVisibility(index) {
            this.inputs[index].visible = !this.inputs[index].visible;
        },
        redirectToLogin() {
            // Handle login redirect
        }
    }
});
