import './style.css'
import CardGame from "../CardGame"


function CardFrontBack(){
    window.cardFrontBack = {}

    window.cardFrontBack.handleClick = (event) =>{
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');
        $cardFrontBack.classList.toggle("-active");
        const turnedCards = document.getElementsByClassName('-active').length

        if(turnedCards >= 2){
            console.log('Limite atingido')
            const cards = [document.getElementsByClassName('-active')[1], document.getElementsByClassName('-active')[0]]
            setTimeout(() => cards.forEach(item => item.classList.remove('-active')), 900)
        }
    }
    
    return `
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
            <div class="front">
                ${CardGame()}
            </div>
            <div class="back">
                ${CardGame("javascript", "logo javascript")}
            </div>
        </article>
    `;
}

export default CardFrontBack;