'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Flag } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* 1. STOPWATCH                                                               */
/* -------------------------------------------------------------------------- */
export const StopwatchTool: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`;
  };

  const handleLap = () => {
    setLaps([time, ...laps]);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: 'monospace', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
        {formatTime(time)}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => setIsRunning(!isRunning)} className={`btn ${isRunning ? 'btn-secondary' : 'btn-primary'}`} style={{ padding: '0.65rem 1.5rem' }}>
          {isRunning ? <Pause size={18} /> : <Play size={18} />}
          {isRunning ? 'Pause' : 'Start'}
        </button>

        {isRunning && (
          <button onClick={handleLap} className="btn btn-outline">
            <Flag size={18} /> Lap
          </button>
        )}

        <button onClick={handleReset} className="btn btn-secondary">
          <RotateCcw size={18} /> Reset
        </button>
      </div>

      {laps.length > 0 && (
        <div className="glass-card" style={{ padding: '1rem', background: 'var(--bg-tertiary)', maxWidth: '360px', margin: '0 auto' }}>
          <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem' }}>Recorded Laps</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
            {laps.map((lap, i) => (
              <li key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--bg-card-border)', paddingBottom: '0.2rem' }}>
                <span>Lap {laps.length - i}</span>
                <strong style={{ fontFamily: 'monospace' }}>{formatTime(lap)}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. COUNTDOWN TIMER                                                         */
/* -------------------------------------------------------------------------- */
export const CountdownTimerTool: React.FC = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      alert('⏰ Countdown Timer Finished!');
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startTimer = () => {
    setTimeLeft(minutes * 60 + seconds);
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(minutes * 60 + seconds);
  };

  const displayM = Math.floor(timeLeft / 60);
  const displayS = timeLeft % 60;

  return (
    <div style={{ textAlign: 'center' }}>
      {!isActive ? (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem', maxWidth: '300px', margin: '0 auto 1.5rem auto' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Minutes</label>
            <input type="number" value={minutes} onChange={(e) => setMinutes(Math.max(0, parseInt(e.target.value) || 0))} className="input-field" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Seconds</label>
            <input type="number" value={seconds} onChange={(e) => setSeconds(Math.max(0, parseInt(e.target.value) || 0))} className="input-field" />
          </div>
        </div>
      ) : null}

      <div style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: 'monospace', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
        {String(displayM).padStart(2, '0')}:{String(displayS).padStart(2, '0')}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        {!isActive ? (
          <button onClick={startTimer} className="btn btn-primary" style={{ padding: '0.65rem 1.5rem' }}>
            <Play size={18} /> Start Timer
          </button>
        ) : (
          <button onClick={() => setIsActive(false)} className="btn btn-secondary">
            <Pause size={18} /> Pause
          </button>
        )}
        <button onClick={resetTimer} className="btn btn-outline">
          <RotateCcw size={18} /> Reset
        </button>
      </div>
    </div>
  );
};
