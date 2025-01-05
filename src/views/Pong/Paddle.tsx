import { vec2 } from './Utils';
const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;

export class Paddle {
    pos: { x: number; y: number };
    velocity: { x: number; y: number };
    width: number;
    height: number;
    score: number;
    ctx: CanvasRenderingContext2D;
    keyPressed: boolean[];

    constructor(
        pos: { x: number; y: number },
        velocity: { x: number; y: number },
        width: number,
        height: number,
        ctx: CanvasRenderingContext2D,
        keyPressed: boolean[],
    ) {
        this.pos = pos;
        this.velocity = velocity;
        this.width = width;
        this.height = height;
        this.score = 0;
        this.ctx = ctx;
        this.keyPressed = keyPressed;
    }

    update() {
        if (this.keyPressed[KEY_UP_ARROW]) {
            this.pos.y -= this.velocity.y;
        }
        if (this.keyPressed[KEY_DOWN_ARROW]) {
            this.pos.y += this.velocity.y;
        }
    }

    draw() {
        this.ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
        this.ctx.fillStyle = '#33ff00';
    }

    getHalfWidth() {
        return this.width / 2;
    }

    getHalfHeight() {
        return this.height / 2;
    }

    getCenter() {
        return vec2(this.pos.x + this.getHalfWidth(), this.pos.y + this.getHalfHeight());
    }
}
