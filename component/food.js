import k from "./kaboom.js";
import getRandomPosition from "../utils/getRandomPosition.js";
import { TILE_HEIGHT, TILE_WIDTH } from "./constants.js";

const food = () => {
    
    const {
        wait, 
        add,
        pos,
        rect, 
        color,
        origin
    } = k


    return {
        spawn() {
            wait(1, () => {
                add([
                    pos(getRandomPosition()),
                    rect(TILE_HEIGHT, TILE_WIDTH),
                    color(0, 0, 1, 1),
                    origin('center'),
                    'food'
                ])
            })
        }
    }
}

export default food;