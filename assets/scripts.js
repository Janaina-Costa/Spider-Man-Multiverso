function handleMouseEnter(event){
    this.classList.add('s-card-hovered')
    document.body.id = `${this.id}-hovered`
}

function handleMouseLeave(event){
    this.classList.remove('s-card-hovered')
    document.body.id = ``
}



function addEventsToCards(){
    const cardEel = document.querySelectorAll('.s-card')
    cardEel.forEach(card=>{
        card.addEventListener('mouseenter',handleMouseEnter)
        card.addEventListener('mouseleave',handleMouseLeave)
        
    })
}

document.addEventListener('DOMContentLoaded',addEventsToCards, false)