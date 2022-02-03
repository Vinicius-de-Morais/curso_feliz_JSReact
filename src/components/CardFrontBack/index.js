import CardGame from "../CardGame"

function CardFrontBack(){
    return `
        <article class="card-front-back">
        ${CardGame()}
        ${CardGame("javascript", "logo javascript")}
        </article>
    `
}

export default CardFrontBack