export class Ball {
    pos: { x: number; y: number };
    velocity: { x: number; y: number };
    radius: number;
    ctx: CanvasRenderingContext2D;

    constructor(
        pos: { x: number; y: number },
        velocity: { x: number; y: number },
        radius: number,
        ctx: CanvasRenderingContext2D,
    ) {
        this.pos = pos;
        this.velocity = velocity;
        this.radius = radius;
        this.ctx = ctx;
    }

    update() {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
    }

    draw() {
        this.ctx.fillStyle = '#33ff00';
        this.ctx.strokeStyle = '#33ff00';
        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
    }
}
