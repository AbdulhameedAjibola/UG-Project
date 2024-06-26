let app = new Vue({
    el: '#app',
    data() {
        return {
            password:'',
            nin: '',
             passwordFieldType: 'password',
            passwordToggleIcon: 'fa fa-eye'
        }
    },
    methods: {
        isValidPassword() {
            const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            return pattern.test(this.password);        
        },
        isValidNin() {
            return /^[1-9]\d*$/.test(this.nin) && this.nin.length === 10;
            },
            togglePasswordVisibility() {
                if (this.passwordFieldType === 'password') {
                  this.passwordFieldType = 'text';
                  this.passwordToggleIcon = 'fa fa-eye-slash';
                } else {
                  this.passwordFieldType = 'password';
                  this.passwordToggleIcon = 'fa fa-eye';
                }
              },
    },
})