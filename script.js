import Snake from "./component/snake.js";
import GameOver from "./component/game-over.js";

import k from "./component/kaboom.js";

k.scene('snake', Snake);
k.scene('game-over', GameOver)
k.start('snake');