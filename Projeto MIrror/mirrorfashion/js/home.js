
function validaBusca() {
if (document.querySelector('#q').value == '') {
document.querySelector('#form-busca').style.background = 'red';
return false;
}
}


var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;
var timer; // Apenas declare aqui, não inicie ainda
var controle = document.querySelector('.pause'); 

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % banners.length; 
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

function iniciarTimer() {
    // Inicia o timer UMA única vez e armazena a referência
    timer = setInterval(trocaBanner, 4000); 
}

// Inicia o primeiro e único timer
iniciarTimer(); 

controle.onclick = function() {
    if (controle.className == 'pause') {
        clearInterval(timer); // Agora ele para o único timer existente
        controle.className = 'play';
        // ... (outras lógicas de texto/estilo)
    } else {
        iniciarTimer(); // Inicia um NOVO timer
        controle.className = 'pause';
        // ...
    }
    return false;
};
