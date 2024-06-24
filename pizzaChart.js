<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Gráfico de pizza</title>

  <style>
    .container {
      width: 600px;
      margin: 0 auto;
      position: relative;
      border: 2px solid black; /* Borda preta ao redor do gráfico */
      border-radius: 50%;
      overflow: hidden;
    }

    .chart {
      width: 100%;
      height: 200px;
    }

    .tooltip {
      position: absolute;
      display: none;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 5px;
      border-radius: 5px;
      pointer-events: none;
    }

    legend {
      display: true;
      position: bottom;
      text-align: center;
      color: black;
    }
  </style>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>
</head>
<body>

  <div class="container">
    <canvas id="myChart" class="chart"></canvas>
    <div id="tooltip" class="tooltip"></div>
  </div>

  <script>
    const ctx = document.getElementById("myChart").getContext("2d");

    // Dados
    const data = {
      datasets: [
        {
          data: [20, 15, 10, 10, 5],
          backgroundColor: ["#00FF00", "#FF0000", "#0000FF", "#FF8C00", "#00FFFF"],
        },
      ],
      labels: ["Direito Penal", "Direito Constitucional", "Direito Administrativo", "Legislação Militar", "Raciocínio Lógico"],
    };

    // Calcula o total de questões
    const totalQuestoes = data.datasets[0].data.reduce((a, b) => a + b);

    // Cria um objeto de gráfico de pizza
    const chart = new Chart(ctx, {
      type: "pie",
      data: data,
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom', // Exibe a legenda na parte inferior
            labels: {
              color: 'black', // Cor da legenda em preto
              generateLabels: (chart) => {
                const datasets = chart.data.datasets;
                const { labels } = chart.data;
                return labels.map((label, i) => {
                  const meta = chart.getDatasetMeta(0);
                  const arc = meta.data[i];
                  const custom = arc && arc.custom;
                  const getValueAtIndexOrDefault = (value, index, defaultValue) => {
                    return index > -1 && value !== undefined ? value[index] : defaultValue;
                  };
                  const value = datasets[0].data[i];
                  const percentage = ((value / totalQuestoes) * 100).toFixed(2);
                  return {
                    text: `${label}: ${value} questões (${percentage}%)`,
                    fillStyle: getValueAtIndexOrDefault(datasets[0].backgroundColor, i, '#000000'),
                    strokeStyle: getValueAtIndexOrDefault(datasets[0].borderColor, i, '#000000'),
                    lineWidth: getValueAtIndexOrDefault(datasets[0].borderWidth, i, 0),
                    hidden: isNaN(datasets[0].data[i]) || meta.data[i].hidden,
                    index: i,
                  };
                });
              },
            },
            title: {
              text: `Total de questões: ${totalQuestoes}`,
              color: 'black',
            },
          },
          tooltip: {
            enabled: false,
            callbacks: {
              label: (context) => {
                const label = data.labels[context.dataIndex];
                const value = data.datasets[0].data[context.dataIndex];
                const percentage = ((value / totalQuestoes) * 100).toFixed(2);
                return `${label}: ${value} questões (${percentage}%)`;
              },
            },
          },
        },
        animation: {
          animateRotate: true,
          animateScale: true,
        },
        events: ['mousemove', 'mouseout'],
        onHover: (event, chartElements) => {
          const tooltip = document.getElementById('tooltip');
          if (chartElements.length > 0) {
            const { x, y } = chartElements[0].getCenterPoint();
            const label = data.labels[chartElements[0].index];
            const value = data.datasets[0].data[chartElements[0].index];
            const percentage = ((value / totalQuestoes) * 100).toFixed(2);

            tooltip.innerHTML = `${label}: ${value} questões (${percentage}%)`;
            tooltip.style.left = `${x}px`;
            tooltip.style.top = `${y}px`;
            tooltip.style.display = 'block';
          } else {
            tooltip.style.display = 'none';
          }
        },
      },
    });
  </script>

</body>
</html>
