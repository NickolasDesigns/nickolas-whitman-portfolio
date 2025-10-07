import { Ball } from './Ball';
import { Paddle } from './Paddle';

// Utility function representing a 2D vector.
export function vec2(x: number, y: number) {
    return { x, y };
}

export function ballCollisionWithEdges(ball: Ball, canvas: HTMLCanvasElement) {
    if (ball.pos.y + ball.radius >= canvas.height || ball.pos.y - ball.radius <= 0) {
        ball.velocity.y *= -1;
    }
}

export function paddleCollisionWithEdges(paddle: Paddle, canvas: HTMLCanvasElement) {
    if (paddle.pos.y <= 0) {
        paddle.pos.y = 0;
    }

    if (paddle.pos.y + paddle.height >= canvas.height) {
        paddle.pos.y = canvas.height - paddle.height;
    }
}

export function ballPaddleCollision(ball: Ball, paddle: Paddle) {
    const dx = Math.abs(ball.pos.x - paddle.getCenter().x);
    const dy = Math.abs(ball.pos.y - paddle.getCenter().y);

    if (dx <= ball.radius + paddle.getHalfWidth() && dy <= paddle.getHalfHeight() + ball.radius) {
        ball.velocity.x *= -1;
    }
}

export function player2AI(ball: Ball, paddle: Paddle, canvas: HTMLCanvasElement) {
    if (ball.velocity.x > 0) {
        if (ball.pos.y > paddle.pos.y) {
            paddle.pos.y += paddle.velocity.y;

            if (paddle.pos.y + paddle.height >= canvas.height) {
                paddle.pos.y = canvas.height - paddle.height;
            }
        }

        if (ball.pos.y < paddle.pos.y) {
            paddle.pos.y -= paddle.velocity.y;

            if (paddle.pos.y <= 0) {
                paddle.pos.y = 0;
            }
        }
    }
}

export function respawnBall(ball: Ball, canvas: HTMLCanvasElement) {
    if (ball.velocity.x > 0) {
        ball.pos.x = canvas.width - 150;
        ball.pos.y = Math.random() * (canvas.height - 200) + 100;
    }

    if (ball.velocity.x < 0) {
        ball.pos.x = 150;
        ball.pos.y = Math.random() * (canvas.height - 200) + 100;
    }

    ball.velocity.x *= -1;
    ball.velocity.y *= -1;
}

export function increaseScore(ball: Ball, paddle1: Paddle, paddle2: Paddle, canvas: HTMLCanvasElement) {
    if (ball.pos.x <= -ball.radius) {
        paddle2.score += 1;
        const aiScoreElement = document.getElementById('AIScore');
        if (aiScoreElement) {
            aiScoreElement.innerHTML = paddle2.score.toString();
        }
        respawnBall(ball, canvas);
    }
    if (ball.pos.x >= canvas.width + ball.radius) {
        paddle1.score += 1;
        const player1ScoreElement = document.getElementById('player1Score');
        if (player1ScoreElement) {
            player1ScoreElement.innerHTML = paddle1.score.toString();
        }
        respawnBall(ball, canvas);
    }
}

export function drawGameScene(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    ctx.strokeStyle = '#ffff00';
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
    ctx.stroke();
}
