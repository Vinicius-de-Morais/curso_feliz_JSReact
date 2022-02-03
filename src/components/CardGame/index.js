import "./style.css"


function CardGame(icon="alura-pixel", alt="logo alura"){
    
    return `
        <article class="card-game">
            <img src="../src/images/${icon}.png" alt="${alt}">
        </article>
    `
}

export default CardGame;