function livro(nome, ano, autor) {
  const nomeMaiusculo = nome.toUpperCase();
  const anos = 2050 - ano;
  const frase = nomeMaiusculo + "por" + autor;

  return { nomeMaiusculo, anos, frase };
}

const fraseRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(fraseRetorno.frase);
