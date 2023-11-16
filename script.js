function maximizeVolume(ladoPapelao, unit) {
    // Convertendo a unidade para metros
    const conversionFactor = unit === 'cm' ? 0.01 : 1.0;

    // Área total do papelão
    const areaPapelao = ladoPapelao ** 2;

    // Definindo a função para o volume
    function volume(x) {
        return x * (ladoPapelao - 2 * x) ** 2;
    }

    // Encontrando os pontos críticos (onde a derivada é zero)
    function findCriticalPoints() {
        const criticalPoints = [];
        for (let x = 0; x <= ladoPapelao / 2; x += 0.01) {
            criticalPoints.push(x);
        }
        return criticalPoints;
    }

    // Encontrando a solução que maximiza o volume
    function findMaxVolumeSolution(criticalPoints) {
        let maxVolume = -Infinity;
        let maxX;

        for (const x of criticalPoints) {
            const currentVolume = volume(x);
            if (currentVolume > maxVolume) {
                maxVolume = currentVolume;
                maxX = x;
            }
        }

        return { maxX, maxVolume };
    }

    // Calculando as dimensões da caixa
    const { maxX, maxVolume } = findMaxVolumeSolution(findCriticalPoints());
    const ladoCaixa = (ladoPapelao - 2 * maxX) / conversionFactor;
    const alturaCaixa = maxX / conversionFactor;
    const larguraCaixa = ladoCaixa;

    // Calculando o tamanho do quadrado removido
    const ladoQuadradoRemovido = 2 * maxX / conversionFactor;

    // Exibindo os resultados
    console.log(`Dimensões que maximizam o volume:`);
    console.log(`Caixa: Lado = ${ladoCaixa} ${unit}, Altura = ${alturaCaixa} ${unit}, Largura = ${larguraCaixa} ${unit}`);
    console.log(`Quadrado Removido: Lado = ${ladoQuadradoRemovido} ${unit}`);
    console.log(`Volume máximo: ${maxVolume} ${unit}³`);

    // Plotando o gráfico (não há uma equivalente direta para plotar gráficos em JavaScript aqui)
}

// Solicitando o tamanho do papelão ao usuário
const ladoPapelao = parseFloat(prompt("Digite o tamanho da folha de papelão: "));
const unitChoice = prompt("Escolha a unidade (cm/m): ").toLowerCase();

// Verificando se a escolha da unidade é válida
if (unitChoice !== 'cm' && unitChoice !== 'm') {
    console.log("Escolha de unidade inválida. Por favor, escolha 'cm' ou 'm'.");
} else {
    maximizeVolume(ladoPapelao, unitChoice);
}

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        // ... (como antes)
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'x',
                    color: '#333' // cor do título
                },
                grid: {
                    display: false // desativar linhas de grade para o eixo x
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Volume',
                    color: '#333' // cor do título
                },
                grid: {
                    color: '#ddd' // cor das linhas de grade para o eixo y
                }
            }
        }
    }
});
