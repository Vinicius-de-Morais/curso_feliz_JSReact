import './style.css'
import CardGame from "../CardGame"

function CardFrontBack(){
    return `
        <article class="card-front-back">
            <div class="front">
                ${CardGame()}
            </div>
            <div class="back">
                ${CardGame("javascript", "logo javascript")}
            </div>
        </article>
    `
}

export default CardFrontBack