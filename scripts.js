const enlaces = document.querySelector('body');

console.log(enlaces);

enlaces.addEventListener('click', function(e){
    e.preventDefault()
})

const gifImages = document.querySelector('body');

console.log(gifImages);

gifImages.addEventListener('click', function(e){
     e.target.src = 'assets/magic-1.gif';
})

//click

const parrafo = document.querySelectorAll('section p')

 console.log(parrafo);


 for (let i = 0; i < parrafo.length; i++) {
    parrafo[i].addEventListener('click', function(){
        parrafo[i].style.color = 'red';
        parrafo[i].style.backgroundColor = 'black'
    })
    
 };

 const bloqueSeccion = document.querySelectorAll('section')

 console.log(bloqueSeccion);

 for (let i = 0; i < bloqueSeccion.length; i++) {
    bloqueSeccion[i].addEventListener('click', function(){
        bloqueSeccion[i].style.backgroundColor = 'yellow'
    })
    
 };

 const bloqueArticulo = document.querySelectorAll('article')

 console.log(bloqueArticulo);

 for (let i = 0; i < bloqueArticulo.length; i++) {
    bloqueArticulo[i].addEventListener('click', function(){
        bloqueArticulo[i].style.backgroundColor = 'purple'
    })
    
 };


 //mouseover

 const gifImages2 = document.querySelector('body');

console.log(gifImages2);

gifImages2.addEventListener('mouseover', function(e){
     e.target.src = 'assets/abracadabra.gif';
});

const parrafoOver = document.querySelectorAll('section p')

 console.log(parrafoOver);

 for (let i = 0; i < parrafoOver.length; i++) {
    parrafoOver[i].addEventListener('mouseover', function(){
        parrafoOver[i].style.color = 'green';
        parrafoOver[i].style.backgroundColor = 'pink'
    })
    
 };


 const bloqueSeccionOver = document.querySelectorAll('section')

 console.log(bloqueSeccionOver);

 for (let i = 0; i < bloqueSeccionOver.length; i++) {
    bloqueSeccionOver[i].addEventListener('mouseover', function(){
        bloqueSeccionOver[i].style.backgroundColor = 'orange'
    })
    
 };

 const bloqueArticuloOver = document.querySelectorAll('article')

 console.log(bloqueArticuloOver);

 for (let i = 0; i < bloqueArticuloOver.length; i++) {
    bloqueArticuloOver[i].addEventListener('mouseover', function(){
        bloqueArticuloOver[i].style.backgroundColor = 'aquamarine'
    })
    
 };


 //premium

 