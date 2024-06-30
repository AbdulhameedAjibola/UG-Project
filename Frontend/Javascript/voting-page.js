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
        ]
    },
    methods: {
        submitVote() {
            if (this.selectedCandidate) {
                // Send the vote to the backend
                fetch('/api/vote', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ candidateId: this.selectedCandidate })
                })
                .then(response => response.json())
                .then(data => {
                    alert('Vote submitted successfully!');
                    // Reset the selected candidate
                    this.selectedCandidate = null;
                })
                .catch(error => {
                    console.error('Error submitting vote:', error);
                });
            } else {
                alert('Please select a candidate before submitting your vote.');
            }
        }
    }
});
