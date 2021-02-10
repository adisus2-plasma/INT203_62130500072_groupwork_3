const app = {
    data() {
        return {
            tasks: [{info: 'Learing INT203 Client-side Web Programming 2', Image: './images/cityInAfterNoon.jpg',done: false},
                    {info: 'Building modern websites with tailwindcss', Image: './images/cityInSunset.jpg' ,done: false},
                    {info: 'Developer web applications fast and hassle free with Spring', Image: './images/cityInNight.jpg' ,done: false}
                ]
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    },
    computed: {
        countUndone(){
            return this.tasks.filter( t => !t.done ).length
        }
        
}
}
Vue.createApp(app).mount('#app')
