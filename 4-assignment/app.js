const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            newTask: '',
            hideTasks: false,
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = '';
        },
        toggleHideTasks() {
            this.hideTasks = !this.hideTasks;
        }
    }
});

app.mount('#assignment');