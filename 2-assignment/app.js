const app = Vue.createApp({
    data() {
        return {
            textOutput: '',
            confirmTextOutput: '',
        }
    },
    methods: {
        showAlert() {
            alert('Hello');
        },
        setTextOutput(event) {
            this.textOutput = event.target.value;
        },
        confirmSetTextOutput(event) {
            this.confirmTextOutput = event.target.value;
        }
    }
});

app.mount('#assignment');