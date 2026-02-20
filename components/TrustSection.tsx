
import React from 'react';

const TrustSection: React.FC = () => {
    const stats = [
        {
            label: 'Conversion Impact',
            value: '+240%',
            desc: '기존 대비 평균 구매 전환율 상승폭',
            sub: 'Based on 50+ A/B tests'
        },
        {
            label: 'Client Satisfaction',
            value: '4.9',
            max: '/5',
            desc: '프로젝트 완료 후 고객 만족도 평가',
            sub: 'Highly recommended by 98% of users'
        },
        {
            label: 'Masterpieces Crafted',
            value: '500+',
            desc: '다양한 카테고리의 상세페이지 제작 경험',
            sub: 'Delivering excellence since 2020'
        },
    ];

    return (
        <section className="bg-white py-40 border-t border-gray-50 overflow-hidden relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-24 animate-fade-up">
                    <h2 className="text-sm font-bold tracking-[0.3em] text-[#0066cc] uppercase mb-4">The Evidence</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f]">데이터로 증명되는 압도적 성과</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="group p-12 rounded-[2.5rem] bg-[#f5f5f7]/50 hover:bg-white transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-transparent hover:border-gray-100 animate-fade-up"
                            style={{ animationDelay: `${idx * 0.2}s` }}
                        >
                            <div className="mb-6 h-px w-12 bg-gray-200 mx-auto group-hover:w-20 group-hover:bg-[#0066cc] transition-all duration-500"></div>
                            <div className="text-xs font-bold tracking-[0.2em] text-[#86868b] uppercase mb-6 group-hover:text-[#0066cc] transition-colors">{stat.label}</div>

                            <div className="flex items-baseline justify-center mb-6">
                                <span className="text-7xl md:text-8xl font-bold text-[#1d1d1f] tracking-tighter transition-transform duration-500 group-hover:scale-110 block">
                                    {stat.value}
                                </span>
                                {stat.max && <span className="text-2xl font-bold text-gray-300 ml-1">{stat.max}</span>}
                            </div>

                            <p className="text-[#1d1d1f] font-bold text-[15px] mb-3 break-keep">
                                "{stat.desc}"
                            </p>
                            <p className="text-[#86868b] text-[11px] font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {stat.sub}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
                    <p className="text-[13px] text-gray-400 font-medium italic">
                        * 위 지표는 R:new Design Studio의 내부 프로젝트 사후 성과 지표를 기반으로 산출되었습니다.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
