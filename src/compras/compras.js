const calcularTotal = (ferramentas, comprar) => {
  if (ferramentas.length === 0 || comprar.length === 0) {
    throw new Error("Ambas as listas precisam ter ao menos um item.");
  }

  let total = 0;
  let compras = [];

  for (let i = 0; i < ferramentas.length; i++) {
    for (let x = 0; x < comprar.length; x++) {
      if (ferramentas[i].nome === comprar[x]) {
        total += ferramentas[i].preco;
        compras.push(ferramentas[i].nome);
      }
    }
  }

  if (compras.length === 0) {
    throw new Error("Nenhuma ferramenta desejada encontrada.");
  }

  return `O valor a pagar pelas ferramentas (${compras.join(
    ", "
  )}) é R$ ${total.toFixed(2)}`;
};

module.exports = {
  calcularTotal,
};
