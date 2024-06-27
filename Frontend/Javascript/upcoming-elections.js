let app = new Vue({
    el: '#app',
    data: {},
    methods: {
        toggleSidebar() {
            let sidebar = document.querySelector(".sidebar");
            sidebar.classList.toggle("active");
        }
    },
    mounted() {
        let btn = document.getElementById('hamBtn');
        btn.addEventListener('click', this.toggleSidebar);
    }
});