
import React from 'react';

const AboutView: React.FC = () => {
    return (
        <div className="animate-in fade-in duration-1000">
            {/* 1. Structure Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center bg-white pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* Animated Grid Background */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}>
                    </div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
                    <div className="mb-12 animate-fade-up">
                        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-[#1d1d1f] leading-[1.1] mb-8 break-keep">
                            선택받는 디자인은<br />
                            <span className="text-[#0066cc]">구조에서 시작됩니다</span>
                        </h1>
                        <p className="text-sm md:text-lg font-bold tracking-[0.4em] text-gray-400 uppercase">
                            R:NEW Design Studio
                        </p>
                    </div>

                    {/* 3D Wireframe Mockup */}
                    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000">
                            <div className="w-full h-full border-2 border-[#0066cc]/20 rounded-3xl transform rotate-12 absolute inset-0 animate-pulse"></div>
                            <div className="w-full h-full border border-gray-200 rounded-3xl transform -rotate-6 bg-white/40 backdrop-blur-xl absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-3 gap-4 w-3/4 opacity-20">
                                    {[...Array(9)].map((_, i) => (
                                        <div key={i} className="aspect-square bg-[#0066cc] rounded-lg"></div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#0066cc] to-[#00cecb] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Experience Layers Section */}
            <section className="bg-[#f5f5f7] py-32 md:py-48 overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-20">
                        <div className="w-full md:w-1/2 space-y-8 animate-fade-up">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-tight break-keep">
                                약 15년간 축적된<br />
                                실무 경험을 바탕으로<br />
                                성과로 이어지는 구조를 설계합니다.
                            </h2>
                            <p className="text-lg text-[#86868b] font-medium leading-relaxed break-keep">
                                단순한 결과물이 아니라, 치열한 현장에서 검증된 데이터를 바탕으로 비즈니스의 지속 가능한 성장을 위한 최적의 레이어를 제안합니다.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center">
                            {/* Glass Stacks Mockup */}
                            <div className="relative w-full max-w-xs transition-transform duration-1000 hover:scale-105">
                                <div className="absolute top-0 left-0 w-full h-40 bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl transform -translate-y-12 translate-x-4 z-30"></div>
                                <div className="absolute top-0 left-0 w-full h-40 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg transform -translate-y-6 translate-x-2 z-20"></div>
                                <div className="relative w-full h-40 bg-[#1d1d1f] rounded-2xl shadow-2xl z-10 flex items-center justify-center overflow-hidden">
                                    <div className="text-white font-black text-4xl">15Y+</div>
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Philosophy - Focus Lens */}
            <section className="bg-white py-32 md:py-48">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="mb-20 animate-fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-8 leading-tight break-keep">
                            보기 좋은 디자인이 아닌, <br className="hidden md:block" />
                            선택받는 이유가 분명한 디자인
                        </h2>
                        <div className="relative inline-block mt-12 mb-20">
                            {/* Focus Lens Mockup */}
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-[#f5f5f7] bg-white shadow-2xl flex items-center justify-center relative z-20 overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="text-[#0066cc] font-black text-xs tracking-widest uppercase relative z-30">Analytical Precision</div>
                                {/* Refractive circles */}
                                <div className="absolute inset-0 border border-[#0066cc]/10 rounded-full scale-75 animate-ping"></div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-50 rounded-full blur-[100px] -z-10"></div>
                        </div>
                        <p className="text-xl md:text-2xl text-[#1d1d1f] font-semibold tracking-tight break-keep">
                            "디자인은 감각이 아니라 <span className="text-[#0066cc]">신뢰</span>의 문제입니다."
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Final CTA - R:NEW Logo */}
            <section className="bg-[#000] py-40 md:py-60 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                {/* Spotlight */}
                <div className="absolute h-[600px] w-[600px] bg-white/5 rounded-full blur-[120px] top-[-300px] left-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="animate-fade-up">
                        <div className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-12 opacity-90 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            R:NEW
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                            Create. Renew. R:NEW.
                        </h3>
                        <p className="text-[#86868b] text-base md:text-xl font-medium max-w-2xl mx-auto mb-16 break-keep">
                            기획 없는 디자인을 지양하며, 책임감 있게 완성합니다.
                        </p>

                        <a
                            href="javascript:void(0)"
                            onClick={() => {
                                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block bg-white text-black px-12 py-5 rounded-full text-lg font-bold hover:bg-[#f5f5f7] transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutView;
