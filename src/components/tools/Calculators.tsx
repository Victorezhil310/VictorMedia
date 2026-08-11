'use client';

import React, { useState } from 'react';
import { } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* 1. BASIC CALCULATOR                                                        */
/* -------------------------------------------------------------------------- */
export const BasicCalculatorTool: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [history, setHistory] = useState<string[]>([]);
  const [prevVal, setPrevVal] = useState<string | null>(null);
  const [op, setOp] = useState<string | null>(null);

  const handleNum = (n: string) => {
    if (display === '0' || display === 'Error') {
      setDisplay(n);
    } else {
      setDisplay(display + n);
    }
  };

  const handleOp = (operator: string) => {
    setPrevVal(display);
    setOp(operator);
    setDisplay('0');
  };

  const handleEquals = () => {
    if (!prevVal || !op) return;
    try {
      const a = parseFloat(prevVal);
      const b = parseFloat(display);
      let res = 0;
      if (op === '+') res = a + b;
      if (op === '-') res = a - b;
      if (op === '×') res = a * b;
      if (op === '÷') res = b !== 0 ? a / b : NaN;

      const resStr = isNaN(res) ? 'Error' : String(Number(res.toFixed(8)));
      setHistory([`${prevVal} ${op} ${display} = ${resStr}`, ...history.slice(0, 4)]);
      setDisplay(resStr);
      setPrevVal(null);
      setOp(null);
    } catch {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevVal(null);
    setOp(null);
  };

  return (
    <div style={{ maxWidth: '420px', margin: '0 auto' }}>
      <div style={{
        background: 'var(--bg-tertiary)',
        padding: '1.25rem',
        borderRadius: 'var(--radius-md)',
        marginBottom: '1rem',
        textAlign: 'right'
      }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', minHeight: '1.2rem' }}>
          {prevVal} {op}
        </div>
        <div style={{ fontSize: '2.25rem', fontWeight: 700, fontFamily: 'monospace', overflowX: 'auto' }}>
          {display}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
        <button onClick={handleClear} className="btn btn-secondary" style={{ color: 'var(--danger)' }}>C</button>
        <button onClick={() => setDisplay(display.length > 1 ? display.slice(0, -1) : '0')} className="btn btn-secondary">⌫</button>
        <button onClick={() => handleOp('÷')} className="btn btn-outline">÷</button>
        <button onClick={() => handleOp('×')} className="btn btn-outline">×</button>

        <button onClick={() => handleNum('7')} className="btn btn-secondary">7</button>
        <button onClick={() => handleNum('8')} className="btn btn-secondary">8</button>
        <button onClick={() => handleNum('9')} className="btn btn-secondary">9</button>
        <button onClick={() => handleOp('-')} className="btn btn-outline">-</button>

        <button onClick={() => handleNum('4')} className="btn btn-secondary">4</button>
        <button onClick={() => handleNum('5')} className="btn btn-secondary">5</button>
        <button onClick={() => handleNum('6')} className="btn btn-secondary">6</button>
        <button onClick={() => handleOp('+')} className="btn btn-outline">+</button>

        <button onClick={() => handleNum('1')} className="btn btn-secondary">1</button>
        <button onClick={() => handleNum('2')} className="btn btn-secondary">2</button>
        <button onClick={() => handleNum('3')} className="btn btn-secondary">3</button>
        <button onClick={handleEquals} className="btn btn-primary" style={{ gridRow: 'span 2' }}>=</button>

        <button onClick={() => handleNum('0')} className="btn btn-secondary" style={{ gridColumn: 'span 2' }}>0</button>
        <button onClick={() => handleNum('.')} className="btn btn-secondary">.</button>
      </div>

      {history.length > 0 && (
        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--bg-card-border)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Recent History</span>
          <ul style={{ listStyle: 'none', fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
            {history.map((h, i) => (
              <li key={i} style={{ padding: '0.2rem 0' }}>{h}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. SCIENTIFIC CALCULATOR                                                   */
/* -------------------------------------------------------------------------- */
export const ScientificCalculatorTool: React.FC = () => {
  const [expr, setExpr] = useState('');
  const [result, setResult] = useState('');
  const [isRad, setIsRad] = useState(true);

  const append = (v: string) => setExpr((prev) => prev + v);

  const calculate = () => {
    try {
      const sanitized = expr
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/sin\(/g, isRad ? 'Math.sin(' : 'Math.sin(Math.PI/180*')
        .replace(/cos\(/g, isRad ? 'Math.cos(' : 'Math.cos(Math.PI/180*')
        .replace(/tan\(/g, isRad ? 'Math.tan(' : 'Math.tan(Math.PI/180*')
        .replace(/sqrt\(/g, 'Math.sqrt(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/ln\(/g, 'Math.log(')
        .replace(/\^/g, '**');

      // eslint-disable-next-line no-eval
      const evalRes = eval(sanitized);
      setResult(String(Number(evalRes.toFixed(8))));
    } catch {
      setResult('Invalid Expression');
    }
  };

  return (
    <div style={{ maxWidth: '520px', margin: '0 auto' }}>
      <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
        <input
          type="text"
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          placeholder="Enter expression..."
          className="input-field"
          style={{ fontSize: '1.2rem', fontFamily: 'monospace', marginBottom: '0.5rem' }}
        />
        <div style={{ textAlign: 'right', fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)', minHeight: '2.5rem' }}>
          {result}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button onClick={() => setIsRad(!isRad)} className="btn btn-outline" style={{ padding: '0.3rem 0.75rem', fontSize: '0.8rem' }}>
          Mode: {isRad ? 'RAD' : 'DEG'}
        </button>
        <button onClick={() => { setExpr(''); setResult(''); }} className="btn btn-secondary" style={{ color: 'var(--danger)', padding: '0.3rem 0.75rem', fontSize: '0.8rem' }}>
          Clear
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem' }}>
        <button onClick={() => append('sin(')} className="btn btn-secondary">sin</button>
        <button onClick={() => append('cos(')} className="btn btn-secondary">cos</button>
        <button onClick={() => append('tan(')} className="btn btn-secondary">tan</button>
        <button onClick={() => append('π')} className="btn btn-secondary">π</button>
        <button onClick={() => append('e')} className="btn btn-secondary">e</button>

        <button onClick={() => append('sqrt(')} className="btn btn-secondary">√</button>
        <button onClick={() => append('^')} className="btn btn-secondary">x^y</button>
        <button onClick={() => append('log(')} className="btn btn-secondary">log</button>
        <button onClick={() => append('ln(')} className="btn btn-secondary">ln</button>
        <button onClick={() => append('(')} className="btn btn-secondary">(</button>

        <button onClick={() => append('7')} className="btn btn-secondary">7</button>
        <button onClick={() => append('8')} className="btn btn-secondary">8</button>
        <button onClick={() => append('9')} className="btn btn-secondary">9</button>
        <button onClick={() => append('/')} className="btn btn-outline">÷</button>
        <button onClick={() => append(')')} className="btn btn-secondary">)</button>

        <button onClick={() => append('4')} className="btn btn-secondary">4</button>
        <button onClick={() => append('5')} className="btn btn-secondary">5</button>
        <button onClick={() => append('6')} className="btn btn-secondary">6</button>
        <button onClick={() => append('*')} className="btn btn-outline">×</button>
        <button onClick={calculate} className="btn btn-primary" style={{ gridRow: 'span 2' }}>=</button>

        <button onClick={() => append('1')} className="btn btn-secondary">1</button>
        <button onClick={() => append('2')} className="btn btn-secondary">2</button>
        <button onClick={() => append('3')} className="btn btn-secondary">3</button>
        <button onClick={() => append('-')} className="btn btn-outline">-</button>

        <button onClick={() => append('0')} className="btn btn-secondary" style={{ gridColumn: 'span 2' }}>0</button>
        <button onClick={() => append('.')} className="btn btn-secondary">.</button>
        <button onClick={() => append('+')} className="btn btn-outline">+</button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. PERCENTAGE CALCULATOR                                                   */
/* -------------------------------------------------------------------------- */
export const PercentageCalculatorTool: React.FC = () => {
  const [valA1, setValA1] = useState('15');
  const [valA2, setValA2] = useState('200');

  const res1 = ((parseFloat(valA1) || 0) / 100) * (parseFloat(valA2) || 0);

  const [valB1, setValB1] = useState('30');
  const [valB2, setValB2] = useState('150');

  const res2 = (parseFloat(valB2) || 0) !== 0 ? ((parseFloat(valB1) || 0) / parseFloat(valB2)) * 100 : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-secondary)' }}>
        <h4 style={{ marginBottom: '1rem' }}>Mode 1: What is X% of Y?</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
          <span>What is</span>
          <input type="number" value={valA1} onChange={(e) => setValA1(e.target.value)} className="input-field" style={{ width: '100px' }} />
          <span>% of</span>
          <input type="number" value={valA2} onChange={(e) => setValA2(e.target.value)} className="input-field" style={{ width: '120px' }} />
          <span>?</span>
          <strong style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginLeft: 'auto' }}>= {res1.toFixed(2)}</strong>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-secondary)' }}>
        <h4 style={{ marginBottom: '1rem' }}>Mode 2: X is what percentage of Y?</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
          <input type="number" value={valB1} onChange={(e) => setValB1(e.target.value)} className="input-field" style={{ width: '100px' }} />
          <span>is what % of</span>
          <input type="number" value={valB2} onChange={(e) => setValB2(e.target.value)} className="input-field" style={{ width: '120px' }} />
          <span>?</span>
          <strong style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginLeft: 'auto' }}>= {res2.toFixed(2)}%</strong>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. DISCOUNT CALCULATOR                                                     */
/* -------------------------------------------------------------------------- */
export const DiscountCalculatorTool: React.FC = () => {
  const [price, setPrice] = useState('100');
  const [discount, setDiscount] = useState('20');
  const [tax, setTax] = useState('8');

  const p = parseFloat(price) || 0;
  const d = parseFloat(discount) || 0;
  const t = parseFloat(tax) || 0;

  const savings = (p * d) / 100;
  const discountedPrice = p - savings;
  const taxAmount = (discountedPrice * t) / 100;
  const finalTotal = discountedPrice + taxAmount;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      <div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Original Price ($)</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="input-field" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Discount (%)</label>
          <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} className="input-field" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Sales Tax (%)</label>
          <input type="number" value={tax} onChange={(e) => setTax(e.target.value)} className="input-field" />
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-tertiary)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '0.75rem', fontSize: '0.95rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>Discount Savings:</span>
          <strong style={{ float: 'right', color: 'var(--success)' }}>-${savings.toFixed(2)}</strong>
        </div>
        <div style={{ marginBottom: '0.75rem', fontSize: '0.95rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>Estimated Tax:</span>
          <strong style={{ float: 'right' }}>+${taxAmount.toFixed(2)}</strong>
        </div>
        <hr style={{ borderColor: 'var(--bg-card-border)', margin: '0.75rem 0' }} />
        <div>
          <span style={{ fontSize: '1rem', fontWeight: 600 }}>Final Checkout Total:</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-primary)' }}>${finalTotal.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 5. AGE CALCULATOR                                                          */
/* -------------------------------------------------------------------------- */
export const AgeCalculatorTool: React.FC = () => {
  const [dob, setDob] = useState('1998-05-15');
  const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0]);

  const calculateAge = () => {
    if (!dob) return null;
    const birth = new Date(dob);
    const target = new Date(targetDate);
    if (birth > target) return null;

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0).getDate();
      days += prevMonth;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const totalDays = Math.floor((target.getTime() - birth.getTime()) / (1000 * 3600 * 24));
    const totalHours = totalDays * 24;

    return { years, months, days, totalDays, totalHours };
  };

  const age = calculateAge();

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Date of Birth</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="input-field" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Age at Date</label>
          <input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} className="input-field" />
        </div>
      </div>

      {age ? (
        <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-tertiary)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Exact Age</span>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
              {age.years} <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>years</span> {age.months} <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>months</span> {age.days} <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>days</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid var(--bg-card-border)' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Days Lived</span>
              <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{age.totalDays.toLocaleString()}</div>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Hours Lived</span>
              <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{age.totalHours.toLocaleString()}</div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', color: 'var(--danger)' }}>Please select a valid date of birth prior to target date.</div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 6. DATE DIFFERENCE CALCULATOR                                              */
/* -------------------------------------------------------------------------- */
export const DateDifferenceTool: React.FC = () => {
  const [d1, setD1] = useState('2026-01-01');
  const [d2, setD2] = useState('2026-12-31');

  const calculateDiff = () => {
    const start = new Date(d1);
    const end = new Date(d2);
    const diffMs = Math.abs(end.getTime() - start.getTime());
    const totalDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(totalDays / 7);
    const remDays = totalDays % 7;

    return { totalDays, weeks, remDays };
  };

  const diff = calculateDiff();

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Start Date</label>
          <input type="date" value={d1} onChange={(e) => setD1(e.target.value)} className="input-field" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>End Date</label>
          <input type="date" value={d2} onChange={(e) => setD2(e.target.value)} className="input-field" />
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Duration Between Dates</span>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)', margin: '0.5rem 0' }}>
          {diff.totalDays} <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>Days</span>
        </div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Equivalent to {diff.weeks} weeks and {diff.remDays} days.
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 7. BMI CALCULATOR                                                          */
/* -------------------------------------------------------------------------- */
export const BmiCalculatorTool: React.FC = () => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [heightCm, setHeightCm] = useState('175');
  const [weightKg, setWeightKg] = useState('70');
  const [heightFt, setHeightFt] = useState('5');
  const [heightIn, setHeightIn] = useState('9');
  const [weightLbs, setWeightLbs] = useState(154);

  const calculateBMI = () => {
    let bmi = 0;
    if (unit === 'metric') {
      const hM = (parseFloat(heightCm) || 0) / 100;
      const wKg = parseFloat(weightKg) || 0;
      if (hM > 0) bmi = wKg / (hM * hM);
    } else {
      const totalInches = (parseFloat(heightFt) || 0) * 12 + (parseFloat(heightIn) || 0);
      const wLbs = Number(weightLbs) || 0;
      if (totalInches > 0) bmi = (wLbs / (totalInches * totalInches)) * 703;
    }
    return bmi;
  };

  const bmiVal = calculateBMI();

  let category = 'Normal weight';
  let catColor = 'var(--success)';
  if (bmiVal < 18.5) { category = 'Underweight'; catColor = 'var(--warning)'; }
  else if (bmiVal >= 25 && bmiVal < 29.9) { category = 'Overweight'; catColor = 'var(--warning)'; }
  else if (bmiVal >= 30) { category = 'Obese'; catColor = 'var(--danger)'; }

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <button onClick={() => setUnit('metric')} className={`btn ${unit === 'metric' ? 'btn-primary' : 'btn-secondary'}`}>Metric (cm, kg)</button>
        <button onClick={() => setUnit('imperial')} className={`btn ${unit === 'imperial' ? 'btn-primary' : 'btn-secondary'}`}>Imperial (ft/in, lbs)</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {unit === 'metric' ? (
          <>
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Height (cm)</label>
              <input type="number" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} className="input-field" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Weight (kg)</label>
              <input type="number" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} className="input-field" />
            </div>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Height (ft)</label>
                <input type="number" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} className="input-field" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Inches</label>
                <input type="number" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} className="input-field" />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.4rem' }}>Weight (lbs)</label>
              <input type="number" value={weightLbs} onChange={(e) => setWeightLbs(Number(e.target.value))} className="input-field" />
            </div>
          </>
        )}
      </div>

      <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Body Mass Index (BMI)</span>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)', margin: '0.3rem 0' }}>
          {bmiVal.toFixed(1)}
        </div>
        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: catColor }}>
          {category}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 8. TIME CALCULATOR                                                         */
/* -------------------------------------------------------------------------- */
export const TimeCalculatorTool: React.FC = () => {
  const [h1, setH1] = useState('2');
  const [m1, setM1] = useState('30');
  const [s1, setS1] = useState('0');

  const [op, setOp] = useState<'+' | '-'>('+');

  const [h2, setH2] = useState('1');
  const [m2, setM2] = useState('45');
  const [s2, setS2] = useState('0');

  const sec1 = (parseInt(h1) || 0) * 3600 + (parseInt(m1) || 0) * 60 + (parseInt(s1) || 0);
  const sec2 = (parseInt(h2) || 0) * 3600 + (parseInt(m2) || 0) * 60 + (parseInt(s2) || 0);

  const resSec = op === '+' ? sec1 + sec2 : Math.max(0, sec1 - sec2);

  const resH = Math.floor(resSec / 3600);
  const resM = Math.floor((resSec % 3600) / 60);
  const resS = resSec % 60;

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h4 style={{ marginBottom: '0.5rem' }}>Time Duration 1</h4>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <input type="number" placeholder="HH" value={h1} onChange={(e) => setH1(e.target.value)} className="input-field" />
            <input type="number" placeholder="MM" value={m1} onChange={(e) => setM1(e.target.value)} className="input-field" />
            <input type="number" placeholder="SS" value={s1} onChange={(e) => setS1(e.target.value)} className="input-field" />
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={() => setOp(op === '+' ? '-' : '+')} className="btn btn-outline" style={{ fontSize: '1.25rem', width: '50px', height: '50px' }}>
            {op}
          </button>
        </div>

        <div>
          <h4 style={{ marginBottom: '0.5rem' }}>Time Duration 2</h4>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <input type="number" placeholder="HH" value={h2} onChange={(e) => setH2(e.target.value)} className="input-field" />
            <input type="number" placeholder="MM" value={m2} onChange={(e) => setM2(e.target.value)} className="input-field" />
            <input type="number" placeholder="SS" value={s2} onChange={(e) => setS2(e.target.value)} className="input-field" />
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Total Calculated Time</span>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'monospace' }}>
          {String(resH).padStart(2, '0')}:{String(resM).padStart(2, '0')}:{String(resS).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};
