import TurnArrow from '../TurnArrow'
import './style.css'

function PlayerScore(){


    return `
        
        ${TurnArrow()}
        <article class="player-score -playerOne">
            <div class="box -one -turn">
                
            </div>
            <div class="box -two">
                
            </div>
            <div class="box -three">
                
            </div>
        </article>
        vs
        <article class="player-score -playerTwo">
            <div class="box -one">
                
            </div>
            <div class="box -two">
                
            </div>
            <div class="box -three">
                
            </div>
        </article>
    `
}

export default PlayerScore