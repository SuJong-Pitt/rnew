
import React from 'react';

const LogicSection: React.FC = () => {
    return (
        <section className="bg-white py-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 animate-fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-8 leading-[1.1]">
                            팔리지 않는 이유는<br />
                            <span className="text-[#86868b]">단 한 가지 뿐입니다.</span>
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-bold">01</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-[#1d1d1f]">불분명한 가치 전달</h3>
                                    <p className="text-[#86868b] leading-relaxed">고객은 3초 만에 이 페이지를 더 읽을지 결정합니다. 우리는 즉각적인 시선 강탈과 동시에 핵심 가치를 뇌리에 박아넣습니다.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-bold">02</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-[#1d1d1f]">부족한 심리적 증거</h3>
                                    <p className="text-[#86868b] leading-relaxed">신뢰는 시각적 권위에서 나옵니다. 압도적인 비주얼 퀄리티로 브랜드의 체급을 올려 구매의 정당성을 부여합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center">
                        {/* Logic Visual Mockup */}
                        <div className="relative w-full h-full bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-inner border border-gray-100 flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/10 to-transparent"></div>
                            <div className="relative text-center p-12 space-y-6">
                                <div className="text-6xl font-black text-[#1d1d1f] transition-transform duration-700 group-hover:scale-110">94%</div>
                                <div className="text-[#86868b] font-bold tracking-[0.2em] uppercase text-xs">Visual Trust Score</div>
                                <div className="w-32 h-1 bg-[#1d1d1f] mx-auto rounded-full"></div>
                                <p className="text-sm font-medium text-gray-500">디자인이 브랜드 신뢰도에 미치는 영향</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogicSection;
