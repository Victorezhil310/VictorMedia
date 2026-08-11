'use client';

import React from 'react';
import { useTheme } from '@/lib/theme';
import { Sun, Moon, Monitor } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ display: 'inline-flex', background: 'var(--bg-tertiary)', padding: '0.2rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--bg-card-border)' }}>
      <button
        onClick={() => setTheme('light')}
        title="Light Mode"
        style={{
          background: theme === 'light' ? 'var(--bg-secondary)' : 'transparent',
          color: theme === 'light' ? 'var(--accent-primary)' : 'var(--text-muted)',
          border: 'none',
          borderRadius: 'var(--radius-full)',
          padding: '0.35rem 0.6rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.2s',
          boxShadow: theme === 'light' ? 'var(--shadow-sm)' : 'none'
        }}
      >
        <Sun size={16} />
      </button>

      <button
        onClick={() => setTheme('dark')}
        title="Dark Mode"
        style={{
          background: theme === 'dark' ? 'var(--bg-secondary)' : 'transparent',
          color: theme === 'dark' ? 'var(--accent-primary)' : 'var(--text-muted)',
          border: 'none',
          borderRadius: 'var(--radius-full)',
          padding: '0.35rem 0.6rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.2s',
          boxShadow: theme === 'dark' ? 'var(--shadow-sm)' : 'none'
        }}
      >
        <Moon size={16} />
      </button>

      <button
        onClick={() => setTheme('system')}
        title="System Mode"
        style={{
          background: theme === 'system' ? 'var(--bg-secondary)' : 'transparent',
          color: theme === 'system' ? 'var(--accent-primary)' : 'var(--text-muted)',
          border: 'none',
          borderRadius: 'var(--radius-full)',
          padding: '0.35rem 0.6rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.2s',
          boxShadow: theme === 'system' ? 'var(--shadow-sm)' : 'none'
        }}
      >
        <Monitor size={16} />
      </button>
    </div>
  );
};
