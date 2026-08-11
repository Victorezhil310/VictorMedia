'use client';

import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Download, Upload, QrCode, Palette, FileArchive } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* 1. QR CODE GENERATOR                                                       */
/* -------------------------------------------------------------------------- */
export const QrGeneratorTool: React.FC = () => {
  const [text, setText] = useState('https://VictorMedia.net');
  const [qrUrl, setQrUrl] = useState('');
  const [fgColor, setFgColor] = useState('#4f46e5');
  const [bgColor, setBgColor] = useState('#ffffff');

  useEffect(() => {
    if (text) {
      QRCode.toDataURL(text, { width: 300, margin: 2, color: { dark: fgColor, light: bgColor } })
        .then(setQrUrl)
        .catch(console.error);
    }
  }, [text, fgColor, bgColor]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
      <div>
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>QR Content (URL or Text)</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="input-field" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Foreground Color</label>
            <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} style={{ width: '100%', height: '40px', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Background Color</label>
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} style={{ width: '100%', height: '40px', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        {qrUrl && (
          <div style={{ background: '#ffffff', padding: '1rem', borderRadius: 'var(--radius-lg)', display: 'inline-block', boxShadow: 'var(--shadow-md)', marginBottom: '1rem' }}>
            <img src={qrUrl} alt="Generated QR Code" style={{ width: '220px', height: '220px', display: 'block' }} />
          </div>
        )}
        <div>
          <a href={qrUrl} download="VictorMedia-qrcode.png" className="btn btn-primary">
            <Download size={16} /> Download QR PNG
          </a>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. COLOR CONVERTER (HEX / RGB / HSL)                                       */
/* -------------------------------------------------------------------------- */
export const ColorConverterTool: React.FC = () => {
  const [hex, setHex] = useState('#4f46e5');

  const hexToRgb = (h: string) => {
    let clean = h.replace('#', '');
    if (clean.length === 3) clean = clean.split('').map((c) => c + c).join('');
    const num = parseInt(clean, 16);
    if (isNaN(num) || clean.length !== 6) return { r: 0, g: 0, b: 0 };
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
  };

  const rgb = hexToRgb(hex);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Pick Color or Enter HEX</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="color" value={hex} onChange={(e) => setHex(e.target.value)} style={{ width: '50px', height: '44px', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer' }} />
            <input type="text" value={hex} onChange={(e) => setHex(e.target.value)} className="input-field" style={{ textTransform: 'uppercase' }} />
          </div>
        </div>

        <div style={{
          height: '100px',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: hex,
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: 700,
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}>
          Preview Box
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center', background: 'var(--bg-tertiary)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>HEX Code</span>
          <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{hex.toUpperCase()}</div>
        </div>
        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center', background: 'var(--bg-tertiary)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>RGB Value</span>
          <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>rgb({rgb.r}, {rgb.g}, {rgb.b})</div>
        </div>
        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center', background: 'var(--bg-tertiary)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>CSS Format</span>
          <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-primary)' }}>color: {hex};</div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. IMAGE COMPRESSOR                                                        */
/* -------------------------------------------------------------------------- */
export const ImageCompressorTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(80);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [origSize, setOrigSize] = useState<number>(0);
  const [compSize, setCompSize] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      setOrigSize(selected.size);
      compressImage(selected, quality);
    }
  };

  const compressImage = (imgFile: File, q: number) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const dataUrl = canvas.toDataURL('image/jpeg', q / 100);
          setCompressedUrl(dataUrl);
          // Estimate compressed size
          const head = 'data:image/jpeg;base64,';
          const size = Math.round(((dataUrl.length - head.length) * 3) / 4);
          setCompSize(size);
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(imgFile);
  };

  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <label className="btn btn-outline" style={{ cursor: 'pointer', display: 'inline-flex', gap: '0.5rem' }}>
          <Upload size={18} /> Select Image File (JPEG / PNG)
          <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
        </label>
      </div>

      {file && (
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Compression Quality: {quality}%</label>
          <input
            type="range"
            min="10"
            max="100"
            value={quality}
            onChange={(e) => {
              const q = parseInt(e.target.value);
              setQuality(q);
              if (file) compressImage(file, q);
            }}
            style={{ width: '100%' }}
          />
        </div>
      )}

      {compressedUrl && (
        <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
            <div>Original Size: <strong>{(origSize / 1024).toFixed(1)} KB</strong></div>
            <div>Compressed Size: <strong style={{ color: 'var(--success)' }}>{(compSize / 1024).toFixed(1)} KB</strong></div>
          </div>
          <img src={compressedUrl} alt="Compressed Result" style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }} />
          <div>
            <a href={compressedUrl} download="VictorMedia-compressed.jpg" className="btn btn-primary">
              <Download size={16} /> Download Compressed Image
            </a>
          </div>
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. IMAGE RESIZER                                                           */
/* -------------------------------------------------------------------------- */
export const ImageResizerTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [resizedUrl, setResizedUrl] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      const img = new Image();
      img.onload = () => {
        setWidth(img.width);
        setHeight(img.height);
      };
      img.src = URL.createObjectURL(selected);
    }
  };

  const handleResize = () => {
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        setResizedUrl(canvas.toDataURL('image/png'));
      }
    };
    img.src = URL.createObjectURL(file);
  };

  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <input type="file" accept="image/*" onChange={handleUpload} className="input-field" />
      </div>

      {file && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Target Width (px)</label>
              <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value) || 0)} className="input-field" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Target Height (px)</label>
              <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value) || 0)} className="input-field" />
            </div>
          </div>

          <button onClick={handleResize} className="btn btn-primary" style={{ marginBottom: '1.5rem' }}>
            Resize Image
          </button>
        </>
      )}

      {resizedUrl && (
        <div style={{ textAlign: 'center' }}>
          <img src={resizedUrl} alt="Resized" style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }} />
          <div>
            <a href={resizedUrl} download="VictorMedia-resized.png" className="btn btn-primary">
              <Download size={16} /> Download Resized Image
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 5. IMAGE FORMAT CONVERTER                                                  */
/* -------------------------------------------------------------------------- */
export const ImageFormatConverterTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] = useState<'image/jpeg' | 'image/png' | 'image/webp'>('image/webp');
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);

  const handleConvert = () => {
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        setConvertedUrl(canvas.toDataURL(targetFormat, 0.9));
      }
    };
    img.src = URL.createObjectURL(file);
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Upload Source Image</label>
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="input-field" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Target Format</label>
          <select value={targetFormat} onChange={(e) => setTargetFormat(e.target.value as any)} className="select-field">
            <option value="image/webp">WebP (.webp)</option>
            <option value="image/png">PNG (.png)</option>
            <option value="image/jpeg">JPEG (.jpg)</option>
          </select>
        </div>
      </div>

      <button onClick={handleConvert} className="btn btn-primary" style={{ marginBottom: '1.5rem' }}>
        Convert Format
      </button>

      {convertedUrl && (
        <div style={{ textAlign: 'center' }}>
          <a href={convertedUrl} download={`VictorMedia-converted.${targetFormat.split('/')[1]}`} className="btn btn-primary">
            <Download size={16} /> Download Converted File
          </a>
        </div>
      )}
    </div>
  );
};
