import React, { useEffect, useRef } from 'react';

const PongGame: React.FC = () => {
    const gameLoopRef = useRef<number | null>(null);

    useEffect(() => {
        const uniqueId = Date.now().toString();
        localStorage.setItem('pongGameId', uniqueId);

        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        canvas.width = canvas.parentElement?.clientWidth ?? window.innerWidth;
        canvas.height = canvas.parentElement?.clientHeight ?? window.innerHeight;

        const keyPressed: boolean[] = [];
        const KEY_UP_ARROW = 38;
        const KEY_DOWN_ARROW = 40;

        window.addEventListener('keydown', (e) => {
            keyPressed[e.keyCode] = true;
        });

        window.addEventListener('keyup', (e) => {
            keyPressed[e.keyCode] = false;
        });

        function vec2(x: number, y: number) {
            return { x, y };
        }

        class Ball {
            pos: { x: number; y: number };
            velocity: { x: number; y: number };
            radius: number;

            constructor(pos: { x: number; y: number }, velocity: { x: number; y: number }, radius: number) {
                this.pos = pos;
                this.velocity = velocity;
                this.radius = radius;
            }

            update() {
                this.pos.x += this.velocity.x;
                this.pos.y += this.velocity.y;
            }

            draw() {
                ctx.fillStyle = '#33ff00';
                ctx.strokeStyle = '#33ff00';
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
        }

        class Paddle {
            pos: { x: number; y: number };
            velocity: { x: number; y: number };
            width: number;
            height: number;
            score: number;

            constructor(
                pos: { x: number; y: number },
                velocity: { x: number; y: number },
                width: number,
                height: number,
            ) {
                this.pos = pos;
                this.velocity = velocity;
                this.width = width;
                this.height = height;
                this.score = 0;
            }

            update() {
                if (keyPressed[KEY_UP_ARROW]) {
                    this.pos.y -= this.velocity.y;
                }
                if (keyPressed[KEY_DOWN_ARROW]) {
                    this.pos.y += this.velocity.y;
                }
            }

            draw() {
                ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
                ctx.fillStyle = '#33ff00';
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

        function ballCollisionWithEdges(ball: Ball) {
            if (ball.pos.y + ball.radius >= canvas.height || ball.pos.y - ball.radius <= 0) {
                ball.velocity.y *= -1;
            }
        }

        function paddleCollisionWithEdges(paddle: Paddle) {
            if (paddle.pos.y <= 0) {
                paddle.pos.y = 0;
            }

            if (paddle.pos.y + paddle.height >= canvas.height) {
                paddle.pos.y = canvas.height - paddle.height;
            }
        }

        function ballPaddleCollision(ball: Ball, paddle: Paddle) {
            const dx = Math.abs(ball.pos.x - paddle.getCenter().x);
            const dy = Math.abs(ball.pos.y - paddle.getCenter().y);

            if (dx <= ball.radius + paddle.getHalfWidth() && dy <= paddle.getHalfHeight() + ball.radius) {
                ball.velocity.x *= -1;
            }
        }

        function player2AI(ball: Ball, paddle: Paddle) {
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

        function respawnBall(ball: Ball) {
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

        function increaseScore(ball: Ball, paddle1: Paddle, paddle2: Paddle) {
            if (ball.pos.x <= -ball.radius) {
                paddle2.score += 1;
                const aiScoreElement = document.getElementById('AIScore');
                if (aiScoreElement) {
                    aiScoreElement.innerHTML = paddle2.score.toString();
                }
                respawnBall(ball);
            }
            if (ball.pos.x >= canvas.width + ball.radius) {
                paddle1.score += 1;
                const player1ScoreElement = document.getElementById('player1Score');
                if (player1ScoreElement) {
                    player1ScoreElement.innerHTML = paddle1.score.toString();
                }
                respawnBall(ball);
            }
        }

        function drawGameScene() {
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

        const ball = new Ball(vec2(200, 200), vec2(3, 3), 20);
        const paddle1 = new Paddle(vec2(0, 50), vec2(5, 5), 20, 160);
        const paddle2 = new Paddle(vec2(canvas.width - 20, 30), vec2(2, 2), 20, 160);

        function gameUpdate() {
            ball.update();
            paddle1.update();
            paddleCollisionWithEdges(paddle1);
            ballCollisionWithEdges(ball);

            player2AI(ball, paddle2);

            ballPaddleCollision(ball, paddle1);
            ballPaddleCollision(ball, paddle2);

            increaseScore(ball, paddle1, paddle2);
        }

        function gameDraw() {
            ball.draw();
            paddle1.draw();
            paddle2.draw();

            drawGameScene();
        }

        function gameLoop() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            gameUpdate();
            gameDraw();
            gameLoopRef.current = window.requestAnimationFrame(gameLoop);
        }

        gameLoopRef.current = window.requestAnimationFrame(gameLoop);

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                if (gameLoopRef.current !== null) {
                    window.cancelAnimationFrame(gameLoopRef.current);
                    gameLoopRef.current = null;
                }
            } else {
                gameLoopRef.current = window.requestAnimationFrame(gameLoop);
            }
        });

        return () => {
            if (gameLoopRef.current !== null) {
                window.cancelAnimationFrame(gameLoopRef.current);
            }
        };
    }, []);

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <canvas id="canvas" style={{ height: '100%' }}></canvas>
            <h1
                id="player1Score"
                style={{
                    left: '35%',
                    position: 'absolute',
                    bottom: '100px',
                    color: '#fff',
                    fontFamily: 'sans-serif',
                    fontSize: '4rem',
                }}
            >
                0
            </h1>
            <h1
                id="AIScore"
                style={{
                    right: '35%',
                    position: 'absolute',
                    bottom: '100px',
                    color: '#fff',
                    fontFamily: 'sans-serif',
                    fontSize: '4rem',
                }}
            >
                0
            </h1>
        </div>
    );
};

export default PongGame;
