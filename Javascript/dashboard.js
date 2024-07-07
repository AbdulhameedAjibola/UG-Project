let app = new Vue({
    el: '#app',
    data: {
        passwordFieldType: 'password',
            anonymousIdFieldType: 'password',
            tenDigitFieldType: 'password',
            tenDigitToggleIcon: 'bx bx-show',
            passwordToggleIcon: 'bx bx-show', // Boxicons show icon for password
            anonymousIdToggleIcon: 'bx bx-show', // Boxicons show icon for anonymous ID

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
        toggletenDigitVisibility() {
            if (this.tenDigitFieldType === 'password') {
                this.tenDigitFieldType = 'text';
                this.tenDigitToggleIcon = 'bx bx-hide'; // Boxicons hide icon for anonymous ID
            } else {
                this.tenDigitFieldType = 'password';
                this.tenDigitToggleIcon = 'bx bx-show';
            }
        }
    },
    mounted() {
        let btn = document.getElementById('hamBtn');
        btn.addEventListener('click', this.toggleSidebar);
    }
});