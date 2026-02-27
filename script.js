let carrinho = [];
let totalItens = 0;
let valorTotal = 0;

function adicionarCarrinho(nome, valor) {

  carrinho.push({
    nome: nome,
    valor: valor
  });

  atualizarCarrinho();
}

function removerItem(index) {

  // Subtrai valores antes de remover
  totalItens--;
  valorTotal -= carrinho[index].valor;

  // Remove do array
  carrinho.splice(index, 1);

  atualizarCarrinho();
}

function atualizarCarrinho() {

  totalItens = carrinho.length;
  valorTotal = 0;

  const lista = document.getElementById("listaCarrinho");
  lista.innerHTML = "";

  carrinho.forEach(function(item, index) {

    valorTotal += item.valor;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nome} - R$ ${item.valor}
      <button onclick="removerItem(${index})">❌</button>
    `;

    lista.appendChild(li);
  });

  document.getElementById("contador").textContent = totalItens;
  document.getElementById("total").textContent = valorTotal;
}

