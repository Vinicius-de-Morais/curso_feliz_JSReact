import './style.css'
import cards from './data.js';
import CardFrontBack from "../../components/CardFrontBack";


function BoardGame(){

    function hideCards(activeCards){
        activeCards.forEach((card) => card.classList.remove('-active'))
    }

    function swapPlayer(turnArrow){
        const currentPlayer = turnArrow.getAttribute('data-currentPlayer')
        turnArrow.setAttribute('data-currentPlayer', currentPlayer == 1 ? 2 : 1) // if ternario
    }

    window.BoardGame = {}
    window.BoardGame.handleClick = () => {
        
        const $boardGame = document.querySelector('.board-game');
        const $turnArrow = document.querySelector('.turn-arrow');
        const $activeCards = $boardGame.querySelectorAll('.card-front-back.-active');

        if($activeCards.length === 2){
            setTimeout(() => {
                
                hideCards($activeCards)
                swapPlayer($turnArrow)
            }, 900)
           
        }
    }

    const cardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon)) 
    const $htmlCards = cardsList.join(` `)

    return `
    <section class="board-game" onclick="BoardGame.handleClick()">
        ${$htmlCards}
    </section>
    `;
}

export default BoardGame;