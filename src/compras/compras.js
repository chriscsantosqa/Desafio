const calcularTotal = (ferramentas, comprar) => {
  if (ferramentas.length === 0 || comprar.length === 0) {
    throw new Error("Ambas as listas precisam ter ao menos um item.");
  }

  let valorCompras = 0;
  let listaCompras = [];

  for (let i = 0; i < ferramentas.length; i++) {
    for (let x = 0; x < comprar.length; x++) {
      if (ferramentas[i].nome === comprar[x]) {
        valorCompras += ferramentas[i].preco;
        listaCompras.push(ferramentas[i].nome);
      }
    }
  }

  if (listaCompras.length === 0) {
    throw new Error("Nenhuma ferramenta desejada encontrada.");
  }

  return `O valor a pagar pelas ferramentas (${listaCompras.join(
    ", "
  )}) é R$ ${valorCompras.toFixed(2)}`;
};

module.exports = {
  calcularTotal,
};
