<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Pagamento do Produto</title>
</head>
<body>
    <h2>Calculadora de Pagamento</h2>
    <form onsubmit="calcularPagamento(); return false;">
        <input type="number" id="preco" placeholder="Digite o preço do produto" step="any" required>
        <select id="condicao" required>
            <option value="">Selecione a condição de pagamento</option>
            <option value="1">À vista (10% de desconto)</option>
            <option value="2">Cartão (5% de desconto)</option>
            <option value="3">Parcelado (10% de aumento)</option>
        </select>
        <button type="submit">Calcular</button>
    </form>
    <textarea id="resultado" rows="4" cols="40" readonly></textarea>

    <script>
        function calcularPagamento() {
            const preco = parseFloat(document.getElementById("preco").value);
            const condicao = document.getElementById("condicao").value;
            let valorFinal = 0;
            let mensagem = "";

            if (isNaN(preco) || preco <= 0) {
                document.getElementById("resultado").value = "Digite um preço válido.";
                return;
            }

            if (condicao === "1") {
                valorFinal = preco * 0.9;
                mensagem = "Pagamento à vista com 10% de desconto.";
            } else if (condicao === "2") {
                valorFinal = preco * 0.95;
                mensagem = "Pagamento no cartão com 5% de desconto.";
            } else if (condicao === "3") {
                valorFinal = preco * 1.1;
                mensagem = "Pagamento parcelado com 10% de aumento.";
            } else {
                document.getElementById("resultado").value = "Selecione uma condição de pagamento válida.";
                return;
            }

            document.getElementById("resultado").value = 
                `Preço original: R$ ${preco.toFixed(2)}\n${mensagem}\nValor a pagar: R$ ${valorFinal.toFixed(2)}`;
        }
    </script>
</body>
</html>
