'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wrench, Search, Menu, X, Heart } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { DonateModal } from './DonateModal';
import { TOOLS_REGISTRY } from '@/lib/tools-data';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  const filteredTools = searchQuery.trim() === ''
    ? []
    : TOOLS_REGISTRY.filter(
        (t) =>
          t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 6);

  return (
    <>
      <header className="header-nav">
        <div className="container header-container">
          <Link href="/" className="logo-brand">
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }}>
              <Wrench size={20} />
            </div>
            <span>Victor<span className="gradient-text">Mdeia</span></span>
          </Link>

          {/* Search Bar Desktop */}
          <div style={{ position: 'relative', flex: '0 1 360px', display: 'none' }} className="desktop-search">
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search 30+ tools..."
                className="input-field"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
                onFocus={() => setShowSearchResults(true)}
                onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                style={{ paddingLeft: '2.5rem', height: '40px', fontSize: '0.88rem' }}
              />
              <Search size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>

            {showSearchResults && filteredTools.length > 0 && (
              <div className="glass-card" style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                right: 0,
                background: 'var(--bg-secondary)',
                zIndex: 200,
                padding: '0.5rem',
                borderRadius: 'var(--radius-md)'
              }}>
                {filteredTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    style={{
                      display: 'block',
                      padding: '0.6rem 0.8rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.88rem',
                      color: 'var(--text-primary)',
                      textDecoration: 'none'
                    }}
                    className="search-item"
                  >
                    <strong>{tool.name}</strong>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{tool.category}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <style jsx>{`
            @media (min-width: 768px) {
              .desktop-search { display: block !important; }
            }
          `}</style>

          {/* Navigation Links */}
          <nav style={{ display: 'none' }} className="desktop-nav">
            <ul className="nav-links">
              <li><Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link></li>
              <li><Link href="/tools" className={`nav-link ${pathname.startsWith('/tools') ? 'active' : ''}`}>Tools</Link></li>
              <li><Link href="/categories" className={`nav-link ${pathname === '/categories' ? 'active' : ''}`}>Categories</Link></li>
              <li><Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link></li>
              <li><Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
            </ul>
          </nav>

          <style jsx>{`
            @media (min-width: 900px) {
              .desktop-nav { display: block !important; }
            }
          `}</style>

          {/* Actions: Donate, Theme Toggle, Mobile Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => setDonateOpen(true)}
              className="btn btn-outline"
              style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem', color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.4)' }}
            >
              <Heart size={15} fill="#ef4444" />
              <span>Donate</span>
            </button>

            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                padding: '0.4rem'
              }}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <style jsx>{`
              @media (min-width: 900px) {
                .mobile-toggle { display: none !important; }
              }
            `}</style>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--bg-card-border)',
            padding: '1.25rem 1.25rem 1.75rem 1.25rem'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                placeholder="Search tools..."
                className="input-field"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li><Link href="/tools" onClick={() => setMobileMenuOpen(false)}>All Tools</Link></li>
              <li><Link href="/categories" onClick={() => setMobileMenuOpen(false)}>Categories</Link></li>
              <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
              <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </header>

      <DonateModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />
    </>
  );
};
