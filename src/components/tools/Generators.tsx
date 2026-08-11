'use client';

import React, { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* 1. RANDOM NUMBER GENERATOR                                                 */
/* -------------------------------------------------------------------------- */
export const RandomNumberTool: React.FC = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [results, setResults] = useState<number[]>([42]);

  const generate = () => {
    const arr: number[] = [];
    for (let i = 0; i < count; i++) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      arr.push(num);
    }
    setResults(arr);
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Minimum</label>
          <input type="number" value={min} onChange={(e) => setMin(parseInt(e.target.value) || 0)} className="input-field" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Maximum</label>
          <input type="number" value={max} onChange={(e) => setMax(parseInt(e.target.value) || 0)} className="input-field" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Amount</label>
          <input type="number" value={count} min={1} max={50} onChange={(e) => setCount(parseInt(e.target.value) || 1)} className="input-field" />
        </div>
      </div>

      <button onClick={generate} className="btn btn-primary" style={{ marginBottom: '1.5rem' }}>
        <RefreshCw size={16} /> Generate Random Numbers
      </button>

      <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Generated Numbers</span>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)', wordBreak: 'break-all', marginTop: '0.5rem' }}>
          {results.join(', ')}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. PASSWORD GENERATOR                                                      */
/* -------------------------------------------------------------------------- */
export const PasswordGeneratorTool: React.FC = () => {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNum, setUseNum] = useState(true);
  const [useSym, setUseSym] = useState(true);
  const [password, setPassword] = useState('vM9$kP2#mL7@xQ4!');
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let chars = '';
    if (useUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (useNum) chars += '0123456789';
    if (useSym) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!chars) return;

    let res = '';
    for (let i = 0; i < length; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(res);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="glass-card" style={{ padding: '1.25rem', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'monospace', wordBreak: 'break-all', color: 'var(--accent-primary)' }}>
          {password}
        </div>
        <button onClick={handleCopy} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.88rem' }}>
          <span>Password Length</span>
          <strong>{length} Characters</strong>
        </div>
        <input type="range" min="8" max="64" value={length} onChange={(e) => setLength(parseInt(e.target.value))} style={{ width: '100%' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
          <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} />
          <span>Uppercase (A-Z)</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
          <input type="checkbox" checked={useLower} onChange={(e) => setUseLower(e.target.checked)} />
          <span>Lowercase (a-z)</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
          <input type="checkbox" checked={useNum} onChange={(e) => setUseNum(e.target.checked)} />
          <span>Numbers (0-9)</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
          <input type="checkbox" checked={useSym} onChange={(e) => setUseSym(e.target.checked)} />
          <span>Symbols (!@#$)</span>
        </label>
      </div>

      <button onClick={generatePassword} className="btn btn-outline" style={{ width: '100%' }}>
        <RefreshCw size={16} /> Generate New Password
      </button>
    </div>
  );
};
