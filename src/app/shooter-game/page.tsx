'use client';

import { useEffect, useRef } from 'react';
import TabNavigation from '../components/TabNavigation';

export default function ShooterGame() {
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
    const player = {
      x: canvas.width / 2,
      y: canvas.height - 50,
      width: 50,
      height: 50,
      speed: 5
    };

    const bullets: { x: number; y: number; width: number; height: number }[] = [];
    const enemies: { x: number; y: number; width: number; height: number }[] = [];
    let score = 0;
    let gameOver = false;

    // Draw functions
    function drawPlayer() {
      if (!ctx) return;
      ctx.fillStyle = '#3498db';
      ctx.fillRect(player.x, player.y, player.width, player.height);
    }

    function drawBullets() {
      if (!ctx) return;
      ctx.fillStyle = '#f1c40f';
      bullets.forEach(bullet => {
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
      });
    }

    function drawEnemies() {
      if (!ctx) return;
      ctx.fillStyle = '#e74c3c';
      enemies.forEach(enemy => {
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
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
    function createEnemy() {
      if (!canvas) return;
      const width = 40;
      const x = Math.random() * (canvas.width - width);
      enemies.push({
        x,
        y: -40,
        width,
        height: 40
      });
    }

    function updateBullets() {
      bullets.forEach((bullet, index) => {
        bullet.y -= 7;
        if (bullet.y < 0) {
          bullets.splice(index, 1);
        }
      });
    }

    function updateEnemies() {
      if (!canvas) return;
      enemies.forEach((enemy, index) => {
        enemy.y += 3;
        if (enemy.y > canvas.height) {
          enemies.splice(index, 1);
          gameOver = true;
        }
      });
    }

    function checkCollisions() {
      // Check bullet-enemy collisions
      bullets.forEach((bullet, bulletIndex) => {
        enemies.forEach((enemy, enemyIndex) => {
          if (
            bullet.x < enemy.x + enemy.width &&
            bullet.x + bullet.width > enemy.x &&
            bullet.y < enemy.y + enemy.height &&
            bullet.y + bullet.height > enemy.y
          ) {
            bullets.splice(bulletIndex, 1);
            enemies.splice(enemyIndex, 1);
            score += 10;
          }
        });
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
      updateBullets();
      updateEnemies();
      checkCollisions();
      drawBullets();
      drawEnemies();
      drawPlayer();
      drawScore();

      // Randomly create enemies
      if (Math.random() < 0.02) {
        createEnemy();
      }

      requestAnimationFrame(gameLoop);
    }

    // Controls
    const keys: { [key: string]: boolean } = {};
    window.addEventListener('keydown', (e) => {
      keys[e.key] = true;
      if (e.key === ' ' && !gameOver) {
        // Shoot bullet
        bullets.push({
          x: player.x + player.width / 2 - 2.5,
          y: player.y,
          width: 5,
          height: 10
        });
      }
      if (e.key === 'r' && gameOver) {
        // Reset game
        bullets.length = 0;
        enemies.length = 0;
        score = 0;
        gameOver = false;
        player.x = canvas.width / 2;
        gameLoop();
      }
    });
    window.addEventListener('keyup', (e) => {
      keys[e.key] = false;
    });

    // Handle player movement
    function handlePlayerMovement() {
      if (!canvas) return;
      if (keys['ArrowLeft'] && player.x > 0) {
        player.x -= player.speed;
      }
      if (keys['ArrowRight'] && player.x < canvas.width - player.width) {
        player.x += player.speed;
      }
    }

    // Start game
    gameLoop();

    // Animation frame for player movement
    function movementLoop() {
      handlePlayerMovement();
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
            Shooter Game
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center">
              <canvas
                ref={canvasRef}
                className="border-2 border-gray-300 dark:border-gray-600 rounded-lg"
              />
              <div className="mt-4 text-gray-600 dark:text-gray-300">
                <p>Use ← and → arrow keys to move</p>
                <p>Press SPACE to shoot</p>
                <p>Destroy the red enemies before they reach the bottom</p>
                <p>Press R to restart when game over</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 