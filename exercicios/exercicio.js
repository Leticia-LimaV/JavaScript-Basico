// function livro() {
//   const nome = "O senhor dos anéis";
//   const ano = 1954;
//   const autor = "J. R. R. Tolkien";

//   const maiusculo = nome.toUpperCase;
//   const total = 2050 - ano;
//   const frase = nome + " por " + autor;

//   objeto = maiusculo + total + frase;
//   return objeto;
// }

// livro(objeto);

function cumprimentar() {
  console.log("Olá, seja bem vindo!");
}

cumprimentar();

function cumprimentarpessoa(nome) {
  console.log("Olá" + nome + "seja bem-vindo");
}

cumprimentarpessoa(" Alícia ");

function somar(a, b) {
  return a + b;
}

let resultado = somar(3, 7);
console.log(resultado);

console.log(resultado * 2);

function mostrarIdade() {
  let idade = 19; // Variável local
  console.log(idade);
}

mostrarIdade(); // 19
