import k from "./kaboom.js";

const GameOver = (data) => {
    
    const {
        add,
        pos,
        text, 
        color,
        origin,
        width,
        height,
        keyPress,
        go
    } = k

    const scoreText = add([
        pos(2,2),
        text(`Score: ${data}`),
        color(1, 1, 1, 1)
    ])

    add([
        pos(width() * 0.5, height() * 0.5),
        text('GameOver', 25),
        color(1, 0, 0, 1),
        origin('center')
    ])

    keyPress('enter', () => {
        go('snake');
    })
}

export default GameOver;