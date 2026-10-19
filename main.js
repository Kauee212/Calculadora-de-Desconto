function calcularDesconto() {

    // Pegar o valor digitado no input
    let compra = Number(document.getElementById("compra").value);

    let desconto = 0;
    let total = 0;

    // Validar o valor digitado
    if (
        document.getElementById("compra").value === "" ||
        !Number.isFinite(compra) ||
        compra < 0
    ) {
        alert("Digite um valor válido!");
        return;
    }

    // Verificar as condições de desconto
    if (compra > 500) {

        desconto = compra * 0.10;

    } else if (compra > 100) {

        desconto = compra * 0.05;

    } else {

        desconto = 0;

    }

    // Calcular o valor final
    total = compra - desconto;

    // Formatar os valores em reais
    let formato = {
        style: "currency",
        currency: "BRL"
    };

    // Mostrar os resultados no HTML
    document.getElementById("valorCompra").innerText =
        compra.toLocaleString("pt-BR", formato);

    document.getElementById("valorDesconto").innerText =
        desconto.toLocaleString("pt-BR", formato);

    document.getElementById("valorFinal").innerText =
        total.toLocaleString("pt-BR", formato);

}