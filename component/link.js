import k from "./kaboom.js";

const link = () => {
    const {
        vec2
    } = k;

    const previousPosition = vec2(0,0);
    let child;
    let isNew = true;

    return {
        add() {
            previousPosition.x = this.pos.x;
            previousPosition.y = this.pos.y;
        },
        getChild() {
            return child;
        },
        setChild(c) {
            child = c;
        },
        moveUpdate(x, y) {
            const pos = previousPosition.clone();
            previousPosition.x = x;
            previousPosition.y = y;

            this.pos.x = pos.x;
            this.pos.y = pos.y;

            isNew = false;

            if (!child) {
                return
            }

            child.moveUpdate(pos.x, pos.y);
        },
        isNew() {
            return isNew
        }
    }
}

export default link;