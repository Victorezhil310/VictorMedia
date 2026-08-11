'use client';

import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { ToolMeta } from '@/lib/tools-data';

interface ToolCardProps {
  tool: ToolMeta;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  // @ts-expect-error Dynamic Lucide icon resolution
  const IconComponent = Icons[tool.iconName] || Icons.Wrench;

  return (
    <Link href={`/tools/${tool.slug}`} className="glass-card tool-card">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
          <div className="tool-icon-wrapper">
            <IconComponent size={22} />
          </div>
          <span className="badge badge-accent">{tool.category}</span>
        </div>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>{tool.name}</h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {tool.shortDescription}
        </p>
      </div>

      <div style={{
        marginTop: '1.25rem',
        paddingTop: '0.75rem',
        borderTop: '1px solid var(--bg-card-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.85rem',
        fontWeight: 600,
        color: 'var(--accent-primary)'
      }}>
        <span>Open Utility</span>
        <Icons.ArrowRight size={16} />
      </div>
    </Link>
  );
};
