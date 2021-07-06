import k from "./kaboom.js";

const controls = () => {
    const {
        keyPress
    } = k;

    return {
        add() {
            keyPress('left', () => {
                this.movement.left();
            })
            keyPress('right', () => {
                this.movement.right();
            })
            keyPress('up', () => {
                this.movement.up();
            })
            keyPress('down', () => {
                this.movement.down();
            })
        }
    }
}

export default controls;