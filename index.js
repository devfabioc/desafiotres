// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      // Determinando o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "sem ataque definido";
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe Heroi
  let heroi1 = new Heroi("Aragorn", 35, "guerreiro");
  let heroi2 = new Heroi("Gandalf", 150, "mago");
  let heroi3 = new Heroi("Bruce Lee", 32, "monge");
  let heroi4 = new Heroi("Hanzo", 28, "ninja");
  
  // Chamando o método atacar para cada herói
  heroi1.atacar();  // Saída: O guerreiro atacou usando espada
  heroi2.atacar();  // Saída: O mago atacou usando magia
  heroi3.atacar();  // Saída: O monge atacou usando artes marciais
  heroi4.atacar();  // Saída: O ninja atacou usando shuriken
  