'use client';

import { useEffect, useRef } from 'react';
import TabNavigation from '../components/TabNavigation';

export default function RacingGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Game state
    const car = {
      x: canvas.width / 2,
      y: canvas.height - 100,
      width: 50,
      height: 80,
      speed: 5
    };

    const obstacles: { x: number; y: number; width: number; height: number }[] = [];
    let score = 0;
    let gameOver = false;

    // Draw functions
    function drawCar() {
      if (!ctx) return;
      ctx.fillStyle = '#3498db';
      ctx.fillRect(car.x, car.y, car.width, car.height);
    }

    function drawObstacles() {
      if (!ctx) return;
      ctx.fillStyle = '#e74c3c';
      obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      });
    }

    function drawScore() {
      if (!ctx) return;
      ctx.fillStyle = '#000';
      ctx.font = '24px Arial';
      ctx.fillText(`Score: ${score}`, 20, 30);
    }

    function drawGameOver() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';
      ctx.font = '48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2);
      ctx.font = '24px Arial';
      ctx.fillText(`Final Score: ${score}`, canvas.width / 2, canvas.height / 2 + 40);
      ctx.fillText('Press R to restart', canvas.width / 2, canvas.height / 2 + 80);
    }

    // Game logic
    function createObstacle() {
      if (!canvas) return;
      const width = 50;
      const x = Math.random() * (canvas.width - width);
      obstacles.push({
        x,
        y: -50,
        width,
        height: 50
      });
    }

    function updateObstacles() {
      if (!canvas) return;
      obstacles.forEach((obstacle, index) => {
        obstacle.y += 5;
        if (obstacle.y > canvas.height) {
          obstacles.splice(index, 1);
          score++;
        }
      });
    }

    function checkCollision() {
      return obstacles.some(obstacle => {
        return (
          car.x < obstacle.x + obstacle.width &&
          car.x + car.width > obstacle.x &&
          car.y < obstacle.y + obstacle.height &&
          car.y + car.height > obstacle.y
        );
      });
    }

    // Game loop
    function gameLoop() {
      if (!ctx || !canvas) return;
      
      if (gameOver) {
        drawGameOver();
        return;
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw
      updateObstacles();
      drawObstacles();
      drawCar();
      drawScore();

      // Check collision
      if (checkCollision()) {
        gameOver = true;
      }

      // Randomly create obstacles
      if (Math.random() < 0.02) {
        createObstacle();
      }

      requestAnimationFrame(gameLoop);
    }

    // Controls
    const keys: { [key: string]: boolean } = {};
    window.addEventListener('keydown', (e) => {
      keys[e.key] = true;
      if (e.key === 'r' && gameOver) {
        // Reset game
        obstacles.length = 0;
        score = 0;
        gameOver = false;
        car.x = canvas.width / 2;
        gameLoop();
      }
    });
    window.addEventListener('keyup', (e) => {
      keys[e.key] = false;
    });

    // Handle car movement
    function handleCarMovement() {
      if (!canvas) return;
      if (keys['ArrowLeft'] && car.x > 0) {
        car.x -= car.speed;
      }
      if (keys['ArrowRight'] && car.x < canvas.width - car.width) {
        car.x += car.speed;
      }
    }

    // Start game
    gameLoop();

    // Animation frame for car movement
    function movementLoop() {
      handleCarMovement();
      requestAnimationFrame(movementLoop);
    }
    movementLoop();

    return () => {
      // Cleanup
      window.removeEventListener('keydown', () => {});
      window.removeEventListener('keyup', () => {});
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <TabNavigation />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Racing Game
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center">
              <canvas
                ref={canvasRef}
                className="border-2 border-gray-300 dark:border-gray-600 rounded-lg"
              />
              <div className="mt-4 text-gray-600 dark:text-gray-300">
                <p>Use ← and → arrow keys to move the car</p>
                <p>Avoid the red obstacles</p>
                <p>Press R to restart when game over</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 