const app = Vue.createApp({
    data() {
        return {
            name: 'Zhihao',
            age: 21,
            imageUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png',
        }
    },
    methods: {
        generateRandomNumber() {
            const randomNumber = Math.random();
            return randomNumber;
        },
        ageInFiveYears() {
            return this.age + 5;
        },
    }
});

app.mount('#assignment');