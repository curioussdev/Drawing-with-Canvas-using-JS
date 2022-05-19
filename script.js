// INICIAL DATA
let currentColor = '#000000';

let screen = document.querySelector('#tela');
let context = screen.getContext('2d');


// EVENTS
document.querySelectorAll('.colorArea .color').forEach( item =>{
    item.addEventListener('click', colorClickEvent);
});



//FUNCTIONS
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color'); // BUSCANDO COR CLICADA
    currentColor = color;



    document.querySelector('.color.active').classList.remove('active'); // Remover borda de "active" da cor que conter
    e.target.classList.add('active'); // adicionar a borda de "active na cor clicada"
}