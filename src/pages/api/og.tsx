import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic params
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 80)
      : 'Joseph Nimneh • IT & Visionary Leader';
      
    const tag = searchParams.get('tag') || 'Portfolio';

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#020617', // slate-950
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '80px',
            fontFamily: 'sans-serif', // Vercel OG defaults to a sans serif
          }}
        >
          {/* Subtle Red glow on the side */}
          <div
            style={{
              position: 'absolute',
              top: '-150px',
              right: '-150px',
              bottom: '0',
              width: '600px',
              height: '600px',
              background: '#dc2626', // red-600
              opacity: 0.15,
              borderRadius: '50%',
              // Note: filter blur isn't fully supported in generic Vercel OG without SVGs, but radial gradients work.
              // We'll just use a solid low opacity circle as a design element.
            }}
          />
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(220, 38, 38, 0.15)',
                padding: '8px 24px',
                borderRadius: '999px',
                color: '#f87171',
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {tag}
            </div>
            
            <div
              style={{
                fontSize: 64,
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.1,
                marginTop: '30px',
                width: '900px',
                letterSpacing: '-0.03em',
              }}
            >
              {title}
            </div>
          </div>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 'auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: 36, fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.02em' }}>
                Joseph Nimneh
              </div>
              <div style={{ fontSize: 24, color: '#94a3b8', marginTop: '8px', fontWeight: 600 }}>
                joseph-nimneh.vercel.app
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
