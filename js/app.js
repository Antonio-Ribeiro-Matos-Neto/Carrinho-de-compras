let totalInicical = 0;
limpar();


function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quatidade = document.getElementById('quantidade').value;
    if (produto && quatidade > 0) {
        let preco = quatidade * valorProduto;
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quatidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
            </section>`;
        totalInicical = totalInicical + preco;
        let valorTotal = document.getElementById('valor-total').innerHTML = `<span class="texto-azul" id="valor-total">R$${totalInicical}</span>`;
        document.getElementById('quantidade').value = 0;     
    } else {
        alert('Escolha produtos ou quantidades validos');
    }
}

function limpar() {
    totalInicical = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';
}