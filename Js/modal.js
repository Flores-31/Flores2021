let imagenes = document.querySelectorAll('.servicios__img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');

for (let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener('click', function(r){
    modal.classList.toggle("modal--open");
    let src = r.target.src;
    img.setAttribute("src", src);
    });
}
boton.addEventListener('click',function(){
    modal.classList.toggle("modal--open");
});