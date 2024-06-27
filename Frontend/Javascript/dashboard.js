let app = new Vue({
    el: '#app',
    data: {
        activeComponent: 'support',
    },
    methods: {
        toggleSidebar() {
            let sidebar = document.querySelector(".sidebar");
            sidebar.classList.toggle("active");
        },
        setActiveComponent(componentName) {
            this.activeComponent = componentName;
          }
},
components:{
    'support': {
        template: `
            <div class="support-container">
                <!-- FAQ Section -->
                <div id="accordion" class="accordion-container">
                    <h1>Frequently Asked Questions</h1>
                    <div class="card">
                        <div class="card-header">
                            <a class="btn" data-toggle="collapse" href="#collapseOne">
                                <span>How do I create an account?</span> <i class="fas fa-plus-circle"></i>
                            </a>
                        </div>
                        <div id="collapseOne" class="collapse show" data-parent="#accordion">
                            <div class="card-body">
                                To create an account, click on the "Sign Up" button on the homepage, fill in your details, and submit the form. You will receive a verification email to activate your account.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed btn" data-toggle="collapse" href="#collapseTwo">
                                <span>How do I vote in an election?</span> <i class="fas fa-plus-circle"></i>
                            </a>
                        </div>
                        <div id="collapseTwo" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                Once logged in, navigate to the "Elections" section, select the ongoing election you want to participate in, and cast your vote. Confirm your choice to ensure your vote is recorded.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed btn" data-toggle="collapse" href="#collapseThree">
                                <span>Can I change my vote after submitting?</span> <i class="fas fa-plus-circle"></i>
                            </a>
                        </div>
                        <div id="collapseThree" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                No, once you have confirmed and submitted your vote, it is final and cannot be changed. Please review your choices carefully before submitting.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed btn" data-toggle="collapse" href="#collapseFour">
                                <span>How is my vote kept anonymous?</span> <i class="fas fa-plus-circle"></i>
                            </a>
                        </div>
                        <div id="collapseFour" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                Our voting system uses end-to-end encryption to ensure your vote is anonymous and secure. Your personal data is not linked to your voting choices.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed btn" data-toggle="collapse" href="#collapseFive">
                                <span>How can I see the results of the election?</span> <i class="fas fa-plus-circle"></i>
                            </a>
                        </div>
                        <div id="collapseFive" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                Once the election is concluded, the results will be published in the "Results" section. You will be notified via email when the results are available.
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Contact Us Section -->
                <div class="container mt-5">
                    <h1>Contact Us!</h1>
                    <form class="row g-3" action="" method="POST">
                        <div class="col-md-6">
                            <label for="firstName" class="form-label">First Name</label>
                            <input type="text" class="form-control" name="name" id="firstName" required>
                        </div>
                        <div class="col-md-6">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" name="Last Name" id="lastName" required>
                        </div>
                        <div class="col-md-8">
                            <label for="emailInfo" class="form-label">E-mail</label>
                            <input type="email" class="form-control" name="email" id="emailInfo" required>
                        </div>
                        <div class="col-md-4">
                            <label for="phoneNumber" class="form-label">Phone Number</label>
                            <input type="text" class="form-control" name="phone" id="phoneNumber" placeholder="+1 (415) 867-5309">
                        </div>
                        <div class="col-md-12">
                            <label for="comments" class="form-label">Comments, questions?</label>
                            <textarea class="form-control" id="comments" name="comments, questions" rows="3" required></textarea>
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="btn">Submit &rarr;</button>
                        </div>
                    </form>
                </div>
            </div>`
    }
},
mounted() {
    let btn = document.getElementById('hamBtn');
    btn.addEventListener('click', this.toggleSidebar);
}
})