let app = new Vue({
    el: '#app',
    data: {
        serverUrl: "http://localhost:8082",
        user: [],
        passwordFieldType: 'password',
        anonymousIdFieldType: 'password',
        tenDigitFieldType: 'password',
        securityAnswer1FieldType: 'password',
        securityAnswer2FieldType: 'password',
        securityAnswer3FieldType: 'password',
        tenDigitToggleIcon: 'bx bx-show',
        passwordToggleIcon: 'bx bx-show', // Boxicons show icon for password
        anonymousIdToggleIcon: 'bx bx-show', // Boxicons show icon for anonymous ID
        securityAnswer1ToggleIcon: 'bx bx-show', // Boxicons show icon for security answer 1
        securityAnswer2ToggleIcon: 'bx bx-show', // Boxicons show icon for security answer 2
        securityAnswer3ToggleIcon: 'bx bx-show' // Boxicons show icon for security answer 3
    },
    methods: {
        toggleSidebar() {
            let sidebar = document.querySelector(".sidebar");
            sidebar.classList.toggle("active");
        },
        togglePasswordVisibility() {
            if (this.passwordFieldType === 'password') {
                this.passwordFieldType = 'text';
                this.passwordToggleIcon = 'bx bx-hide'; // Boxicons hide icon for password
            } else {
                this.passwordFieldType = 'password';
                this.passwordToggleIcon = 'bx bx-show';
            }
        },
        toggleAnonymousIdVisibility() {
            if (this.anonymousIdFieldType === 'password') {
                this.anonymousIdFieldType = 'text';
                this.anonymousIdToggleIcon = 'bx bx-hide'; // Boxicons hide icon for anonymous ID
            } else {
                this.anonymousIdFieldType = 'password';
                this.anonymousIdToggleIcon = 'bx bx-show';
            }
        },
        toggleTenDigitVisibility() {
            if (this.tenDigitFieldType === 'password') {
                this.tenDigitFieldType = 'text';
                this.tenDigitToggleIcon = 'bx bx-hide'; // Boxicons hide icon for anonymous ID
            } else {
                this.tenDigitFieldType = 'password';
                this.tenDigitToggleIcon = 'bx bx-show';
            }
        },
        toggleSecurityAnswer1Visibility() {
            if (this.securityAnswer1FieldType === 'password') {
                this.securityAnswer1FieldType = 'text';
                this.securityAnswer1ToggleIcon = 'bx bx-hide'; // Boxicons hide icon for security answer 1
            } else {
                this.securityAnswer1FieldType = 'password';
                this.securityAnswer1ToggleIcon = 'bx bx-show';
            }
        },
        toggleSecurityAnswer2Visibility() {
            if (this.securityAnswer2FieldType === 'password') {
                this.securityAnswer2FieldType = 'text';
                this.securityAnswer2ToggleIcon = 'bx bx-hide'; // Boxicons hide icon for security answer 2
            } else {
                this.securityAnswer2FieldType = 'password';
                this.securityAnswer2ToggleIcon = 'bx bx-show';
            }
        },
        toggleSecurityAnswer3Visibility() {
            if (this.securityAnswer3FieldType === 'password') {
                this.securityAnswer3FieldType = 'text';
                this.securityAnswer3ToggleIcon = 'bx bx-hide'; // Boxicons hide icon for security answer 3
            } else {
                this.securityAnswer3FieldType = 'password';
                this.securityAnswer3ToggleIcon = 'bx bx-show';
            }
        },
        async fetchUserDetails() {
            const jwtToken = localStorage.getItem('jwtToken'); // Retrieve JWT token from local storage
            const nin = localStorage.getItem('nin'); // Retrieve NIN from local storage
            if (!jwtToken || !nin) {
                console.error('No JWT token or NIN found');
                return;
            }

            try {
                const response = await fetch(`${this.serverUrl}/auth/user/${nin}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${jwtToken}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    this.user = data;
                } else {
                    console.error('Failed to fetch user details', response.status);
                }
            } catch (error) {
                console.error('Failed to fetch user details', error);
            }
        }
    },
    mounted() {
        let btn = document.getElementById('hamBtn');
        btn.addEventListener('click', this.toggleSidebar);

        this.fetchUserDetails();
    }
});
