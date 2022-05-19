
/**
 * PASSO A PASSO PARA DESENHAR NO CANVAS 
 * - Quando o mouse CLICAR/BAIXAR, ative o modo desenho
 * - Quando o mouse se MOVER, se o modo desenho estiver ativado, desenhe
 * Só desenha quando estas duas codnições estiverem satisfeitas
 * - Quando o click do mouse LEVANTAR, desative o modo desenho
 */



// INICIAL DATA
let currentColor = '#000000';

let screen = document.querySelector('#tela');
let context = screen.getContext('2d');


// EVENTS
document.querySelectorAll('.colorArea .color').forEach( item =>{
    item.addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

//FUNCTIONS
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color'); // BUSCANDO COR CLICADA
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active'); // Remover borda de "active" da cor que conter
    e.target.classList.add('active'); // adicionar a borda de "active na cor clicada"
};

function mouseDownEvent() {

};

function mouseMoveEvent() {

};

function mouseUpEvent() {

};

