var pizza = document.getElementById('linkPizza')
var salada = document.getElementById('linkSalada')
var iniciante = document.getElementById('linkIniciante')

let menuPizza = document.getElementById('menuPizza')
let menuSalada = document.getElementById('menuSalada')
let menuIniciante = document.getElementById('menuIniciante')

menuSalada.style.display = 'none'
menuIniciante.style.display = 'none'

function openMenu(){
    if(this.innerText == 'Pizza'){
        menuPizza.style.display = 'block'
        menuSalada.style.display = 'none'
        menuIniciante.style.display = 'none'
    }else if(this.innerText == 'Salads'){
        menuPizza.style.display = 'none'
        menuSalada.style.display = 'block'
        menuIniciante.style.display = 'none'
    }else{
        menuPizza.style.display = 'none'
        menuSalada.style.display = 'none'
        menuIniciante.style.display = 'block'
    }
}

pizza.addEventListener('click',openMenu)
salada.addEventListener('click',openMenu)
iniciante.addEventListener('click',openMenu)