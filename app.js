const app= Vue.createApp({
    el: '#inputForm',
    data() {
        return {
            numbers: [],
            max: null,
            min: null,
            avg: null
        }
    },
    methods: {

        compute: 
        function (e) {
            e.preventDefault();
            if(parseInt(this.number)!==0) {
                this.numbers.push(parseInt(this.number));
                console.log(numbers);
                document.getElementById('numbers').style.visibility="visible";
                this.number = '';
            }
            else {
                document.getElementById('results').style.visibility="visible";
                this.max = Math.max(...this.numbers);
                this.min = Math.min(...this.numbers);
                this.avg = this.numbers.reduce((a,b)=> a+b,0)/this.numbers.length
            }
        }
    }
})

app.mount('#app')