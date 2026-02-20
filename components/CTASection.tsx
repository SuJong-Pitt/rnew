
import React from 'react';

const CTASection: React.FC<{ kakaoUrl?: string }> = ({ kakaoUrl }) => {
    return (
        <section className="bg-white py-40 border-t border-gray-100 relative overflow-hidden">
            {/* Subtle Radial Gradient */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-50 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                <div className="animate-fade-up">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-8 leading-tight">
                        당신의 브랜드도<br />주인공이 될 수 있습니다.
                    </h2>
                    <p className="text-xl md:text-2xl text-[#86868b] mb-16 font-medium">
                        치밀한 전략과 마스터피스급 비주얼로<br />
                        비즈니스의 성장을 가속화하세요.
                    </p>

                    <a
                        href={kakaoUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center"
                    >
                        {/* 3D Button Style Mockup */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#0066cc] to-[#00cecb] rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <button className="relative btn-apple px-16 py-8 text-xl shadow-2xl bg-[#0066cc] hover:bg-[#0071e3] flex items-center gap-4">
                            상세페이지 전략 컨설팅 시작하기
                            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </button>
                    </a>

                    <div className="mt-16 text-[#86868b] text-sm font-bold tracking-[0.2em] uppercase">
                        limited slots available for this month
                    </div>
                </div>
            </div>

            <style>{`
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
        }
      `}</style>
        </section>
    );
};

export default CTASection;
