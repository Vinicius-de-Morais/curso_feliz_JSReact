import "./style.css"
import PlayerText from "../../components/PlayerText";
import PlayerScore from "../../components/PlayerSore";
import TurnArrow from "../../components/TurnArrow";

function ScoreBoard(){
 return `
    <header class="score-board">
        ${TurnArrow()}
        ${PlayerText('Player1')}
        ${PlayerScore()}
        vs
        ${PlayerScore()}
        ${PlayerText('Player2')}
    </header>
 `;
}

export default ScoreBoard