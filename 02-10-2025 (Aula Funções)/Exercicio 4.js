<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Área do Retângulo</title>
</head>
<body>
    <h2>Calculadora de Área do Retângulo</h2>
    <form onsubmit="calcularArea(); return false;">
        <input type="number" id="base" placeholder="Digite a base" step="any" required>
        <input type="number" id="altura" placeholder="Digite a altura" step="any" required>
        <button type="submit">Calcular</button>
    </form>
    <textarea id="resultado" rows="3" cols="40" readonly></textarea>

    <script>
        function calcularArea() {
            const base = parseFloat(document.getElementById("base").value);
            const altura = parseFloat(document.getElementById("altura").value);
            let resultado = "";

            if (isNaN(base) || isNaN(altura)) {
                resultado = "Por favor, digite valores válidos para base e altura.";
            } else {
                const area = base * altura;
                resultado = `A área do retângulo é ${area.toFixed(2)}.`;
            }

            document.getElementById("resultado").value = resultado;
        }
    </script>
</body>
</html>
