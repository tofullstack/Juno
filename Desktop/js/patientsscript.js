/*Porção referente à barra lateral*/
const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    });

    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
    });
    document.addEventListener("DOMContentLoaded", function() {
        const logoutBtn = document.getElementById("logoutBtn");
    
        logoutBtn.addEventListener("click", function(event) {
            event.preventDefault(); 
            window.location.href = "index.html";
        });
    });

/*Código referente a Lista de Pacientes */
const List = [
    {
        pacientName: 'Ana Santos',
        pacientNumber: '400001',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Em dia',
        testStatus: 'Pendente',
        pacientStatus: 'Pendente'
    },
    {
        pacientName: 'Beatriz Oliveira',
        pacientNumber: '400002',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Em dia',
        testStatus: 'Em dia',
        pacientStatus: 'Ativo'
    },
    {
        pacientName: 'Clara Pereira',
        pacientNumber: '400003',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Em dia',
        testStatus: 'Pendente',
        pacientStatus: 'Pendente'
    },
    {
        pacientName: 'Daniela Martins',
        pacientNumber: '400004',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Pendente',
        testStatus: 'Em dia',
        pacientStatus: 'Ativo'
    },
    {
        pacientName: 'Elisa Lima',
        pacientNumber: '400005',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Pendente',
        testStatus: 'Pendente',
        pacientStatus: 'Inativo'
    },
    {
        pacientName: 'Fernanda Sousa',
        pacientNumber: '400006',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Em dia',
        testStatus: 'Em dia',
        pacientStatus: 'Ativo'
    },
    {
        pacientName: 'Gabriela Rocha',
        pacientNumber: '400007',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Pendente',
        testStatus: 'Em dia',
        pacientStatus: 'Pendente'
    },
    {
        pacientName: 'Helena Vieira',
        pacientNumber: '400008',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Pendente',
        testStatus: 'Pendente',
        pacientStatus: 'Inativo'
    },
    {
        pacientName: 'Isabela Alves',
        pacientNumber: '400009',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Em dia',
        testStatus: 'Pendente',
        pacientStatus: 'Pendente'
    },
    {
        pacientName: 'Julia Fernandes',
        pacientNumber: '400010',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Em dia',
        testStatus: 'Em dia',
        pacientStatus: 'Ativo'
    },
    {
        pacientName: 'Larissa Silva',
        pacientNumber: '400011',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Em dia',
        testStatus: 'Pendente',
        pacientStatus: 'Pendente'
    },
    {
        pacientName: 'Mariana Costa',
        pacientNumber: '400012',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Pendente',
        testStatus: 'Pendente',
        pacientStatus: 'Inativo'
    },
    {
        pacientName: 'Natalia Santos',
        pacientNumber: '400013',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Pendente',
        testStatus: 'Em dia',
        pacientStatus: 'Ativo'
    },
    {
        pacientName: 'Olivia Lima',
        pacientNumber: '400014',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Em dia',
        testStatus: 'Em dia',
        pacientStatus: 'Ativo'
    },
    {
        pacientName: 'Patricia Rodrigues',
        pacientNumber: '400015',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Em dia',
        testStatus: 'Pendente',
        pacientStatus: 'Pendente'
    },
    {
        pacientName: 'Raquel Pereira',
        pacientNumber: '400016',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Pendente',
        testStatus: 'Pendente',
        pacientStatus: 'Pendente'
    },
    {
        pacientName: 'Sofia Mendes',
        pacientNumber: '400017',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Pendente',
        testStatus: 'Em dia',
        pacientStatus: 'Inativo'
    },
    {
        pacientName: 'Valentina Almeida',
        pacientNumber: '400018',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Pendente',
        testStatus: 'Pendente',
        pacientStatus: 'Ativo'
    },
    {
        pacientName: 'Yasmin Ribeiro',
        pacientNumber: '400019',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Pendente',
        testStatus: 'Pendente',
        pacientStatus: 'Inativo'
    },
    {
        pacientName: 'Alice Santos',
        pacientNumber: '400020',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Em dia',
        testStatus: 'Pendente',
        pacientStatus: 'Pendente'
    },
    {
        pacientName: 'Bianca Oliveira',
        pacientNumber: '400021',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Em dia',
        testStatus: 'Pendente',
        pacientStatus: 'Pendente'
    },
    {
        pacientName: 'Carla Pereira',
        pacientNumber: '400022',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Em dia',
        testStatus: 'Em dia',
        pacientStatus: 'Ativo'
    },
    {
        pacientName: 'Daniela Martins',
        pacientNumber: '400023',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Em dia',
        testStatus: 'Pendente',
        pacientStatus: 'Pendente'
    },
    {
        pacientName: 'Elisa Lima',
        pacientNumber: '400024',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Pendente',
        testStatus: 'Em dia',
        pacientStatus: 'Ativo'
    },
    {
        pacientName: 'Fernanda Sousa',
        pacientNumber: '400025',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Pendente',
        testStatus: 'Pendente',
        pacientStatus: 'Inativo'
    },
    {
        pacientName: 'Gabriela Rocha',
        pacientNumber: '400026',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Em dia',
        testStatus: 'Em dia',
        pacientStatus: 'Ativo'
    },
    {
        pacientName: 'Helena Vieira',
        pacientNumber: '400027',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Pendente',
        testStatus: 'Pendente',
        pacientStatus: 'Inativo'
    },
    {
        pacientName: 'Isabela Alves',
        pacientNumber: '400028',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Em dia',
        testStatus: 'Pendente',
        pacientStatus: 'Pendente'
    },
    {
        pacientName: 'Julia Fernandes',
        pacientNumber: '400029',
        preNatalStatus: 'Em dia',
        dentistStatus: 'Em dia',
        testStatus: 'Em dia',
        pacientStatus: 'Ativo'
    },
    {
        pacientName: 'Larissa Silva',
        pacientNumber: '400030',
        preNatalStatus: 'Pendente',
        dentistStatus: 'Em dia',
        testStatus: 'Pendente',
        pacientStatus: 'Pendente'
    },
]
// salvando a lista no localStorage
localStorage.setItem('pacientList', JSON.stringify(List));

function generateTableContent(data) {
    return data.map(order => `
        <tr>
            <td>${order.pacientName}</td>
            <td>${order.pacientNumber}</td>
            <td>${order.preNatalStatus}</td>
            <td>${order.dentistStatus}</td>
            <td>${order.testStatus}</td>
            <td class="${order.pacientStatus === 'Inativo' ? 'danger' : order.pacientStatus === 'Pendente' ? 'medium' : 'success'}">${order.pacientStatus}</td>
            <td class="primary">Detalhes</td>
        </tr>
    `).join('');
}
// selecionando os elementos tanto da tela principal quanto do modal
const mainTableBody = document.querySelector('.pacient-order table tbody');

// enviando o conteudo para a tela principal e para o modal
mainTableBody.innerHTML = generateTableContent(List);
