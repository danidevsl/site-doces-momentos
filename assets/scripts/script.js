document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        product.addEventListener("mouseenter", function() {
            const name = product.dataset.name;
            const size = product.dataset.size;
            const price = product.dataset.price;

            // Exibir informações adicionais (podemos adicionar algum efeito visual aqui se desejar)
            console.log(`Produto: ${name} | Tamanho: ${size} | Preço: R$ ${price}`);
        });
    });
});
