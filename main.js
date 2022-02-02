import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import PlayerText from './src/components/PlayerText';
import BoardGame from './src/objects/BoardGame';


const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    'beforeend', 
    `
        ${PlayerText('Player 1')}
        ${PlayerText('Player 2')}
        ${BoardGame(6)}    
    `
)

