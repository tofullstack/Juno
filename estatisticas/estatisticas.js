const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});
document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("logoutBtn");

    logoutBtn.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "index.html";
    });
});

var ctx = document.getElementById('GraficoDeLinhas').getContext('2d');

var dados = {
    labels: ['Out 2022', 'Nov 2022', 'Dez 2022', 'Jan 2023', 'Fev 2023', 'Mar 2023', 'Abril 2023', 'Jun 2023', 'Jul 2023', 'Ago 2023', 'Set 2023', 'Out 2023'],
    datasets: [{
        label: 'Pacientes por mes',
        data: [12, 19, 10, 14, 6, 9, 21, 4, 15, 11, 14, 3],
        borderColor: 'blue', // Cor da linha do gráfico
        borderWidth: 2, // Largura da linha do gráfico
        tension: 0.4, // Valor de tensão para suavizar as linhas
        pointRadius: 2,
        hoverRadius: 6,
        borderSkipped: 'top'
    }]
};

var options = {
    scales: {
        y: {
            display: false, 
            beginAtZero: true
        }
    },
};


var Grafico = new Chart(ctx, {
    type: 'line',
    data: dados,
    options: options
});

const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const calendarBody = document.getElementById("calendar-body");
const monthYearElement = document.getElementById("month-year");
const selectedDateElement = document.getElementById("selected-date");
const infoContentElement = document.getElementById("info-content");

function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    calendarBody.innerHTML = "";
    monthYearElement.textContent = `${months[month]} ${year}`;

    let dayCounter = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            if ((i === 0 && j < firstDay) || dayCounter > daysInMonth) {
                cell.textContent = "";
            } else {
                const dayButton = document.createElement("button");
                dayButton.textContent = dayCounter;
                dayButton.addEventListener("click", () => {
                    const selectedDay = parseInt(dayButton.textContent);
                    const selectedDate = new Date(year, month, selectedDay);
                    showInfo(selectedDate);
                });
                cell.appendChild(dayButton);
                dayCounter++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

function showInfo(date) {
    const data = {};

    const startYear = 2023;
    const startMonth = 10; 
    const numberOfDays = 31;

    for (let day = 1; day <= numberOfDays; day++) {
        const formattedDate = `${startYear}-${startMonth.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        data[formattedDate] = `Informações para ${day} de outubro de 2023.`; 
    }

    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    const info = data[formattedDate] || "Nenhuma informação disponível para esta data.";

    const infoWithLineBreak = info + '<br>';

    // Atualiza o conteúdo da info-area com as informações correspondentes à data selecionada
    infoContentElement.textContent = info;
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

generateCalendar(currentYear, currentMonth);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ctxColunas = document.getElementById('GraficoDeColunas').getContext('2d');

var dadosColunas = {
    labels: ['Out 2022', 'Nov 2022', 'Dez 2022', 'Jan 2023', 'Fev 2023', 'Mar 2023', 'Abril 2023', 'Jun 2023', 'Jul 2023', 'Ago 2023', 'Set 2023', 'Out 2023'],
    datasets: [{
        label: '',
        data: [8, 15, 5, 10, 12, 9, 18, 7, 14, 10, 12, 6],
        backgroundColor: 'green',
        borderColor: 'transparent',
        borderWidth: 2 
    }]
};

var optionsColunas = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var GraficoDeColunas = new Chart(ctxColunas, {
    type: 'bar',
    data: dadosColunas,
    options: optionsColunas
});
