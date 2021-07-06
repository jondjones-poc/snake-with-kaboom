import k from "./kaboom.js";
import controls from "./controls.js";
import movement from "./movement.js";
import food from "./food.js";
import link from "./link.js";
import getRandomPosition from "../utils/getRandomPosition.js";
import { TILE_HEIGHT, TILE_WIDTH, GRID_HEIGHT, GRID_WIDTH } from "./constants.js";

const Snake = () => {
    const {
        add,
        pos,
        rect,
        color,
        origin,
        overlaps,
        destroy,
        camShake,
        go,
        text,
        addLevel,
        vec2
    } = k;

    let score = 0;

    const map = addLevel([
        "====================",
        "=                  = ",
        "=                  = ",
        "=                  = ",
        "=                  = ",
        "=                  = ",
        "=                  = ",
        "=                  = ",
        "=                  = ",
        "=                  = ",
        "=                  = ",
        "=                  = ",
        "=                  = ",
        "=                  = ",
        "====================",
      ], {
      width: GRID_WIDTH,
      height: GRID_HEIGHT,
      pos: vec2(0, 0),
      "=": [
        rect(GRID_WIDTH, GRID_HEIGHT),
        color(255,0,0),
        "wall"
      ]
    });

    const foodSpawn = add([
        food()
    ]);

    const scoreText = add([
        pos(2,2),
        text(`Score: ${score}`),
        color(1, 1, 1, 1)
    ])

    let end = add([
        pos(getRandomPosition()),
        rect(TILE_HEIGHT, TILE_WIDTH),
        color(0, 1, 0, 1),
        origin('center'),
        movement(),
        controls(),
        link(),
        'head',
    ])

    foodSpawn.spawn();

    overlaps('head', 'food', (head, food) => {
        destroy(food);
        camShake(3);

        score++;
        scoreText.text = `Score: ${score}`;

        const newChild = add([
            pos(end.pos.x, end.pos.y),
            rect(TILE_HEIGHT, TILE_WIDTH),
            color(0, 1, 0, 1),
            origin('center'),
            link(),
            'body'
        ])

        end.setChild(newChild);
        end = newChild;
        
        foodSpawn.spawn();
        
    })

    overlaps('head', 'body', (head, body) => {

        if (body.isNew()) {
            return;
        }
        go('game-over', score)
    })

    overlaps("head", "wall", (s, w) => {
        camShake(4);
        go('game-over', score)
    });
}

export default Snake;