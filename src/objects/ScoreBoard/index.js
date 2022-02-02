import "./style.css"
import PlayerText from "../../components/PlayerText";

function ScoreBoard(){
 return `
    <header class="score-board">
        ${PlayerText('Player 1')}
        ${PlayerText('Player 2')}
    </header>
 `;
}

export default ScoreBoard