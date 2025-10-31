<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Média do Aluno</title>
</head>
<body>
    <h2>Calculadora de Média e Conceito</h2>
    <form onsubmit="calcularMedia(); return false;">
        <input type="number" id="nota1" placeholder="Digite a 1ª nota" step="any" required>
        <input type="number" id="nota2" placeholder="Digite a 2ª nota" step="any" required>
        <input type="number" id="nota3" placeholder="Digite a 3ª nota" step="any" required>
        <button type="submit">Calcular</button>
    </form>
    <textarea id="resultado" rows="4" cols="40" readonly></textarea>

    <script>
        function calcularMedia() {
            const n1 = parseFloat(document.getElementById("nota1").value);
            const n2 = parseFloat(document.getElementById("nota2").value);
            const n3 = parseFloat(document.getElementById("nota3").value);

            if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
                document.getElementById("resultado").value = "Digite todas as notas corretamente.";
                return;
            }

            const media = (n1 + n2 + n3) / 3;
            let conceito = "";

            if (media >= 6) {
                conceito = "APROVADO";
            } else if (media >= 3) {
                conceito = "EXAME";
            } else {
                conceito = "REPROVADO";
            }

            document.getElementById("resultado").value = 
                `Média: ${media.toFixed(2)}\nConceito: ${conceito}`;
        }
    </script>
</body>
</html>
