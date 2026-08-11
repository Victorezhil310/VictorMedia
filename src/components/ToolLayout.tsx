'use client';

import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { ToolMeta, TOOLS_REGISTRY } from '@/lib/tools-data';
import { ToolCard } from './ToolCard';
import { AdUnit } from './AdComponents';

interface ToolLayoutProps {
  tool: ToolMeta;
  children: React.ReactNode;
}

export const ToolLayout: React.FC<ToolLayoutProps> = ({ tool, children }) => {
  // @ts-expect-error Dynamic icon lookup
  const IconComponent = Icons[tool.iconName] || Icons.Wrench;

  const relatedTools = TOOLS_REGISTRY.filter(
    (t) => t.category === tool.category && t.slug !== tool.slug
  ).slice(0, 3);

  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      {/* Breadcrumb Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        <Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
        <span>/</span>
        <Link href="/tools" style={{ color: 'var(--text-secondary)' }}>Tools</Link>
        <span>/</span>
        <Link href="/categories" style={{ color: 'var(--text-secondary)' }}>{tool.category}</Link>
        <span>/</span>
        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{tool.name}</span>
      </nav>

      {/* Tool Title Banner */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--accent-light)',
            color: 'var(--accent-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <IconComponent size={28} />
          </div>
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{tool.name}</h1>
            <span className="badge badge-accent">{tool.category}</span>
          </div>
        </div>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '720px' }}>
          {tool.shortDescription}
        </p>
      </div>

      {/* Primary Tool Component Container */}
      <div className="tool-workspace">
        {children}
      </div>

      {/* Policy Compliant Ad Placement */}
      <AdUnit format="auto" />

      {/* Informational Guides Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem', margin: '3rem 0' }}>
        <div className="glass-card" style={{ padding: '2rem', background: 'var(--bg-secondary)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Icons.BookOpen size={22} color="var(--accent-primary)" />
            <span>How to Use the {tool.name}</span>
          </h2>
          <ol style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {tool.howToUse.map((step, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>{step}</li>
            ))}
          </ol>
        </div>

        {tool.features && tool.features.length > 0 && (
          <div className="glass-card" style={{ padding: '2rem', background: 'var(--bg-secondary)' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Icons.Zap size={22} color="var(--accent-primary)" />
              <span>Key Features</span>
            </h2>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {tool.features.map((feat, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>{feat}</li>
              ))}
            </ul>
          </div>
        )}

        {/* FAQ Section */}
        {tool.faq && tool.faq.length > 0 && (
          <div className="glass-card" style={{ padding: '2rem', background: 'var(--bg-secondary)' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Icons.HelpCircle size={22} color="var(--accent-primary)" />
              <span>Frequently Asked Questions</span>
            </h2>
            {tool.faq.map((item, idx) => (
              <div key={idx} className="faq-item">
                <div className="faq-question">{item.question}</div>
                <div className="faq-answer">{item.answer}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Related Tools Recommendation */}
      {relatedTools.length > 0 && (
        <div style={{ marginTop: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Related {tool.category} Tools</h3>
          <div className="tools-grid">
            {relatedTools.map((relTool) => (
              <ToolCard key={relTool.slug} tool={relTool} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
