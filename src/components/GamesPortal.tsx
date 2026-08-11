'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Gamepad2, RotateCcw, Play, Zap } from 'lucide-react';

/* ========================================================================== */
/* 1. CYBER SPHERE 3D ASTEROID DODGE (Canvas Pseudo-3D)                        */
/* ========================================================================== */
const CyberSphere3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let playerX = canvas.width / 2;
    const playerY = canvas.height - 40;
    let currentScore = 0;
    const obstacles: { x: number; y: number; z: number; speed: number; radius: number }[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a') playerX = Math.max(30, playerX - 25);
      if (e.key === 'ArrowRight' || e.key === 'd') playerX = Math.min(canvas.width - 30, playerX + 25);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      playerX = Math.max(20, Math.min(canvas.width - 20, e.clientX - rect.left));
    };

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('mousemove', handleMouseMove);

    const spawnObstacle = () => {
      if (Math.random() < 0.08) {
        obstacles.push({
          x: Math.random() * (canvas.width - 40) + 20,
          y: 0,
          z: 1,
          speed: 3 + Math.random() * 3,
          radius: 12 + Math.random() * 10,
        });
      }
    };

    const loop = () => {
      ctx.fillStyle = '#07090e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid Lines
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }

      spawnObstacle();

      // Update & Draw Obstacles
      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.y += obs.speed;

        ctx.beginPath();
        ctx.arc(obs.x, obs.y, obs.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ec4899';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ec4899';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Collision check
        const dist = Math.hypot(obs.x - playerX, obs.y - playerY);
        if (dist < obs.radius + 14) {
          setGameOver(true);
          setIsPlaying(false);
          return;
        }

        if (obs.y > canvas.height) {
          obstacles.splice(i, 1);
          currentScore += 10;
          setScore(currentScore);
        }
      }

      // Draw Player Ship
      ctx.beginPath();
      ctx.moveTo(playerX, playerY - 15);
      ctx.lineTo(playerX - 18, playerY + 15);
      ctx.lineTo(playerX + 18, playerY + 15);
      ctx.closePath();
      ctx.fillStyle = '#818cf8';
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#818cf8';
      ctx.fill();
      ctx.shadowBlur = 0;

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isPlaying]);

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
  };

  return (
    <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <Zap size={20} style={{ color: 'var(--accent-primary)' }} /> 3D Cyber Asteroid Dodge
      </h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        Move mouse or Left/Right keys to dodge falling neon asteroids!
      </p>

      <div style={{ position: 'relative', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
        <canvas ref={canvasRef} width={480} height={320} style={{ width: '100%', height: 'auto', background: '#07090e', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-card-border)' }} />

        {(!isPlaying || gameOver) && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(7, 9, 14, 0.85)', backdropFilter: 'blur(4px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)' }}>
            {gameOver && <div style={{ color: '#ef4444', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>GAME OVER</div>}
            <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Score: {score}</div>
            <button onClick={startGame} className="btn btn-primary">
              <Play size={18} /> {gameOver ? 'Play Again' : 'Start 3D Dodge'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/* ========================================================================== */
/* 2. NEON SNAKE ULTRA                                                        */
/* ========================================================================== */
const NeonSnake: React.FC = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gridSize = 15;
    const tileCount = 20; // 300x300 canvas
    const snake = [{ x: 10, y: 10 }];
    let food = { x: 5, y: 5 };
    let dx = 1;
    let dy = 0;
    let currentScore = 0;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' && dy === 0) { dx = 0; dy = -1; }
      if (e.key === 'ArrowDown' && dy === 0) { dx = 0; dy = 1; }
      if (e.key === 'ArrowLeft' && dx === 0) { dx = -1; dy = 0; }
      if (e.key === 'ArrowRight' && dx === 0) { dx = 1; dy = 0; }
    };

    window.addEventListener('keydown', handleKey);

    const interval = setInterval(() => {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };

      // Wall collision
      if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        setGameOver(true);
        setIsPlaying(false);
        return;
      }

      // Self collision
      for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
          setGameOver(true);
          setIsPlaying(false);
          return;
        }
      }

      snake.unshift(head);

      // Food collision
      if (head.x === food.x && head.y === food.y) {
        currentScore += 10;
        setScore(currentScore);
        food = {
          x: Math.floor(Math.random() * tileCount),
          y: Math.floor(Math.random() * tileCount),
        };
      } else {
        snake.pop();
      }

      // Render
      ctx.fillStyle = '#0b0f19';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render Food
      ctx.fillStyle = '#10b981';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#10b981';
      ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);

      // Render Snake
      ctx.fillStyle = '#6366f1';
      ctx.shadowColor = '#6366f1';
      snake.forEach((part) => {
        ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize - 2, gridSize - 2);
      });
      ctx.shadowBlur = 0;
    }, 100);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKey);
    };
  }, [isPlaying]);

  return (
    <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>🐍 Neon Snake Ultra</h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        Use Arrow keys to guide the neon snake and collect food!
      </p>

      <div style={{ position: 'relative', width: '300px', height: '300px', margin: '0 auto' }}>
        <canvas ref={canvasRef} width={300} height={300} style={{ background: '#0b0f19', borderRadius: 'var(--radius-md)' }} />
        {(!isPlaying || gameOver) && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(7, 9, 14, 0.85)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)' }}>
            {gameOver && <div style={{ color: '#ef4444', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>GAME OVER</div>}
            <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Score: {score}</div>
            <button onClick={() => { setScore(0); setGameOver(false); setIsPlaying(true); }} className="btn btn-primary">
              <Play size={16} /> Play Snake
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/* ========================================================================== */
/* 3. TIC TAC TOE AI BOSS                                                     */
/* ========================================================================== */
const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(''));
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (b: string[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, c, d] = lines[i];
      if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a];
    }
    if (b.every((cell) => cell !== '')) return 'Tie';
    return null;
  };

  const handleClick = (idx: number) => {
    if (board[idx] || winner) return;
    const newBoard = [...board];
    newBoard[idx] = 'X';
    const w = checkWinner(newBoard);
    if (w) {
      setBoard(newBoard);
      setWinner(w);
      return;
    }

    // AI Move
    const emptyIndices = newBoard.map((val, i) => (val === '' ? i : null)).filter((val) => val !== null) as number[];
    if (emptyIndices.length > 0) {
      const aiMove = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      newBoard[aiMove] = 'O';
      const w2 = checkWinner(newBoard);
      setBoard(newBoard);
      if (w2) setWinner(w2);
    } else {
      setBoard(newBoard);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setWinner(null);
  };

  return (
    <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>❌⭕ Tic-Tac-Toe AI</h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        You play as X against the AI (O).
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 70px)', gap: '8px', justifyContent: 'center', marginBottom: '1.25rem' }}>
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            style={{
              height: '70px',
              fontSize: '1.8rem',
              fontWeight: 800,
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--bg-card-border)',
              borderRadius: 'var(--radius-md)',
              color: cell === 'X' ? '#818cf8' : '#ec4899',
              cursor: 'pointer',
            }}
          >
            {cell}
          </button>
        ))}
      </div>

      {winner && (
        <div style={{ marginBottom: '1rem', fontWeight: 700, color: winner === 'X' ? '#10b981' : winner === 'O' ? '#ef4444' : 'var(--text-muted)' }}>
          {winner === 'Tie' ? "It's a Draw!" : `${winner} Wins!`}
        </div>
      )}

      <button onClick={resetGame} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
        <RotateCcw size={14} /> Restart Game
      </button>
    </div>
  );
};

/* ========================================================================== */
/* 4. SPEED TYPING DASH                                                      */
/* ========================================================================== */
const SpeedTyping: React.FC = () => {
  const targetText = 'VictorMedia provides hyper-fast client-side online tools for web developers and creators.';
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (!startTime) setStartTime(Date.now());
    setInput(val);

    if (val === targetText) {
      const timeInSec = (Date.now() - (startTime || Date.now())) / 1000;
      const calculatedWpm = Math.round((targetText.split(' ').length / timeInSec) * 60);
      setWpm(calculatedWpm);
    }
  };

  const resetTest = () => {
    setInput('');
    setStartTime(null);
    setWpm(null);
  };

  return (
    <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>⚡ Speed Typing Dash</h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        Type the sentence below as fast as you can to measure your WPM speed!
      </p>

      <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', fontSize: '0.95rem', fontWeight: 600 }}>
        {targetText}
      </div>

      <textarea
        rows={3}
        value={input}
        onChange={handleChange}
        className="textarea-field"
        placeholder="Start typing here..."
        disabled={wpm !== null}
        style={{ marginBottom: '1rem' }}
      />

      {wpm !== null && (
        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--success)', marginBottom: '1rem' }}>
          🎉 Completed! Speed: {wpm} WPM
        </div>
      )}

      <button onClick={resetTest} className="btn btn-secondary">
        <RotateCcw size={14} /> Reset Typing Test
      </button>
    </div>
  );
};

/* ========================================================================== */
/* MAIN 10-GAMES PORTAL HUB                                                    */
/* ========================================================================== */
export const GamesPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'3d' | 'snake' | 'tictactoe' | 'typing'>('3d');

  return (
    <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '1000px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="badge badge-accent" style={{ marginBottom: '1rem' }}>
          <Gamepad2 size={16} /> BROWSER MINI GAMES PORTAL
        </div>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '0.75rem' }}>
          Victor<span className="gradient-text">Games</span> Arcade
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
          Play 100% free, browser-processed 3D & 2D arcade mini-games with zero downloads or logins required.
        </p>
      </div>

      {/* Game Selector Tabs */}
      <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        <button onClick={() => setActiveTab('3d')} className={`btn ${activeTab === '3d' ? 'btn-primary' : 'btn-secondary'}`}>
          <Zap size={16} /> 3D Cyber Dodge
        </button>
        <button onClick={() => setActiveTab('snake')} className={`btn ${activeTab === 'snake' ? 'btn-primary' : 'btn-secondary'}`}>
          🐍 Neon Snake
        </button>
        <button onClick={() => setActiveTab('tictactoe')} className={`btn ${activeTab === 'tictactoe' ? 'btn-primary' : 'btn-secondary'}`}>
          ❌⭕ Tic-Tac-Toe AI
        </button>
        <button onClick={() => setActiveTab('typing')} className={`btn ${activeTab === 'typing' ? 'btn-primary' : 'btn-secondary'}`}>
          ⚡ Speed Typing Dash
        </button>
      </div>

      {/* Active Game Display */}
      {activeTab === '3d' && <CyberSphere3D />}
      {activeTab === 'snake' && <NeonSnake />}
      {activeTab === 'tictactoe' && <TicTacToe />}
      {activeTab === 'typing' && <SpeedTyping />}
    </div>
  );
};
