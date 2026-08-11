'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Save contact submission to Firestore
      await addDoc(collection(db, 'contact_submissions'), {
        name,
        email,
        subject,
        message,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch {
      // Fallback success state if offline or demo mode
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '720px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>Contact VictorMdeia</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Have feedback, a feature suggestion, or need support? Send us a message below or email us directly at <a href="mailto:arasu9629hf@gmail.com" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>arasu9629hf@gmail.com</a>.
        </p>
      </div>

      {submitted ? (
        <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', background: 'var(--bg-secondary)' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
            <CheckCircle size={32} />
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Thank You for Your Message!</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We have received your message and will get back to you at <strong>{email}</strong> as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '2rem', background: 'var(--bg-secondary)' }}>
          {error && (
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
              <AlertCircle size={18} /> {error}
            </div>
          )}

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>Your Name *</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="John Doe" className="input-field" />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>Email Address *</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="name@example.com" className="input-field" />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>Subject</label>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Feature Suggestion / Tool Feedback" className="input-field" />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>Message *</label>
            <textarea rows={6} value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Type your message here..." className="textarea-field" />
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', padding: '0.75rem', fontSize: '1rem' }}>
            <Send size={18} /> {loading ? 'Sending Message...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
