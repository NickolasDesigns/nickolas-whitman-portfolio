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
        const uniqueId = Date.now().toString() + Math.random().toString(36).substr(2, 5);
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

        const ball = new Ball(vec2(200, 200), vec2(3, 2), 20, ctx);
        const paddle1 = new Paddle(vec2(0, 50), vec2(5, 5), 20, 160, ctx, keyPressed);
        const paddle2 = new Paddle(vec2(canvas.width - 20, 30), vec2(2, 1), 20, 160, ctx, keyPressed);

        // Touch event handlers
        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
            const touch = e.touches[0];
            const canvasRect = canvas.getBoundingClientRect();
            const y = touch.clientY - canvasRect.top;
            // Update paddle1 position
            paddle1.pos.y = Math.max(0, Math.min(y - paddle1.height / 2, canvas.height - paddle1.height));
        };

        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

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

        // Cleanup on unmount
        return () => {
            if (gameLoopRef.current !== null) {
                window.cancelAnimationFrame(gameLoopRef.current);
            }
            canvas.removeEventListener('touchmove', handleTouchMove);
            localStorage.removeItem('pongGameId');
            const player1ScoreElem = document.getElementById('player1Score');
            const aiScoreElem = document.getElementById('AIScore');
            if (aiScoreElem) {
                aiScoreElem.innerHTML = '0';
            }
            if (player1ScoreElem) {
                player1ScoreElem.innerHTML = '0';
            }
            keyPressed.length = 0;
        };
    }, []);

    return (
        <div
            style={{
                position: 'relative',
                overflow: 'hidden',
                // I need a ratio of width to height of 4:3
                width: '100%',
                aspectRatio: '4 / 3',
                maxWidth: '100vw',
            }}
        >
            <canvas id="canvas" style={{ height: '100%' }}/>
            <h1
                id="player1Score"
                style={{
                    left: '35%',
                    position: 'absolute',
                    bottom: '100px',
                    color: '#fff',
                    fontFamily: 'sans-serif',
                    fontSize: '4rem',
                    zIndex: 100,
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
