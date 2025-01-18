const canvas = document.getElementById('grafo');
const ctx = canvas.getContext('2d');
const fileInput = document.getElementById('fileInput');
const loadGraphButton = document.getElementById('loadGraph');

let graphData = {};
let connectionsCount = {};

// Função para desenhar linhas no grafo
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = '#6c757d';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Função para desenhar os nós do grafo
function drawNode(x, y, label) {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = '#a8d5e2';
    ctx.fill();
    ctx.strokeStyle = '#6c757d';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#000';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(label, x, y + 5);
}

// Função para plotar o grafo
function plotGraph(graphData) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const positions = {};
    const keys = Object.keys(graphData);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200;

    // Calcula as posições dos nós (distribuídos em círculo)
    keys.forEach((node, index) => {
        const angle = (2 * Math.PI / keys.length) * index;
        positions[node] = {
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle),
        };
    });

    // Desenha as conexões (arestas)
    for (const [node, edges] of Object.entries(graphData)) {
        edges.forEach((edge) => {
            drawLine(
                positions[node].x,
                positions[node].y,
                positions[edge].x,
                positions[edge].y
            );
        });
    }

    // Desenha os nós (vértices)
    for (const [node, position] of Object.entries(positions)) {
        drawNode(position.x, position.y, node);
    }
}

// Função para processar o arquivo
function processFile(content) {
    const lines = content.split('\n').filter(line => line.trim() !== '');
    graphData = {};
    connectionsCount = {};

    lines.forEach((line) => {
        const [from, to] = line.split(' - ').map(name => name.trim());
        if (!graphData[from]) graphData[from] = [];
        if (!graphData[to]) graphData[to] = [];
        if (!graphData[from].includes(to)) graphData[from].push(to);
        if (!graphData[to].includes(from)) graphData[to].push(from);

        connectionsCount[from] = (connectionsCount[from] || 0) + 1;
        connectionsCount[to] = (connectionsCount[to] || 0) + 1;
    });
}

/// Função para plotar o gráfico de barras
function plotBarChart(data) {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
        const dataTable = new google.visualization.DataTable();
        dataTable.addColumn('string', 'Pessoa');
        dataTable.addColumn('number', 'Conexões');
        dataTable.addColumn({ type: 'string', role: 'tooltip' });

        for (const [person, count] of Object.entries(data)) {
            dataTable.addRow([person, count, `${person}: ${count} conexão(ões)`]);
        }

        const options = {
            title: 'Número de Conexões por Pessoa',
            hAxis: { title: 'Pessoa', slantedText: true, slantedTextAngle: 45 },
            vAxis: { title: 'Conexões' },
            tooltip: { isHtml: true },
            colors: ['#a8d5e2'],
            width: 1000,
            height: 400, 
        };

        const chart = new google.visualization.ColumnChart(
            document.getElementById('chart_div')
        );
        chart.draw(dataTable, options);
    });
}


// Evento para carregar e processar o arquivo
loadGraphButton.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            processFile(e.target.result);
            plotGraph(graphData);
            plotBarChart(connectionsCount);
        };
        reader.readAsText(file);
    } else {
        alert('Selecione um arquivo!');
    }
});
