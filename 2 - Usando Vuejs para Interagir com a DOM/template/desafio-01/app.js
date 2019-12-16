new Vue({
  el: "#desafio",
  data() {
    return {
      nome: "Caio Salgado Nepomuceno",
      idade: 22,
      img:
        "http://images.uncyc.org/pt/thumb/2/24/Quieres%3F.jpg/300px-Quieres%3F.jpg.png"
    };
  },
  methods: {
    zeroOuUm() {
      return Math.random();
    },
    triploIdade() {
      return this.idade * 3;
    }
  }
});
