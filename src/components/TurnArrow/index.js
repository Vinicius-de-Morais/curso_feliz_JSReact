import './style.css'

function TurnArrow(currentPlayer = 1) {

    return `
        <img class="turn-arrow" src="../src/images/IconArrowDown.png"
        data-currentPlayer="${currentPlayer}" 
        alt="turn arrow" />
    `
}

export default TurnArrow