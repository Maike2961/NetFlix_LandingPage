let openBox = document.querySelectorAll(".more")

openBox.forEach((item) => {
    item.addEventListener('click', abrir)
})

function abrir(event) {
    const botao = event.currentTarget
    const boxAbout = botao.parentElement.parentElement
    console.log(boxAbout)
    const boxabout = boxAbout.querySelector(".box-about")
    botao.classList.toggle('active')
    
    if(botao.classList.contains("active")){
        boxabout.style.maxHeight = '200px'
        boxabout.scrollIntoView({behavior: "smooth"})
    }else{
        boxabout.style.maxHeight = '0px'
    }
}

