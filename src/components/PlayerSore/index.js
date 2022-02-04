import TurnArrow from '../TurnArrow'
import './style.css'

function PlayerScore(points = 0){

    return `
        
        <ol class="player-score" data-points="${points}">
            <li class="pointer -a${points}">Um</li>
            <li class="pointer -b${points}">Dois</li>
            <li class="pointer -c${points}">Três</li>
        </ol>
    `;
}

export default PlayerScore;