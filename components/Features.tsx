
import React from 'react';

const Features: React.FC = () => {
  const tools = [
    {
      title: 'Photoshop',
      subtitle: 'Light & Color Mastery',
      icon: 'Ps',
      desc: '제품의 질감 하나까지 살려내는 정교한 리터칭과 브랜드의 무드를 완성하는 독보적인 컬러 톤앤매너.',
      accent: 'text-blue-500'
    },
    {
      title: 'Illustrator',
      subtitle: 'Vector Precision',
      icon: 'Ai',
      desc: '어떤 해상도에서도 선명한 존재감을 드러내는 벡터 기반의 정교한 그래픽 시스템과 아이콘 설계.',
      accent: 'text-orange-500'
    },
    {
      title: 'Premiere Pro',
      subtitle: 'Dynamic Motion',
      icon: 'Pr',
      desc: '정적인 상세페이지에 생명력을 불어넣는 감각적인 영상 연출과 소비자의 시선을 사로잡는 모션 그래픽.',
      accent: 'text-purple-500'
    }
  ];

  return (
    <section id="skill" className="bg-[#f5f5f7] py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            고객의 시선을 사로잡는<br />정교한 기술력
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto font-medium">
            단순한 툴 활용을 넘어, 디자인의 본질인 '구매 전환'을 위한 최첨단 시각 언어를 구현합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100/50"
            >
              <div className="mb-10 relative">
                <div className="w-20 h-20 rounded-2xl bg-[#f5f5f7] flex items-center justify-center text-2xl font-black tracking-tighter group-hover:bg-[#1d1d1f] group-hover:text-white transition-colors duration-500">
                  {tool.icon}
                </div>
                {/* 3D Abstract Shape Mockup */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-spin-slow">
                  <div className={`w-6 h-6 rounded-sm border-2 border-current ${tool.accent} opacity-40 rotate-45`}></div>
                </div>
              </div>
              <h3 className="text-[13px] font-bold text-[#0066cc] uppercase tracking-widest mb-2">{tool.subtitle}</h3>
              <h4 className="text-2xl font-bold text-[#1d1d1f] mb-6 tracking-tight">{tool.title}</h4>
              <p className="text-[#86868b] text-[15px] leading-relaxed font-medium break-keep">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;
