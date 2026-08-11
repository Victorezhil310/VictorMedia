'use client';

import React from 'react';
import Link from 'next/link';
import { Wrench, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-column">
            <Link href="/" className="logo-brand" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--accent-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}>
                <Wrench size={18} />
              </div>
              <span>Victor<span className="gradient-text">Mdeia</span></span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              VictorMdeia provides free, fast, private, and genuinely useful online tools. All calculations and text processing occur directly in your browser.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              <Mail size={16} />
              <a href="mailto:arasu9629hf@gmail.com" style={{ color: 'var(--accent-primary)' }}>arasu9629hf@gmail.com</a>
            </div>
          </div>

          {/* Quick Tools */}
          <div className="footer-column">
            <h4>Popular Tools</h4>
            <ul className="footer-links">
              <li><Link href="/tools/calculator">Basic Calculator</Link></li>
              <li><Link href="/tools/bmi-calculator">BMI Calculator</Link></li>
              <li><Link href="/tools/word-counter">Word Counter</Link></li>
              <li><Link href="/tools/json-formatter">JSON Formatter</Link></li>
              <li><Link href="/tools/qr-generator">QR Code Generator</Link></li>
              <li><Link href="/tools/password-generator">Password Generator</Link></li>
              <li><Link href="/tools/image-compressor">Image Compressor</Link></li>
            </ul>
          </div>

          {/* Categories & Navigation */}
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/tools">All Tools</Link></li>
              <li><Link href="/categories">Tool Categories</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/sitemap.xml">XML Sitemap</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="footer-column">
            <h4>Legal & Policy</h4>
            <ul className="footer-links">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
              <li><Link href="/cookie-policy">Cookie Policy</Link></li>
              <li><Link href="/acceptable-use">Acceptable Use</Link></li>
              <li><Link href="/data-deletion">Data Deletion</Link></li>
              <li><Link href="/dmca">DMCA / Copyright</Link></li>
              <li><Link href="/accessibility">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © 2026 VictorMdeia. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
            <ShieldCheck size={16} />
            <span>Privacy-First & Browser-Processed Utilities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
