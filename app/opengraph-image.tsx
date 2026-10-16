import { ImageResponse } from 'next/og';

export const alt = 'M31A — open-source autonomous coding agent for Linux';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '54px 66px 42px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#09090B',
          backgroundImage: 'radial-gradient(circle at 80% 18%, rgba(88, 94, 240, 0.20), transparent 34%), radial-gradient(circle at 20% 110%, rgba(232, 82, 63, 0.14), transparent 45%)',
          color: '#F5F0EB',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ position: 'absolute', right: '-95px', top: '-135px', width: '520px', height: '520px', border: '1px solid rgba(130, 134, 255, 0.22)', borderRadius: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '390px', height: '390px', border: '1px solid rgba(232, 82, 63, 0.22)', borderRadius: '195px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '255px', height: '255px', border: '1px solid rgba(130, 134, 255, 0.26)', borderRadius: '128px' }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', zIndex: 1 }}>
          <div style={{ width: '54px', height: '54px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px', border: '1px solid #555DEB', background: 'linear-gradient(135deg, #25265D, #17171B)', color: '#FFFFFF', fontSize: '30px', fontWeight: 700 }}>M</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '27px', fontWeight: 700, letterSpacing: '2px' }}>M31A</div>
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#A9A6A5' }}>TONMOY INFRASTRUCTURE &amp; VISION</div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', border: '1px solid rgba(232, 82, 63, 0.4)', borderRadius: '999px', padding: '9px 15px', color: '#F07865', fontSize: '12px', letterSpacing: '1px', background: 'rgba(232, 82, 63, 0.08)' }}>OPEN SOURCE</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '34px', zIndex: 1 }}>
          <div style={{ width: '680px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '3px', color: '#F07865' }}>AUTONOMOUS CODING AGENT FOR LINUX</div>
            <div style={{ fontSize: '55px', lineHeight: 1.12, fontWeight: 700, letterSpacing: '-2px' }}>
              <div>Autonomous coding.</div>
              <div style={{ color: '#E96B58' }}>Runtime-controlled.</div>
            </div>
            <div style={{ fontSize: '19px', lineHeight: 1.5, color: '#B8B4B1', maxWidth: '660px' }}>A Rust-native runtime for policy-governed execution, verification, and recovery.</div>
          </div>

          <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px', border: '1px solid #303036', borderRadius: '18px', background: 'rgba(17, 17, 20, 0.88)' }}>
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#777982', marginBottom: '4px' }}>RUNTIME FLOW</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '13px 12px', borderRadius: '10px', border: '1px solid #34343B', background: '#141418' }}>
              <div style={{ width: '9px', height: '9px', borderRadius: '5px', background: '#818CF8' }} />
              <div style={{ fontSize: '15px', color: '#E8E4DF' }}>Plan and propose</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '13px 12px', borderRadius: '10px', border: '1px solid rgba(232, 82, 63, 0.45)', background: 'rgba(232, 82, 63, 0.08)' }}>
              <div style={{ width: '9px', height: '9px', borderRadius: '5px', background: '#E8523F' }} />
              <div style={{ fontSize: '15px', color: '#F5F0EB' }}>Policy gates</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '13px 12px', borderRadius: '10px', border: '1px solid #34343B', background: '#141418' }}>
              <div style={{ width: '9px', height: '9px', borderRadius: '5px', background: '#78D8A3' }} />
              <div style={{ fontSize: '15px', color: '#E8E4DF' }}>Verify changes</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #27272D', paddingTop: '20px', color: '#777982', fontSize: '13px', zIndex: 1 }}>
          <div style={{ color: '#F07865' }}>M31A</div>
          <div>•</div>
          <div>Open-source AI coding agent</div>
          <div style={{ marginLeft: 'auto' }}>m31a.tonmoyinfrastructure.org</div>
        </div>
      </div>
    ),
    size,
  );
}
