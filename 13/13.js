
//ELIMINAR CARD

const deleteButton = document.querySelectorAll('[data-deletecard]');

function deleteCard(event){
    event.preventDefault();

    if (confirm('¿Está seguro que quiere eliminar a esta mascota?')) {
        const card = document.getElementById(this.dataset.deletecard);
        card.parentElement.removeChild(card);
    }
}

 [].forEach.call(deleteButton, function(button){
    button.addEventListener('click', deleteCard, false);
 });

 

 /// AGREGAR CARD
 
 const evento = document.getElementById('agregarinfo');
 const info = document.getElementById('containerDelete');

 evento.addEventListener('click',()=>{
     
     console.log(info);
 })



