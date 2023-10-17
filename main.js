//alert('coucou')

const landing = document.querySelector('.landing')
let i = 0
let backgrounds = ["bgCocotte", "bgBocaux", "bgPoeleFonte"]
landing.classList.add(backgrounds[i])

function changer() {
    landing.classList.remove(backgrounds[i])
    i += 1
    if (i == backgrounds.length) {i=0}
    landing.classList.add(backgrounds[i])
}
setInterval(changer,1000)

let burger = document.querySelector('.burger')
let burger2 = document.querySelector('.burger2')
burger.addEventListener('click',()=> {
    let menu = document.querySelector('.menu')
    menu.classList.add('ouvert')
    burger2.style.display = 'block'
} )
burger2.addEventListener('click',()=> {

    let menu = document.querySelector('.menu')
    menu.classList.remove('ouvert')
} )