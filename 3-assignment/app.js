const app = Vue.createApp({
    data() {
        return {
            result: 0,
            expectedResult: 37,
            textResult: "",
        }
    },
    watch: {
        
    },
    methods: {
        add(number) {
            this.result += number;
            console.log(number, this.result);
            if (this.result === this.expectedResult) {
                this.textResult = "Correct!";
            } else if (this.result > this.expectedResult) {
                this.textResult = "Too Much!";
            } else {
                this.textResult = "Not there yet";
            }
        },
        add1() {
            this.result += 1;
        }

    }
});

app.mount('#assignment');