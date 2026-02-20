
import React from 'react';

const LogicSection: React.FC = () => {
    return (
        <section className="bg-white py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    <div className="w-full md:w-1/2 animate-fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-8 leading-[1.2] md:leading-[1.1] break-keep">
                            팔리지 않는 이유는<br />
                            <span className="text-[#86868b]">단 한 가지 뿐입니다.</span>
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-bold text-sm md:text-base">01</div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 text-[#1d1d1f]">불분명한 가치 전달</h3>
                                    <p className="text-sm md:text-base text-[#86868b] leading-relaxed break-keep">고객은 3초 만에 이 페이지를 더 읽을지 결정합니다. 우리는 즉각적인 시선 강탈과 동시에 핵심 가치를 뇌리에 박아넣습니다.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-bold text-sm md:text-base">02</div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 text-[#1d1d1f]">부족한 심리적 증거</h3>
                                    <p className="text-sm md:text-base text-[#86868b] leading-relaxed break-keep">신뢰는 시각적 권위에서 나옵니다. 압도적인 비주얼 퀄리티로 브랜드의 체급을 올려 구매의 정당성을 부여합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] flex items-center justify-center">
                        {/* Logic Visual Mockup */}
                        <div className="relative w-full h-full bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-inner border border-gray-100 flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/10 to-transparent"></div>
                            <div className="relative text-center p-8 md:p-12 space-y-4 md:space-y-6">
                                <div className="text-5xl md:text-6xl font-black text-[#1d1d1f] transition-transform duration-700 group-hover:scale-110">94%</div>
                                <div className="text-[#86868b] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Visual Trust Score</div>
                                <div className="w-24 md:w-32 h-1 bg-[#1d1d1f] mx-auto rounded-full"></div>
                                <p className="text-xs md:text-sm font-medium text-gray-500 break-keep">디자인이 브랜드 신뢰도에 미치는 영향</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogicSection;
