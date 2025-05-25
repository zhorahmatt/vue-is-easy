const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/',
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');


const appEvent = Vue.createApp({
    data() {
        return {
            counter : 0,
            name: '',
        };
    },
    methods: {
        submitForm(event){
            event.preventDefault(); //this can be change by vue default call like
            alert(this.name);
        },
        //event arguments below are default behavior in javascript
        //vue just use the behavior to modification the value
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        },
        /**
         * Add 1 to the counter.
         */
/*************  ✨ Windsurf Command ⭐  *************/
/*******  c2e74a8d-4233-401f-937e-3a56b4bba12d  *******/
        add() {
            this.counter += 1;
        },
        reduce() {
            this.counter -= 1;
        },
    }
});

appEvent.mount('#events');