'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

export const AdSenseScript: React.FC = () => {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  if (!publisherId) return null;

  return (
    <Script
      id="adsense-init"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

interface AdUnitProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
  style?: React.CSSProperties;
}

export const AdUnit: React.FC<AdUnitProps> = ({
  slot = '1234567890',
  format = 'auto',
  responsive = true,
  style = { display: 'block', margin: '2rem 0' },
}) => {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  useEffect(() => {
    if (publisherId && typeof window !== 'undefined') {
      try {
        // @ts-expect-error Google adsbygoogle array
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense push error:', err);
      }
    }
  }, [publisherId]);

  if (!publisherId) {
    return (
      <div
        style={{
          padding: '1rem',
          background: 'var(--bg-tertiary)',
          border: '1px dashed var(--bg-card-border)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.8rem',
          margin: '2rem 0'
        }}
      >
        <span>Advertisement Placement (AdSense active when publisher ID is configured)</span>
      </div>
    );
  }

  return (
    <div style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={publisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};
