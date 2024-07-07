new Vue({
    el: '#app',
    data: {
        activeElections: [],
        newElection: {
            title: '',
            endDate: '',
            candidates: [
                { name: '', age: '', party: '', pictureUrl: '', partySymbolUrl: '' }
            ]
        }
    },
    methods: {
        addCandidate() {
            this.newElection.candidates.push({ name: '', age: '', party: '', pictureUrl: '', partySymbolUrl: '' });
        },
        removeCandidate(index) {
            this.newElection.candidates.splice(index, 1);
        },
        handleFileChange(event, index, type) {
            const file = event.target.files[0];
            if (type === 'picture') {
                this.newElection.candidates[index].picture = file;
            } else if (type === 'partySymbol') {
                this.newElection.candidates[index].partySymbol = file;
            }
        },
        createElection() {
            // Check if the required fields are filled
            if (this.newElection.title && this.newElection.endDate) {
                // Create a new FormData object
                const formData = new FormData();
                formData.append('title', this.newElection.title);
                formData.append('endDate', this.newElection.endDate);
        
                // Append each candidate's details to the FormData object
                this.newElection.candidates.forEach((candidate, index) => {
                    formData.append(`candidates[${index}][name]`, candidate.name);
                    formData.append(`candidates[${index}][age]`, candidate.age);
                    formData.append(`candidates[${index}][party]`, candidate.party);
                    formData.append(`candidates[${index}][picture]`, candidate.picture);
                    formData.append(`candidates[${index}][partySymbol]`, candidate.partySymbol);
                });
        
                // Handle the form submission logic (you need to replace this with your actual submission logic)
                console.log(formData);
        
                // Add the new election to the activeElections array
                const newId = this.activeElections.length + 1;
                this.activeElections.push({
                    id: newId,
                    title: this.newElection.title,
                    endDate: this.newElection.endDate
                });
        
                // Reset the newElection fields
                this.newElection.title = '';
                this.newElection.endDate = '';
            } else {
                // Handle the case where required fields are missing
                console.log("Title and End Date are required to create an election.");
            }
        },
        deleteElection(id) {
            this.activeElections = this.activeElections.filter(election => election.id !== id);
        }
        },
        
    

});
