'use client';

import React, { useState } from 'react';
import { Copy, Check, Trash2 } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* 1. WORD COUNTER                                                            */
/* -------------------------------------------------------------------------- */
export const WordCounterTool: React.FC = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charsWithSpaces = text.length;
  const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphs = text.trim() === '' ? 0 : text.split(/\n+/).filter(Boolean).length;
  const readingTimeMinutes = Math.ceil(words / 200);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center', background: 'var(--bg-tertiary)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Words</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{words}</div>
        </div>
        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center', background: 'var(--bg-tertiary)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Characters</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{charsWithSpaces}</div>
        </div>
        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center', background: 'var(--bg-tertiary)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sentences</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{sentences}</div>
        </div>
        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center', background: 'var(--bg-tertiary)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Paragraphs</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{paragraphs}</div>
        </div>
        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center', background: 'var(--bg-tertiary)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Reading Time</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>~{readingTimeMinutes} min</div>
        </div>
      </div>

      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <textarea
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your document text here..."
          className="textarea-field"
        />
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button onClick={handleCopy} className="btn btn-primary">
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'Copied Text' : 'Copy Text'}
        </button>
        <button onClick={() => setText('')} className="btn btn-secondary" style={{ color: 'var(--danger)' }}>
          <Trash2 size={16} /> Clear
        </button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. CHARACTER COUNTER                                                       */
/* -------------------------------------------------------------------------- */
export const CharacterCounterTool: React.FC = () => {
  const [text, setText] = useState('');

  const charCount = text.length;
  const twitterLimit = 280;
  const seoTitleLimit = 60;

  return (
    <div>
      <textarea
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your social post, headline, or tweet..."
        className="textarea-field"
        style={{ marginBottom: '1.5rem' }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
        <div className="glass-card" style={{ padding: '1.25rem', background: 'var(--bg-tertiary)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
            <strong>Twitter / X Post</strong>
            <span>{charCount} / {twitterLimit}</span>
          </div>
          <div style={{ height: '8px', background: 'var(--bg-card-border)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${Math.min(100, (charCount / twitterLimit) * 100)}%`,
              background: charCount > twitterLimit ? 'var(--danger)' : 'var(--accent-primary)',
              transition: 'width 0.2s'
            }} />
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1.25rem', background: 'var(--bg-tertiary)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
            <strong>Google Meta Title</strong>
            <span>{charCount} / {seoTitleLimit}</span>
          </div>
          <div style={{ height: '8px', background: 'var(--bg-card-border)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${Math.min(100, (charCount / seoTitleLimit) * 100)}%`,
              background: charCount > seoTitleLimit ? 'var(--warning)' : 'var(--success)',
              transition: 'width 0.2s'
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. CASE CONVERTER                                                          */
/* -------------------------------------------------------------------------- */
export const CaseConverterTool: React.FC = () => {
  const [text, setText] = useState('Sample Text For Case Conversion');
  const [copied, setCopied] = useState(false);

  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const toTitle = () => {
    setText(text.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase()));
  };
  const toSentence = () => {
    setText(text.toLowerCase().replace(/(^\w|\.\s+\w)/gm, (match) => match.toUpperCase()));
  };
  const toSlug = () => {
    setText(
      text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <textarea
        rows={7}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea-field"
        style={{ marginBottom: '1.25rem' }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
        <button onClick={toUpper} className="btn btn-secondary">UPPERCASE</button>
        <button onClick={toLower} className="btn btn-secondary">lowercase</button>
        <button onClick={toTitle} className="btn btn-secondary">Title Case</button>
        <button onClick={toSentence} className="btn btn-secondary">Sentence case</button>
        <button onClick={toSlug} className="btn btn-secondary">slug-format</button>
      </div>

      <button onClick={handleCopy} className="btn btn-primary">
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Copied to Clipboard' : 'Copy Converted Text'}
      </button>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. REMOVE DUPLICATE LINES                                                  */
/* -------------------------------------------------------------------------- */
export const RemoveDuplicateLinesTool: React.FC = () => {
  const [text, setText] = useState('apple\nbanana\napple\norange\nbanana');
  const [sortAlpha, setSortAlpha] = useState(false);

  const processDeduplicate = () => {
    const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
    const unique = Array.from(new Set(lines));
    if (sortAlpha) {
      unique.sort();
    }
    setText(unique.join('\n'));
  };

  return (
    <div>
      <textarea
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea-field"
        style={{ marginBottom: '1.25rem' }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
          <input type="checkbox" checked={sortAlpha} onChange={(e) => setSortAlpha(e.target.checked)} />
          <span>Sort Alphabetically</span>
        </label>
        <button onClick={processDeduplicate} className="btn btn-primary">
          Remove Duplicate Lines
        </button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 5. TEXT FORMATTER                                                          */
/* -------------------------------------------------------------------------- */
export const TextFormatterTool: React.FC = () => {
  const [text, setText] = useState('  This   is    sample    text   with   extra   spaces.  ');

  const formatText = () => {
    const cleaned = text
      .replace(/[ \t]+/g, ' ')
      .replace(/\n\s*\n/g, '\n\n')
      .trim();
    setText(cleaned);
  };

  return (
    <div>
      <textarea
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea-field"
        style={{ marginBottom: '1.25rem' }}
      />

      <button onClick={formatText} className="btn btn-primary">
        Clean Extra Spaces & Formatting
      </button>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 6. TEXT TO SPEECH READER                                                   */
/* -------------------------------------------------------------------------- */
export const TextToSpeechTool: React.FC = () => {
  const [text, setText] = useState('Welcome to VictorMedia! Free, fast, and private online tools.');
  const [speaking, setSpeaking] = useState(false);

  const handleSpeak = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Text to speech is not supported in this browser.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  };

  return (
    <div>
      <textarea
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea-field"
        placeholder="Enter text to read aloud..."
        style={{ marginBottom: '1.25rem' }}
      />

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={handleSpeak} disabled={speaking} className="btn btn-primary">
          {speaking ? '🔊 Speaking...' : '▶ Play Audio'}
        </button>
        <button onClick={handleStop} disabled={!speaking} className="btn btn-secondary">
          ⏹ Stop
        </button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 7. SLUG GENERATOR                                                          */
/* -------------------------------------------------------------------------- */
export const SlugGeneratorTool: React.FC = () => {
  const [input, setInput] = useState('10 Best Online Developer Tools for 2026!');
  const [slug, setSlug] = useState('');

  const generateSlug = () => {
    const s = input
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setSlug(s);
  };

  return (
    <div>
      <div style={{ marginBottom: '1.25rem' }}>
        <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Headline or Title</label>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="input-field" />
      </div>

      <button onClick={generateSlug} className="btn btn-primary" style={{ marginBottom: '1.5rem' }}>
        Generate URL Slug
      </button>

      <div>
        <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Generated SEO Slug</label>
        <input type="text" value={slug} readOnly className="input-field" style={{ background: 'var(--bg-tertiary)', fontFamily: 'monospace' }} />
      </div>
    </div>
  );
};
