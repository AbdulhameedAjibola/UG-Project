let app = new Vue({
    el: '#app',
    data: {
        selectedCandidate: null,
        candidates: [
            {
                id: 1,
                name: 'Bola Tinubu',
                party: 'All Progressives Congress',
                age: 71,
                image: '/Frontend/images/Tinunbu.jpg',
                symbol: '/Frontend/images/APC.jpg'
            },
            {
                id: 2,
                name: 'Atiku Abubakar',
                party: 'Peoples Democratic Party',
                age: 77,
                image: '/Frontend/images/atiku.jpg',
                symbol: '/Frontend/images/PDP.jpg'
            }
            // Add more candidates as needed
        ],
        tenDigitCode: '',
        questionOne: '',
        questionTwo: '',
        questionThree: '',
        isPopupVisible: false,

    },
    methods: {
        submitVote() {
            if (this.tenDigitCode && this.questionOne && this.questionTwo && this.questionThree) {
                // Logic to send the vote data to the backend
                const voteData = {
                    candidateId: this.selectedCandidate,
                    tenDigitCode: this.tenDigitCode,
                    securityQuestions: {
                        questionOne: this.questionOne,
                        questionTwo: this.questionTwo,
                        questionThree: this.questionThree
                    }
                };
                // Replace the following alert with your actual backend submission logic
                alert(`Vote submitted for candidate ${this.selectedCandidate}`);
                this.closePopup();
            } else {
                alert('Please fill in all the fields.');
            }
        },
       
           
        showPopup() {
            if (this.selectedCandidate) {
                this.isPopupVisible = true;
            } else {
                alert('Please select a candidate to vote for.');
            }
        },
        closePopup() {
            this.isPopupVisible = false;
        },
    }
});
