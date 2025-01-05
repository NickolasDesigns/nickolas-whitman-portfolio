import React, { useEffect, useRef } from 'react';
import { Ball } from './Ball';
import { Paddle } from './Paddle';
import {
    ballCollisionWithEdges,
    ballPaddleCollision,
    drawGameScene,
    increaseScore,
    paddleCollisionWithEdges,
    player2AI,
    vec2,
} from './Utils';

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

        window.addEventListener('keydown', (e) => {
            keyPressed[e.keyCode] = true;
        });

        window.addEventListener('keyup', (e) => {
            keyPressed[e.keyCode] = false;
        });

        const ball = new Ball(vec2(200, 200), vec2(3, 3), 20, ctx);
        const paddle1 = new Paddle(vec2(0, 50), vec2(5, 5), 20, 160, ctx, keyPressed);
        const paddle2 = new Paddle(vec2(canvas.width - 20, 30), vec2(2, 2), 20, 160, ctx, keyPressed);

        function gameUpdate() {
            ball.update();
            paddle1.update();
            paddleCollisionWithEdges(paddle1, canvas);
            ballCollisionWithEdges(ball, canvas);

            player2AI(ball, paddle2, canvas);

            ballPaddleCollision(ball, paddle1);
            ballPaddleCollision(ball, paddle2);

            increaseScore(ball, paddle1, paddle2, canvas);
        }

        function gameDraw() {
            ball.draw();
            paddle1.draw();
            paddle2.draw();

            drawGameScene(ctx, canvas);
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
