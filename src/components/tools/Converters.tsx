'use client';

import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* LENGTH CONVERTER                                                           */
/* -------------------------------------------------------------------------- */
export const LengthConverterTool: React.FC = () => {
  const [val, setVal] = useState('1');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('ft');

  const metersMap: Record<string, number> = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
    mi: 1609.344,
  };

  const inputMeters = (parseFloat(val) || 0) * (metersMap[fromUnit] || 1);
  const result = inputMeters / (metersMap[toUnit] || 1);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Value & Source Unit</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="number" value={val} onChange={(e) => setVal(e.target.value)} className="input-field" />
            <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="select-field" style={{ width: '110px' }}>
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">Meters (m)</option>
              <option value="km">km</option>
              <option value="in">Inches (in)</option>
              <option value="ft">Feet (ft)</option>
              <option value="yd">Yards (yd)</option>
              <option value="mi">Miles (mi)</option>
            </select>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => { setFromUnit(toUnit); setToUnit(fromUnit); }}
            className="btn btn-outline"
            style={{ borderRadius: '50%', width: '44px', height: '44px', padding: 0 }}
          >
            <ArrowLeftRight size={18} />
          </button>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Target Unit</label>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="select-field">
            <option value="mm">Millimeters (mm)</option>
            <option value="cm">Centimeters (cm)</option>
            <option value="m">Meters (m)</option>
            <option value="km">Kilometers (km)</option>
            <option value="in">Inches (in)</option>
            <option value="ft">Feet (ft)</option>
            <option value="yd">Yards (yd)</option>
            <option value="mi">Miles (mi)</option>
          </select>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Converted Output</span>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)', margin: '0.4rem 0' }}>
          {result.toFixed(4)} <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>{toUnit}</span>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* WEIGHT CONVERTER                                                           */
/* -------------------------------------------------------------------------- */
export const WeightConverterTool: React.FC = () => {
  const [val, setVal] = useState('1');
  const [fromUnit, setFromUnit] = useState('kg');
  const [toUnit, setToUnit] = useState('lbs');

  const gramsMap: Record<string, number> = {
    mg: 0.001,
    g: 1,
    kg: 1000,
    oz: 28.3495,
    lbs: 453.592,
    ton: 1000000,
  };

  const inputGrams = (parseFloat(val) || 0) * (gramsMap[fromUnit] || 1);
  const result = inputGrams / (gramsMap[toUnit] || 1);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Value & Source Mass</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="number" value={val} onChange={(e) => setVal(e.target.value)} className="input-field" />
            <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="select-field" style={{ width: '110px' }}>
              <option value="mg">mg</option>
              <option value="g">Grams (g)</option>
              <option value="kg">kg</option>
              <option value="oz">Ounces (oz)</option>
              <option value="lbs">Pounds (lbs)</option>
              <option value="ton">Tons</option>
            </select>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={() => { setFromUnit(toUnit); setToUnit(fromUnit); }} className="btn btn-outline" style={{ borderRadius: '50%', width: '44px', height: '44px', padding: 0 }}>
            <ArrowLeftRight size={18} />
          </button>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Target Mass Unit</label>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="select-field">
            <option value="mg">Milligrams (mg)</option>
            <option value="g">Grams (g)</option>
            <option value="kg">Kilograms (kg)</option>
            <option value="oz">Ounces (oz)</option>
            <option value="lbs">Pounds (lbs)</option>
            <option value="ton">Metric Tons</option>
          </select>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Converted Mass Result</span>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)', margin: '0.4rem 0' }}>
          {result.toFixed(4)} <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>{toUnit}</span>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* TEMPERATURE CONVERTER                                                      */
/* -------------------------------------------------------------------------- */
export const TemperatureConverterTool: React.FC = () => {
  const [val, setVal] = useState('25');
  const [fromUnit, setFromUnit] = useState<'C' | 'F' | 'K'>('C');

  const v = parseFloat(val) || 0;
  let c = 0, f = 0, k = 0;

  if (fromUnit === 'C') {
    c = v;
    f = (v * 9) / 5 + 32;
    k = v + 273.15;
  } else if (fromUnit === 'F') {
    c = ((v - 32) * 5) / 9;
    f = v;
    k = c + 273.15;
  } else {
    k = v;
    c = v - 273.15;
    f = (c * 9) / 5 + 32;
  }

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Temperature Value</label>
          <input type="number" value={val} onChange={(e) => setVal(e.target.value)} className="input-field" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Source Scale</label>
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value as 'C' | 'F' | 'K')} className="select-field">
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        <div className="glass-card" style={{ padding: '1rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Celsius</span>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{c.toFixed(2)} °C</div>
        </div>
        <div className="glass-card" style={{ padding: '1rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Fahrenheit</span>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{f.toFixed(2)} °F</div>
        </div>
        <div className="glass-card" style={{ padding: '1rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Kelvin</span>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{k.toFixed(2)} K</div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* DATA STORAGE CONVERTER                                                     */
/* -------------------------------------------------------------------------- */
export const DataConverterTool: React.FC = () => {
  const [val, setVal] = useState('1');
  const [fromUnit, setFromUnit] = useState('GB');
  const [toUnit, setToUnit] = useState('MB');

  const bytesMap: Record<string, number> = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
    TB: 1024 * 1024 * 1024 * 1024,
  };

  const inputBytes = (parseFloat(val) || 0) * (bytesMap[fromUnit] || 1);
  const result = inputBytes / (bytesMap[toUnit] || 1);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Data Amount</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="number" value={val} onChange={(e) => setVal(e.target.value)} className="input-field" />
            <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="select-field" style={{ width: '100px' }}>
              <option value="B">Bytes</option>
              <option value="KB">KB</option>
              <option value="MB">MB</option>
              <option value="GB">GB</option>
              <option value="TB">TB</option>
            </select>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={() => { setFromUnit(toUnit); setToUnit(fromUnit); }} className="btn btn-outline" style={{ borderRadius: '50%', width: '44px', height: '44px', padding: 0 }}>
            <ArrowLeftRight size={18} />
          </button>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Target Data Unit</label>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="select-field">
            <option value="B">Bytes (B)</option>
            <option value="KB">Kilobytes (KB)</option>
            <option value="MB">Megabytes (MB)</option>
            <option value="GB">Gigabytes (GB)</option>
            <option value="TB">Terabytes (TB)</option>
          </select>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Converted Storage Size</span>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)', margin: '0.4rem 0' }}>
          {result.toLocaleString(undefined, { maximumFractionDigits: 4 })} <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>{toUnit}</span>
        </div>
      </div>
    </div>
  );
};
