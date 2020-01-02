new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('toma um alerta')
        },
        storeInput(event) {
            this.valor = event.target.value
        }
    },
})