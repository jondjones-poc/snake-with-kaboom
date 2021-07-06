import k from "../component/kaboom.js";
import { TILE_HEIGHT, TILE_WIDTH } from "../component/constants.js";

const getRandomPosition = (tileW = TILE_WIDTH, tileH = TILE_HEIGHT) => {
    const {
        vec2,
        width,
        height,
        rand
    } = k;

    const totalTilesX = Math.floor(width() / tileW);
    const totalTilesY = Math.floor(height() / tileH);

    const x = (Math.floor(rand(2, totalTilesX)) * (tileW - 2)) + ((tileW - 2) * 0.5);
    const y = (Math.floor(rand(2, totalTilesY)) * (tileH - 2)) + ((tileH- 2) * 0.5);

    return vec2(x, y);
}

export default getRandomPosition;
