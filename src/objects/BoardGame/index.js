import './style.css'
import CardFrontBack from "../../components/CardFrontBack";

function BoardGame(amountCards){

    const $htmlContent = CardFrontBack().repeat(amountCards);

    return `
    <section class="board-game">
        ${$htmlContent}
    </section>
    `;
}

export default BoardGame;