import React, { useState, useEffect } from 'react';
import { Calendar, Play, Eye } from 'lucide-react';

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,800;0,900;1,800&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes heroSlideDown {
    from { opacity: 0; transform: translateY(-28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes heroPulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(232,25,44,0.7); }
    50%       { opacity: 0.7; box-shadow: 0 0 0 8px rgba(232,25,44,0); }
  }

  @keyframes scanline {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(400%); }
  }

  @keyframes waveBar {
    0%, 100% { transform: scaleY(0.4); }
    50%       { transform: scaleY(1); }
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50%       { background-position: 100% 50%; }
  }

  @keyframes glow {
    0%, 100% { text-shadow: 0 0 10px rgba(232,25,44,0.5), 0 0 20px rgba(232,25,44,0.3); }
    50% { text-shadow: 0 0 20px rgba(232,25,44,0.8), 0 0 40px rgba(232,25,44,0.5); }
  }

  .hero-fade-up   { animation: heroFadeUp 0.8s cubic-bezier(.22,1,.36,1) both; }
  .hero-slide-down { animation: heroSlideDown 0.8s cubic-bezier(.22,1,.36,1) both; }
  
  .delay-0   { animation-delay: 0ms; }
  .delay-100 { animation-delay: 100ms; }
  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 320ms; }
  .delay-400 { animation-delay: 440ms; }
  .delay-500 { animation-delay: 560ms; }
  .delay-600 { animation-delay: 700ms; }

  .live-ring {
    animation: heroPulse 2s ease-in-out infinite;
  }

  .wave-bar {
    display: inline-block;
    width: 3px;
    height: 14px;
    border-radius: 2px;
    background: #E8192C;
    transform-origin: bottom;
  }
  
  .wave-bar:nth-child(1) { animation: waveBar 0.8s ease-in-out infinite 0s; }
  .wave-bar:nth-child(2) { animation: waveBar 0.8s ease-in-out infinite 0.15s; }
  .wave-bar:nth-child(3) { animation: waveBar 0.8s ease-in-out infinite 0.3s; }
  .wave-bar:nth-child(4) { animation: waveBar 0.8s ease-in-out infinite 0.45s; }

  .headline-gradient {
    background: linear-gradient(135deg, #ffffff 0%, #e8e8e8 40%, #ffffff 80%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 4s ease infinite;
  }

  .headline-red {
    background: linear-gradient(135deg, #E8192C 0%, #ff4d5e 50%, #E8192C 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 3s ease infinite;
  }

  .glass-live {
    background: rgba(14, 14, 14, 0.72);
    backdrop-filter: blur(20px) saturate(1.8);
    -webkit-backdrop-filter: blur(20px) saturate(1.8);
    border: 1px solid rgba(255,255,255,0.08);
  }

  .score-glow {
    text-shadow: 0 0 20px rgba(255,255,255,0.25);
  }

  .btn-watch {
    background: linear-gradient(135deg, #E4192C, #c4101e);
    box-shadow: 0 8px 32px rgba(232,25,44,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
    transition: all 0.3s ease;
  }

  .btn-watch:hover {
    box-shadow: 0 12px 40px rgba(232,25,44,0.55), inset 0 1px 0 rgba(255,255,255,0.15);
    transform: translateY(-2px);
  }

  .btn-watch:active { transform: translateY(0); }

  .btn-schedule {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    backdrop-filter: blur(12px);
    transition: all 0.3s ease;
  }

  .btn-schedule:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.22);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .btn-schedule:hover {
      transform: translateY(-2px);
    }
  }

  .scanline-sweep {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    border-radius: inherit;
  }

  .scanline-sweep::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.03), transparent);
    animation: scanline 3.5s ease-in-out infinite;
  }
`;

const stats = [
  { value: '24/7', label: 'Live Broadcast' },
  { value: '10+', label: 'Sports Covered' },
  { value: '1.2M', label: 'Monthly Viewers' },
  { value: '5', label: 'Leagues Followed' },
];

const HeroSection = () => {
  const [viewers, setViewers] = useState(142380);

  useEffect(() => {
    const id = setInterval(() => {
      setViewers((v) => v + Math.floor(Math.random() * 40 - 15));
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{STYLES}</style>

      <section
        className="relative w-full h-fit overflow-hidden flex flex-col justify-between"
        style={{ backgroundImage: 'url("https://res.cloudinary.com/drzoiigek/image/upload/v1774443807/qnttvgu1a2btbfrnes0z.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >

        {/* Layered atmospheric overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.85) 40%, rgba(8,8,8,0.4) 65%, rgba(8,8,8,0.05) 100%)',
          }}
        />

        {/* Bottom fade overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.6) 25%, transparent 55%)',
          }}
        />

        {/* Red vignette bottom-left */}
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 0% 100%, rgba(12,155,332,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Noise grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
            opacity: 0.6,
          }}
        />

        {/* Centered hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 py-8 md:py-12 text-center">

          {/* Main headline */}
          <h1
            className="hero-fade-up delay-100 mb-6 leading-[1.1] uppercase max-w-5xl"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(48px, 12vw, 120px)',
              letterSpacing: '-0.02em',
            }}
          >
            <span className="headline-gradient font-bold block">Media</span>
            <span className="flex">
            <span className="text-red-700 font-bold block mr-4">Sports</span>
            <span className="text-blue-700 font-bold block">Infos</span>
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="hero-fade-up delay-300 text-white/65 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 300,
            }}
          >
            Live matches, expert analysis, and the stories behind every goal. <br className="hidden md:block" />
            <span className="text-white/85 font-medium">MehHom</span> — where champions are made.
          </p>

          {/* CTA buttons */}
          <div className="hero-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              className="btn-watch flex items-center justify-center gap-2.5 text-white px-8 py-4 rounded-full group whitespace-nowrap"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '0.1em',
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white live-ring" />
              WATCH LIVE
              <Play size={18} className="group-hover:translate-x-0.5 transition-transform" fill="white" />
            </button>

            <button
              className="btn-schedule flex items-center justify-center gap-2.5 text-white/75 hover:text-white px-8 py-4 rounded-full whitespace-nowrap"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              <Calendar size={18} />
              Today's Schedule
            </button>
          </div>

          {/* Stats section */}
          <div className="hero-fade-up delay-500 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="group cursor-pointer">
                  <p
                    className="text-white leading-none mb-2 group-hover:text-[#E8192C] transition-colors"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 'clamp(28px, 6vw, 40px)',
                      fontWeight: 800,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-white/40 uppercase group-hover:text-white/60 transition-colors"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      letterSpacing: '0.12em',
                      fontWeight: 400,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative vertical lines */}
        <div
          className="absolute left-12 top-0 bottom-0 w-px hidden xl:block"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(232,25,44,0.25) 30%, rgba(232,25,44,0.1) 70%, transparent)',
          }}
        />
        <div
          className="absolute right-12 top-0 bottom-0 w-px hidden xl:block"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(232,25,44,0.15) 30%, rgba(232,25,44,0.05) 70%, transparent)',
          }}
        />
      </section>
    </>
  );
};

export default HeroSection;