import './style.css'
import CardGame from "../CardGame"


function CardFrontBack(){
    window.cardFrontBack = {}

    window.cardFrontBack.handleClick = (event) =>{
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');
        
        $cardFrontBack.classList.toggle("-active");
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