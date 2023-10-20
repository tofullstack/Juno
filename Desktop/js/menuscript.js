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

    const List = [
        {
            pacientName: 'Emily Ticotico',
            pacientNumber: '250287',
            preNatalStatus: 'Em dia',
            dentistStatus: 'Em dia',
            testStatus: 'Pendente',
            pacientStatus: 'Pendente'
        },
        {
            pacientName: 'Gabriela Zelda',
            pacientNumber: '267487',
            preNatalStatus: 'Em dia',
            dentistStatus: 'Em dia',
            testStatus: 'Em dia',
            pacientStatus: 'Ativo'
        },
        {
            pacientName: 'Maria Leviatan',
            pacientNumber: '284509',
            preNatalStatus: 'Pendente',
            dentistStatus: 'Em dia',
            testStatus: 'Pendente',
            pacientStatus: 'Pendente'
        },
        {
            pacientName: 'Suzane Garimpa',
            pacientNumber: '292823',
            preNatalStatus: 'Pendente',
            dentistStatus: 'Pendente',
            testStatus: 'Pendente',
            pacientStatus: 'Inativo'
        }
    ]

    List.forEach(order =>{
        const tr = document.createElement('tr');
        const trContent = `
            <td>${order.pacientName}</td>
            <td>${order.pacientNumber}</td>
            <td>${order.preNatalStatus}</td>
            <td>${order.dentistStatus}</td>
            <td>${order.testStatus}</td>

            <td class="${order.pacientStatus === 'Inativo' ? 'danger' : order.pacientStatus === 'Pendente' ? 'medium' : 'sucess'}">${order.pacientStatus}</td>

            <td class="primary">Detalhes</td>`;

            tr.innerHTML = trContent;
            // document.querySelector('#demo-modal').appendChild(tr);
            document.querySelector('table tbody').appendChild(tr);


    });
    
document.getElementById("menu-btn").onclick = 
function openNotifBox(){
    document.getElementById("menu-btn").onclick = function () {
        var menu = document.getElementById("mini-notif");
        if (menu.style.display === "block") {
          menu.style.display = "none"; 
        } 
        else {
          menu.style.display = "block"; 
        }
      };

    }
      
