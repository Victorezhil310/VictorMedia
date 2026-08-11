'use client';

import React, { useState } from 'react';
import { Copy, Check, ShieldCheck, AlertCircle } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* 1. JSON FORMATTER                                                          */
/* -------------------------------------------------------------------------- */
export const JsonFormatterTool: React.FC = () => {
  const [jsonInput, setJsonInput] = useState('{"name":"VictorMedia","tools":30,"active":true}');
  const [indent, setIndent] = useState<number | 'min'>(2);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const formatted = indent === 'min' ? JSON.stringify(parsed) : JSON.stringify(parsed, null, indent);
      setJsonInput(formatted);
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Invalid JSON Syntax');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem', alignItems: 'center' }}>
        <label style={{ fontSize: '0.88rem' }}>Indentation:</label>
        <button onClick={() => setIndent(2)} className={`btn ${indent === 2 ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '0.3rem 0.65rem', fontSize: '0.8rem' }}>2 Spaces</button>
        <button onClick={() => setIndent(4)} className={`btn ${indent === 4 ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '0.3rem 0.65rem', fontSize: '0.8rem' }}>4 Spaces</button>
        <button onClick={() => setIndent('min')} className={`btn ${indent === 'min' ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '0.3rem 0.65rem', fontSize: '0.8rem' }}>Minify</button>
        <button onClick={handleFormat} className="btn btn-outline" style={{ marginLeft: 'auto' }}>Format JSON</button>
      </div>

      {error && (
        <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
          <AlertCircle size={18} /> {error}
        </div>
      )}

      <textarea
        rows={12}
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        className="textarea-field"
        style={{ fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '1rem' }}
      />

      <button onClick={handleCopy} className="btn btn-primary">
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Copied Formatted JSON' : 'Copy JSON'}
      </button>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. JSON VALIDATOR                                                          */
/* -------------------------------------------------------------------------- */
export const JsonValidatorTool: React.FC = () => {
  const [jsonInput, setJsonInput] = useState('{\n  "status": "success",\n  "code": 200\n}');
  const [validationResult, setValidationResult] = useState<{ valid: boolean; message: string } | null>(null);

  const validate = () => {
    try {
      JSON.parse(jsonInput);
      setValidationResult({ valid: true, message: 'Valid JSON payload! Complies with RFC 8259 syntax.' });
    } catch (err: unknown) {
      setValidationResult({ valid: false, message: err instanceof Error ? err.message : 'Syntax error in JSON string' });
    }
  };

  return (
    <div>
      <textarea
        rows={10}
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        className="textarea-field"
        style={{ fontFamily: 'monospace', marginBottom: '1.25rem' }}
      />

      <button onClick={validate} className="btn btn-primary" style={{ marginBottom: '1.5rem' }}>
        <Check size={16} /> Validate JSON Syntax
      </button>

      {validationResult && (
        <div style={{
          padding: '1rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          background: validationResult.valid ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
          color: validationResult.valid ? 'var(--success)' : 'var(--danger)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          {validationResult.valid ? <ShieldCheck size={22} /> : <AlertCircle size={22} />}
          <strong style={{ fontSize: '0.95rem' }}>{validationResult.message}</strong>
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. BASE64 ENCODER / DECODER                                                */
/* -------------------------------------------------------------------------- */
export const Base64Tool: React.FC = () => {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [input, setInput] = useState('Hello VictorMedia Tools!');
  const [output, setOutput] = useState('');

  const processBase64 = () => {
    try {
      if (mode === 'encode') {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
    } catch {
      setOutput('Error: Invalid Base64 input string');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
        <button onClick={() => setMode('encode')} className={`btn ${mode === 'encode' ? 'btn-primary' : 'btn-secondary'}`}>Encode to Base64</button>
        <button onClick={() => setMode('decode')} className={`btn ${mode === 'decode' ? 'btn-primary' : 'btn-secondary'}`}>Decode Base64</button>
      </div>

      <div style={{ marginBottom: '1.25rem' }}>
        <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>{mode === 'encode' ? 'Plain Text Input' : 'Base64 Encoded Input'}</label>
        <textarea rows={5} value={input} onChange={(e) => setInput(e.target.value)} className="textarea-field" />
      </div>

      <button onClick={processBase64} className="btn btn-outline" style={{ marginBottom: '1.5rem' }}>
        Process Base64
      </button>

      <div>
        <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Result</label>
        <textarea rows={5} value={output} readOnly className="textarea-field" style={{ background: 'var(--bg-tertiary)' }} />
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. URL ENCODER / DECODER                                                   */
/* -------------------------------------------------------------------------- */
export const UrlTool: React.FC = () => {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [input, setInput] = useState('https://VictorMedia.net/search?q=free tools');
  const [output, setOutput] = useState('');

  const processUrl = () => {
    try {
      if (mode === 'encode') {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input));
      }
    } catch {
      setOutput('Error processing URL encoding');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
        <button onClick={() => setMode('encode')} className={`btn ${mode === 'encode' ? 'btn-primary' : 'btn-secondary'}`}>URL Encode</button>
        <button onClick={() => setMode('decode')} className={`btn ${mode === 'decode' ? 'btn-primary' : 'btn-secondary'}`}>URL Decode</button>
      </div>

      <div style={{ marginBottom: '1.25rem' }}>
        <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Input String</label>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="input-field" />
      </div>

      <button onClick={processUrl} className="btn btn-outline" style={{ marginBottom: '1.5rem' }}>
        Process URL
      </button>

      <div>
        <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Output</label>
        <input type="text" value={output} readOnly className="input-field" style={{ background: 'var(--bg-tertiary)' }} />
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 5. CSS MINIFIER & BEAUTIFIER                                                */
/* -------------------------------------------------------------------------- */
export const CssMinifierTool: React.FC = () => {
  const [input, setInput] = useState(`body {\n  margin: 0;\n  padding: 0;\n  background-color: #ffffff;\n}`);
  const [output, setOutput] = useState('');

  const minifyCss = () => {
    const minified = input
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\s+/g, ' ')
      .replace(/\s*([{}:;,])\s*/g, '$1')
      .replace(/;\}/g, '}')
      .trim();
    setOutput(minified);
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>CSS Code</label>
        <textarea rows={6} value={input} onChange={(e) => setInput(e.target.value)} className="textarea-field" style={{ fontFamily: 'monospace' }} />
      </div>

      <button onClick={minifyCss} className="btn btn-primary" style={{ marginBottom: '1.5rem' }}>
        Minify CSS
      </button>

      <div>
        <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Minified Output</label>
        <textarea rows={5} value={output} readOnly className="textarea-field" style={{ background: 'var(--bg-tertiary)', fontFamily: 'monospace' }} />
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 6. CSV TO JSON CONVERTER                                                    */
/* -------------------------------------------------------------------------- */
export const CsvToJsonTool: React.FC = () => {
  const [csv, setCsv] = useState(`name,age,city\nAlice,30,New York\nBob,25,London`);
  const [json, setJson] = useState('');

  const convertCsvToJson = () => {
    try {
      const lines = csv.trim().split('\n');
      if (lines.length < 2) {
        setJson('[]');
        return;
      }
      const headers = lines[0].split(',').map((h) => h.trim());
      const result = [];
      for (let i = 1; i < lines.length; i++) {
        const obj: Record<string, string> = {};
        const currentline = lines[i].split(',');
        headers.forEach((header, j) => {
          obj[header] = currentline[j] ? currentline[j].trim() : '';
        });
        result.push(obj);
      }
      setJson(JSON.stringify(result, null, 2));
    } catch {
      setJson('Error parsing CSV');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>CSV Input</label>
        <textarea rows={5} value={csv} onChange={(e) => setCsv(e.target.value)} className="textarea-field" style={{ fontFamily: 'monospace' }} />
      </div>

      <button onClick={convertCsvToJson} className="btn btn-primary" style={{ marginBottom: '1.5rem' }}>
        Convert to JSON
      </button>

      <div>
        <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>JSON Output</label>
        <textarea rows={7} value={json} readOnly className="textarea-field" style={{ background: 'var(--bg-tertiary)', fontFamily: 'monospace' }} />
      </div>
    </div>
  );
};

