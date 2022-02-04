import './style.css'

function TurnArrow() {

    window.TurnArrow = {}

    window.TurnArrow.handleClick = (event) =>{
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('box');
        
        console.log(event);
    }

    return `
        <img onclick="TurnArrow.handleClick(event)" class="turn-arrow" src="../src/images/IconArrowDown.png" alt="turn arrow" />
    `
}

export default TurnArrow