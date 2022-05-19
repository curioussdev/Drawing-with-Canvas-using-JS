let currentColor = '#000000';

document.querySelectorAll('.colorArea .color').forEach( item =>{
    item.addEventListener('click', colorClickEvent);
});

function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color'); // BUSCANDO COR CLICADA
    currentColor = color;
}