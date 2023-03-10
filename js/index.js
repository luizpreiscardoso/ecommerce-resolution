let ul_produtos = document.querySelector(".cards");

function criarCards(data) {
  for (let i = 0; i < data.length; i++) {
    let produto = data[i];

    let li_cards = document.createElement("li");
    let img = document.createElement("img");
    let categoria = document.createElement("div");
    let categoria_p = document.createElement("p");
    let nome_produto = document.createElement("h2");
    let descricao = document.createElement("p");
    let preco = document.createElement("p");
    let bnt_adc = document.createElement("button");

    categoria.className = "categoria";
    categoria_p.innerHTML = produto.tag;

    li_cards.className = "card";

    img.src = produto.img;
    img.alt = produto.nameItem;

    nome_produto.innerHTML = produto.nameItem;

    descricao.className = "descricao";
    descricao.innerHTML = produto.description;

    preco.className = "preco";
    preco.innerHTML = "R$ " + produto.value + ".00";

    bnt_adc.className = "adc";
    bnt_adc.id = produto.id;
    bnt_adc.innerHTML = produto.addCart;

    li_cards.appendChild(img);
    categoria.appendChild(categoria_p);
    li_cards.appendChild(categoria);
    li_cards.appendChild(nome_produto);
    li_cards.appendChild(descricao);
    li_cards.appendChild(preco);
    li_cards.appendChild(bnt_adc);
    ul_produtos.appendChild(li_cards);
  }
}
criarCards(data);

let botoes_adc = document.querySelectorAll(".adc");
let quantidade = 0;
let valorTotal = 0;

let carrinho_vazio = document.querySelector(".carrinhovazio");

for (let i = 0; i < botoes_adc.length; i++) {
  let adicionar = botoes_adc[i];

  adicionar.addEventListener("click", function (e) {
    let idElemento = e.target.id;
    let id = idElemento;

    let produto = procurarProdutos(id);

    let produtoNoCarrinho = criarCardCarrinho(produto);

    let carrinho = document.querySelector(".lista_carrinho");
    carrinho.appendChild(produtoNoCarrinho);

    quantidade++;
    valorTotal += produto.value;
    document.querySelector("#quantidade").innerHTML = `${quantidade}`;
    document.querySelector("#total").innerHTML = `R$ ` + valorTotal + `,00`;
    carrinho_vazio.style.display = "none";
  });
}

function procurarProdutos(id) {
  for (let i = 0; i < data.length; i++) {
    let mercadoria = data[i];
    if (id == mercadoria.id) {
      return mercadoria;
    }
  }
}

function criarCardCarrinho(produto) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  let div = document.createElement("div");
  let h5 = document.createElement("h5");
  let p = document.createElement("p");
  let button = document.createElement("button");

  li.id = "r_" + produto.id;
  img.src = produto.img;
  div.className = "informacao_carrinho";
  h5.innerHTML = produto.nameItem;
  p.innerHTML = "R$ " + produto.value;
  button.innerHTML = "Remover produto";
  button.id = "rem_" + produto.id;

  button.addEventListener("click", function (e) {
    let li = document.querySelector("#r_" + produto.id);
    li.remove();

    quantidade--;
    valorTotal -= produto.value;
    document.querySelector("#quantidade").innerHTML = `${quantidade}`;
    document.querySelector("#total").innerHTML = `R$ ` + valorTotal + `,00`;
    if (quantidade == 0) {
      carrinho_vazio.style.display = "flex";
    }
  });

  li.appendChild(img);
  div.appendChild(h5);
  div.appendChild(p);
  div.appendChild(button);
  li.appendChild(div);

  return li;
}

let pesquisar = document.querySelector(".pesquisar");

let digiteAqui = document.querySelector(".digite_aqui");

let cards = document.querySelectorAll(".cards li");
console.log(cards);

let nav_acessorios = document.querySelector(".acessorios");

let nav_camisetas = document.querySelector(".camisetas");

let nav_todos = document.querySelector(".todos");

nav_acessorios.addEventListener("click", function (e) {
  for (let i = 0; i < cards.length; i++) {
    let li = cards[i];

    if (
      li.children[1].innerText.toLocaleLowerCase() ==
      nav_acessorios.innerText.toLocaleLowerCase()
    ) {
      li.style.display = "flex";
    } else {
      li.style.display = "none";
    }
  }
});

nav_camisetas.addEventListener("click", function (e) {
  for (let i = 0; i < cards.length; i++) {
    let li = cards[i];

    if (
      li.children[1].innerText.toLocaleLowerCase() ==
      nav_camisetas.innerText.toLocaleLowerCase()
    ) {
      li.style.display = "flex";
    } else {
      li.style.display = "none";
    }
  }
});

nav_todos.addEventListener("click", function (e) {
  for (let i = 0; i < cards.length; i++) {
    let li = cards[i];
    li.style.display = "flex";
  }
});

pesquisar.addEventListener("click", function (e) {
  if (digiteAqui.value != "") {
    for (let i = 0; i < cards.length; i++) {
      let li = cards[i];
      if (
        li.children[2].innerText.toLocaleLowerCase() ==
        digiteAqui.value.toLocaleLowerCase()
      ) {
        li.style.display = "flex";
      } else {
        li.style.display = "none";
      }
    }
  } else {
    for (let i = 0; i < cards.length; i++) {
      let li = cards[i];
      li.style.display = "flex";
    }
    alert("Digite aqui sua pesquisa");
  }
});
