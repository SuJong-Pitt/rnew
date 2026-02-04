
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-60 pb-40 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black tracking-[0.2em] mb-4 uppercase">
          R:new Design Studio
        </h1>
        <p className="text-xs font-bold tracking-[0.4em] text-gray-400 mb-12 uppercase">
          UI/UX & Premium Detail Page Studio
        </p>
        
        <div className="space-y-2">
          <p className="text-xs leading-loose text-gray-500 font-medium">
            사용자와 고객이 진심으로 만족할 수 있는 결과물을 만듭니다.<br />
            매출을 결정짓는 1%의 디테일, 전략적 디자인을 경험하세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
