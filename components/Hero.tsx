
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-24 pb-20">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-50/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-50/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        {/* Brand Showcase - R:new Design Studio */}
        <div className="mb-8 animate-fade-up">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-gray-100 bg-white/50 backdrop-blur-md shadow-sm mb-6 group hover:border-[#0066cc]/30 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse"></span>
            <span className="text-[13px] font-bold tracking-[0.2em] text-[#1d1d1f] uppercase">
              R:new Design Studio
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-[#1d1d1f] leading-[1.08] mb-10">
            매출로 증명하는<br />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d1d1f] via-[#0066cc] to-[#1d1d1f] bg-[length:200%_auto] animate-gradient-flow">
                상세페이지 마스터피스
              </span>
              <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] font-medium max-w-3xl mx-auto leading-relaxed break-keep">
            치밀한 UI/UX 설계와 고감도 비주얼로<br className="hidden md:block" />
            <span className="text-[#1d1d1f] font-semibold">브랜드의 가치</span>를 완전히 새롭게 정의합니다.
          </p>
        </div>

        {/* 3D Visual Masterpiece Section */}
        <div className="relative w-full max-w-4xl mx-auto mt-20 perspective-2000 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative aspect-[16/9] bg-[#f5f5f7] rounded-[3rem] p-4 md:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden group">
            {/* Glass Overlays for Depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-transparent to-transparent z-10"></div>

            {/* Floating Labels with Glassmorphism */}
            <div className="absolute top-12 left-12 glass-morphism px-8 py-4 rounded-2xl shadow-xl z-20 animate-float" style={{ animationDuration: '6s' }}>
              <div className="text-[10px] font-bold tracking-widest text-[#0066cc] uppercase mb-1">Conversion Optimization</div>
              <div className="text-lg font-bold text-[#1d1d1f]">+240%</div>
            </div>

            <div className="absolute bottom-20 right-12 glass-morphism px-8 py-4 rounded-2xl shadow-xl z-20 animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>
              <div className="text-[10px] font-bold tracking-widest text-[#1d1d1f] uppercase mb-1">Brand Identity</div>
              <div className="text-lg font-bold text-[#0066cc]">MASTERPIECE</div>
            </div>

            {/* Centered Device Showcase */}
            <div className="relative z-0 h-full flex items-center justify-center">
              <div className="w-[300px] md:w-[320px] aspect-[1/2] bg-[#1d1d1f] rounded-[3.5rem] p-3 shadow-2xl border-[8px] border-[#d1d1d6] transform rotate-[-4deg] group-hover:rotate-0 transition-transform duration-1000 ease-out preserve-3d">
                <div className="w-full h-full bg-[#000] rounded-[2.8rem] overflow-hidden relative border border-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1635932954117-900593433a02?q=80&w=1074&auto=format&fit=crop"
                    alt="R:new Masterpiece Studio Showcase"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-110"
                  />
                  {/* App-like Navigation Bar Overlay */}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center pb-4">
                    <div className="w-32 h-1 bg-white/30 rounded-full"></div>
                  </div>
                  {/* Notch/Island Mockup */}
                  <div className="absolute top-0 inset-x-0 h-10 flex justify-center pt-3">
                    <div className="w-24 h-5 bg-black rounded-full border border-white/10"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artistic Floating Particles (Nano-Banana inspired particles) */}
            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#0066cc]/20 rounded-full blur-sm animate-float"></div>
            <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-100/40 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      <style>{`
                @keyframes gradient-flow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-flow {
                    background-size: 200% auto;
                    animation: gradient-flow 6s linear infinite;
                }
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .perspective-2000 {
                    perspective: 2000px;
                }
            `}</style>
    </section>
  );
};

export default Hero;
