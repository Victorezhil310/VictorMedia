'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

export const SupportChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'bot' | 'user'; text: string; time: string }[]>([
    { sender: 'bot', text: 'Hello! Welcome to VictorMedia Support. How can we help you today?', time: 'Just now' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMsgs = [...messages, { sender: 'user' as const, text: userMsg, time: timeStr }];
    setMessages(newMsgs);
    setInput('');

    // Instant bot assistance reply
    setTimeout(() => {
      let botReply = 'Thank you for reaching out! Your support ticket has been recorded. For direct email support, contact us at arasu9629hf@gmail.com.';

      if (userMsg.toLowerCase().includes('calculator') || userMsg.toLowerCase().includes('tool')) {
        botReply = 'All VictorMedia tools process 100% locally in your browser. If a tool fails to compute, try refreshing your tab or clearing your browser cache.';
      } else if (userMsg.toLowerCase().includes('adsense') || userMsg.toLowerCase().includes('ads')) {
        botReply = 'VictorMedia is fully configured with Google AdSense (ca-pub-6751037211810646) and ads.txt compliant standards.';
      } else if (userMsg.toLowerCase().includes('privacy') || userMsg.toLowerCase().includes('data')) {
        botReply = 'VictorMedia does not store your tool inputs on remote cloud servers. Everything is sandboxed in your browser.';
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 700);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-primary"
          style={{
            borderRadius: 'var(--radius-full)',
            width: '56px',
            height: '56px',
            padding: 0,
            boxShadow: '0 8px 30px var(--accent-glow)',
          }}
          aria-label="Open Customer Support Chat"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div
          className="glass-card"
          style={{
            width: '360px',
            height: '480px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            border: '1px solid var(--bg-card-border)',
            background: 'var(--bg-secondary)',
          }}
        >
          {/* Widget Header */}
          <div
            style={{
              background: 'var(--accent-gradient)',
              color: '#ffffff',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Bot size={22} />
              <div>
                <strong style={{ fontSize: '0.95rem', display: 'block' }}>VictorMedia Live Support</strong>
                <span style={{ fontSize: '0.75rem', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span className="pulse-dot" style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }} /> Online Assist
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '82%',
                  background: msg.sender === 'user' ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                  color: msg.sender === 'user' ? '#ffffff' : 'var(--text-primary)',
                  padding: '0.65rem 0.9rem',
                  borderRadius: '14px',
                  fontSize: '0.88rem',
                  lineHeight: 1.45,
                }}
              >
                <div>{msg.text}</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.6, marginTop: '0.2rem', textAlign: 'right' }}>{msg.time}</div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} style={{ borderTop: '1px solid var(--bg-card-border)', padding: '0.75rem', background: 'var(--bg-primary)' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask support..."
                className="input-field"
                style={{ height: '40px', fontSize: '0.88rem' }}
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '0 0.9rem', height: '40px' }}>
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
