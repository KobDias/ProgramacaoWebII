// function dentro()
// {
//     document.getElementById("meuInput").style.background = "blue";
// }
// function fora(){
//     document.getElementById("meuInput").style.background = "#5c5c5c"
// }

// window.onload = function(){
//     function dentro() {
//         document.getElementById("meuInput").style.background = "purple";
//     }
//     function fora() {
//         document.getElementById("meuInput").style.background = "green";
//     }
//     document.getElementById("meuInput").addEventListener("focus", dentro);
//     document.getElementById("meuInput").addEventListener("blur", fora);
// }

function myFunction()
{
    var x=document.getElementById("fname");
    x.value=x.value.toUpperCase();
}

function logSubmit(event){
    log.textContent = `Formulario submetido ${event.timeStamp}`;
    event.preventDefault();
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);