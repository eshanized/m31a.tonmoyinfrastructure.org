'use client';

import React, { useState } from 'react';

type VisualState = 'model' | 'gate' | 'runtime';

export function SignatureVisual() {
  const [activeState, setActiveState] = useState<VisualState>('gate');

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center select-none">
      {/* Background ambient radial glow */}
      <div 
        className="absolute -inset-4 rounded-3xl opacity-40 blur-3xl pointer-events-none transition-colors duration-700"
        style={{
          background: activeState === 'gate' 
            ? 'radial-gradient(circle at center, rgba(232, 82, 63, 0.15) 0%, transparent 70%)'
            : activeState === 'model'
            ? 'radial-gradient(circle at 50% 25%, rgba(240, 237, 232, 0.08) 0%, transparent 60%)'
            : 'radial-gradient(circle at 50% 75%, rgba(62, 207, 142, 0.1) 0%, transparent 60%)'
        }}
      />

      {/* Main Sculptural Canvas Card */}
      <div className="relative w-full aspect-[4/5] rounded-2xl border border-[#222226] bg-[#0E0E10] p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
        {/* Subtle grid pattern background with soft mask */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #F0EDE8 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
          }}
        />

        {/* Top Header metadata */}
        <div className="flex items-center justify-between text-xs border-b border-[#222226]/60 pb-4 z-10">
          <span className="font-mono text-[#6B6965] tracking-widest uppercase">
            M31A RUNTIME ARCHITECTURE
          </span>
          <span className="font-mono text-[#E8523F] font-medium tracking-wide">
            {activeState === 'model' && '01 // REASONING'}
            {activeState === 'gate' && '02 // DECISION CORE'}
            {activeState === 'runtime' && '03 // ENFORCEMENT'}
          </span>
        </div>

        {/* Sculptural Composition SVG */}
        <div className="relative flex-1 flex items-center justify-center my-4 z-10">
          <svg
            viewBox="0 0 360 400"
            className="w-full h-full max-h-[360px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Coral Gradient */}
              <linearGradient id="coralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E8523F" />
                <stop offset="100%" stopColor="#D4432F" />
              </linearGradient>
              <linearGradient id="streamGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#A3A09B" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#E8523F" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3ECF8E" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* ──────── TOP: MODEL SPACE (Untrusted Proposals) ──────── */}
            <g 
              className="cursor-pointer transition-opacity duration-300"
              onClick={() => setActiveState('model')}
              opacity={activeState === 'model' ? 1 : 0.45}
            >
              <circle cx="180" cy="70" r="50" stroke="#2C2C31" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="180" cy="70" r="32" stroke="#3A3A40" strokeWidth="1.2" />
              <circle cx="180" cy="70" r="14" fill="#18181B" stroke="#A3A09B" strokeWidth="1.5" />
              
              {/* Proposal rays converging down */}
              <path d="M145 95 L170 170" stroke="#4A4A52" strokeWidth="1.2" strokeDasharray="2 2" />
              <path d="M180 102 L180 170" stroke="#A3A09B" strokeWidth="1.5" />
              <path d="M215 95 L190 170" stroke="#4A4A52" strokeWidth="1.2" strokeDasharray="2 2" />

              {/* Labels */}
              <text x="180" y="42" textAnchor="middle" fill="#A3A09B" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="0.1em">
                THE MODEL
              </text>
              <text x="180" y="74" textAnchor="middle" fill="#F0EDE8" fontSize="10" fontFamily="monospace">
                PROPOSES
              </text>
            </g>

            {/* Central Stream Conduit */}
            <line x1="180" y1="105" x2="180" y2="175" stroke="url(#streamGrad)" strokeWidth="2" />

            {/* ──────── CENTER: THE CORAL DECISION GATE ──────── */}
            <g 
              className="cursor-pointer transition-all duration-300"
              onClick={() => setActiveState('gate')}
              opacity={activeState === 'gate' ? 1 : 0.6}
            >
              {/* Outer boundary guard ring */}
              <circle 
                cx="180" 
                cy="200" 
                r="44" 
                stroke="#E8523F" 
                strokeWidth="1" 
                strokeOpacity={activeState === 'gate' ? 0.4 : 0.2}
              />

              {/* Middle faceted ring */}
              <rect
                x="146"
                y="166"
                width="68"
                height="68"
                rx="14"
                stroke="#E8523F"
                strokeWidth="1.5"
                strokeOpacity={activeState === 'gate' ? 0.8 : 0.4}
                fill="#161214"
                className="transition-transform duration-700"
                style={{
                  transformOrigin: '180px 200px',
                  transform: activeState === 'gate' ? 'rotate(45deg)' : 'rotate(0deg)'
                }}
              />

              {/* Center Core Lens */}
              <circle 
                cx="180" 
                cy="200" 
                r="18" 
                fill="url(#coralGrad)"
                className="transition-transform duration-500 hover:scale-110"
              />
              <circle cx="180" cy="200" r="6" fill="#F0EDE8" />

              {/* Gate decision label */}
              <text x="240" y="204" fill="#E8523F" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.05em">
                DECISION GATE
              </text>
              <line x1="210" y1="200" x2="232" y2="200" stroke="#E8523F" strokeWidth="1" strokeOpacity="0.6" />
            </g>

            {/* Verified Exit Stream */}
            <line x1="180" y1="225" x2="180" y2="295" stroke="#3ECF8E" strokeWidth="2" strokeDasharray="4 3" />

            {/* ──────── BOTTOM: RUNTIME ENFORCEMENT SPACE ──────── */}
            <g 
              className="cursor-pointer transition-opacity duration-300"
              onClick={() => setActiveState('runtime')}
              opacity={activeState === 'runtime' ? 1 : 0.45}
            >
              {/* Precision foundation planes */}
              <path d="M120 310 L240 310" stroke="#3ECF8E" strokeWidth="2" />
              <path d="M140 326 L220 326" stroke="#2C2C31" strokeWidth="1.5" />
              <path d="M160 342 L200 342" stroke="#222226" strokeWidth="1.5" />

              {/* Verification nodes */}
              <circle cx="140" cy="310" r="3.5" fill="#3ECF8E" />
              <circle cx="180" cy="310" r="4" fill="#3ECF8E" />
              <circle cx="220" cy="310" r="3.5" fill="#3ECF8E" />

              {/* Runtime text */}
              <text x="180" y="366" textAnchor="middle" fill="#F0EDE8" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.1em">
                THE RUNTIME
              </text>
              <text x="180" y="384" textAnchor="middle" fill="#3ECF8E" fontSize="10" fontFamily="monospace">
                DECIDES &amp; VERIFIES
              </text>
            </g>
          </svg>
        </div>

        {/* Bottom Interactive State Selector */}
        <div className="pt-4 border-t border-[#222226]/60 flex items-center justify-between text-xs z-10">
          <div className="flex gap-2">
            {(['model', 'gate', 'runtime'] as VisualState[]).map((state) => (
              <button
                key={state}
                onClick={() => setActiveState(state)}
                className={`px-2.5 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                  activeState === state
                    ? 'bg-[#E8523F] text-white font-semibold'
                    : 'bg-[#18181B] text-[#A3A09B] hover:text-[#F0EDE8]'
                }`}
              >
                {state}
              </button>
            ))}
          </div>

          <p className="text-[11px] text-[#A3A09B] hidden sm:block">
            {activeState === 'model' && 'Reasoning is untrusted'}
            {activeState === 'gate' && '11-stage policy evaluation'}
            {activeState === 'runtime' && 'Deterministic execution'}
          </p>
        </div>
      </div>
    </div>
  );
}
