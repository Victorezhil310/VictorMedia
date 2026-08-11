'use client';

import React, { useState, useEffect } from 'react';
import { Heart, X, Copy, Check, QrCode } from 'lucide-react';
import QRCode from 'qrcode';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  const upiId = 'arasu9629hf@okhdfcbank';
  const upiLink = `upi://pay?pa=${upiId}&pn=VictorMedia&cu=INR`;
  const [copied, setCopied] = useState(false);
  const [qrSrc, setQrSrc] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      QRCode.toDataURL(upiLink, { width: 220, margin: 2 })
        .then((url) => setQrSrc(url))
        .catch((err) => console.error('Error generating QR', err));
    }
  }, [isOpen, upiLink]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '460px',
        padding: '2rem',
        position: 'relative',
        background: 'var(--bg-secondary)',
        textAlign: 'center'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer'
          }}
        >
          <X size={22} />
        </button>

        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'rgba(239, 68, 68, 0.1)',
          color: '#ef4444',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem auto'
        }}>
          <Heart size={28} fill="#ef4444" />
        </div>

        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Support VictorMedia</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
          VictorMedia is 100% free and privacy-focused. If our tools helped you save time, consider supporting our development!
        </p>

        {qrSrc && (
          <div style={{
            background: '#ffffff',
            padding: '0.75rem',
            borderRadius: 'var(--radius-md)',
            display: 'inline-block',
            marginBottom: '1.25rem',
            boxShadow: 'var(--shadow-md)'
          }}>
            <img src={qrSrc} alt="UPI QR Code" style={{ width: '180px', height: '180px', display: 'block' }} />
          </div>
        )}

        <div style={{
          background: 'var(--bg-tertiary)',
          border: '1.5px dashed var(--accent-primary)',
          padding: '0.75rem 1rem',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          marginBottom: '1.25rem'
        }}>
          <div style={{ textAlign: 'left', overflow: 'hidden' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>Official UPI ID</span>
            <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', wordBreak: 'break-all' }}>{upiId}</strong>
          </div>
          <button onClick={handleCopy} className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>

        <a
          href={upiLink}
          className="btn btn-outline"
          style={{ width: '100%', gap: '0.5rem' }}
        >
          <QrCode size={18} />
          Pay via UPI App (GPay / PhonePe / Paytm)
        </a>
      </div>
    </div>
  );
};
