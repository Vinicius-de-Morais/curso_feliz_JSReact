import "./style.css"
import PlayerText from "../../components/PlayerText";
import PlayerScore from "../../components/PlayerSore";

function ScoreBoard(){
 return `
    <header class="score-board">
        ${PlayerText('Player1')}
        ${PlayerScore(1)}
        vs
        ${PlayerScore()}
        ${PlayerText('Player2')}
    </header>
 `;
}

export default ScoreBoard