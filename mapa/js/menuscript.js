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
    