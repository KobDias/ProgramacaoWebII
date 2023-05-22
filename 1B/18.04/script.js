// 01 - KeyDown
// var input = document.querySelector('input');
//         var mostrador = document.querySelector('#Mostrador');
//         var enviado = document.querySelector('#enviado');
//         input.addEventListener('keydown', function(e) {
//             if (e.code == 'Enter'){
//                 e.preventDefault();
//                 return enviar(this.value);
//             }
//             mostrador.innerHTML = this.value.split('').reverse().join('');
//         });

// 03
        // function enviar(texto){
        //     enviado.innerHTML = 'Enviado: ' + texto;
        // }

        // const input = document.querySelector("input");
        // const log = document.getElementById("log");

        // input.addEventListener("keyup", logKey);

        // function logKey(e) {
        //     log.textContent += `${e.code}`
        // }

// 04
    // LISTA NA TELA AO CARREGAR
    // let nomes = ["Marco", "Marcelo", "Daniel Duarte", "Daniel Simões", "Arnaldo", "Lucian"];

    // // selec elemento de tela
    // const ul = document.querySelector("ul");

    // for (var i = 0; i < nomes.length; i++){
    //     const li = document.createElement("li");
    //     li.innerText = nomes[i];
    //     ul.appendChild(li);
    // }

    // let inputTexto = document.querySelector(".inputTexto");

    // function filtrarValores(event) {
    //     // valor do input pego
    //     console.log(inputTexto.value);

    //     let nomesFiltrado = [];
    //     if (inputTexto.value != ""){
    //         // limpoar
    //         ul.innerText = "";
        
    //         // filtrar
    //         for (var i = 0; i < nomes.length; i++){
    //             if (nomes[i].includes(inputTexto.value)){
    //                 nomesFiltrado.push(nomes[i]);
    //             }
    //     }
    //     for (var i = 0; i < nomesFiltrado.length; i++){
    //         const li = document.createElement("li");
    //         li.innerText = nomesFiltrado[i];
    //         ul.appendChild(li);
    //     }
    //     }
    //     else{
    //         //limpa
    //         ul.innerText = "";
    //         //mostra nomes
    //         for (var i = 0; i < nomes.length; i++){
    //             const li = document.createElement("li");
    //             li.innerText = nomes[i];
    //             ul.appendChild(li);
    //         }
    //     }
    // }

    // 05 - KeyPress

        const log = document.getElementById("log");
        const input = document.querySelector("input");

        input.addEventListener("keypress", logKey);

        function logKey(e){
            log.textContent += ` ${e.code}`;
        }