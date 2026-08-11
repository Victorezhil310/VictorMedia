'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check, Settings } from 'lucide-react';

export const ConsentBanner: React.FC = () => {
  const [show, setShow] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('vm_cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('vm_cookie_consent', JSON.stringify({ essential: true, analytics: true, timestamp: new Date().toISOString() }));
    setShow(false);
  };

  const savePreferences = () => {
    localStorage.setItem('vm_cookie_consent', JSON.stringify({ essential: true, analytics: analyticsConsent, timestamp: new Date().toISOString() }));
    setShow(false);
    setShowSettings(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.25rem',
      left: '1.25rem',
      right: '1.25rem',
      maxWidth: '640px',
      margin: '0 auto',
      zIndex: 999
    }}>
      <div className="glass-card" style={{ padding: '1.25rem 1.5rem', background: 'var(--bg-secondary)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
          <div style={{ color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
            <ShieldCheck size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>Privacy & Cookie Preferences</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              We use essential cookies to ensure tool functionality and optional analytics cookies to improve browser performance. Learn more in our <a href="/privacy-policy" style={{ color: 'var(--accent-primary)' }}>Privacy Policy</a>.
            </p>

            {showSettings && (
              <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span>Essential Tool Cookies (Required)</span>
                  <input type="checkbox" checked disabled />
                </label>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span>Anonymous Analytics Cookies</span>
                  <input type="checkbox" checked={analyticsConsent} onChange={(e) => setAnalyticsConsent(e.target.checked)} />
                </label>
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              <button onClick={acceptAll} className="btn btn-primary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
                <Check size={16} /> Accept All
              </button>
              <button onClick={() => setShowSettings(!showSettings)} className="btn btn-secondary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
                <Settings size={16} /> Customize
              </button>
              {showSettings && (
                <button onClick={savePreferences} className="btn btn-outline" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
                  Save Preferences
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
