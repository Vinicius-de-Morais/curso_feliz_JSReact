import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import PlayerText from './src/components/PlayerText';
import BoardGame from './src/objects/BoardGame';


const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(6)
const $htmlPlayerText = PlayerText('Vinicius');

$root.insertAdjacentHTML('beforeend', $htmlBoardGame)
$root.insertAdjacentHTML('afterbegin', $htmlPlayerText)

