
import React from 'react';

const Features: React.FC = () => {
  const skills = [
    {
      title: 'Adobe Premiere Pro',
      icon: 'Pr',
      desc: '단순한 영상 편집을 넘어 브랜드의 서사를 관통하는 시네마틱 연출과 감각적인 컷 편집을 제공합니다. 고도의 몰입감을 선사하는 사운드 디자인과 정교한 컬러 그레이딩으로 브랜드 아이덴티티를 완성합니다.'
    },
    {
      title: 'Adobe Illustrator',
      icon: 'Ai',
      desc: '브랜드의 본질을 꿰뚫는 견고한 아이덴티티 시스템을 구축합니다. 무한히 확장 가능한 벡터 기술을 바탕으로, 어떤 매체에서도 선명한 존재감을 드러내는 독보적인 로고와 그래픽 자산을 설계하여 비즈니스의 신뢰도를 극대화합니다.'
    },
    {
      title: 'Photoshop',
      icon: 'Ps',
      desc: '고품질의 비주얼 소스를 제작하고 제품의 가치를 돋보이게 하는 리터칭 작업을 수행합니다. 소비자 심리를 자극하는 이미지 톤앤매너를 구축하여 압도적인 시각적 임팩트를 전달합니다.'
    },
    {
      title: 'Figma / XD',
      icon: 'Fg',
      desc: '사용자 동선을 고려한 최적의 UI/UX 설계와 고도화된 프로토타이핑을 통해 매출 상승으로 직결되는 전략적인 비즈니스 솔루션을 도출합니다.'
    }
  ];

  return (
    <section id="skill" className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-100 mt-20">
      <h2 className="section-title">Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex gap-6 items-start group">
            <div className="gray-circle group-hover:bg-black group-hover:text-white transition-all duration-300 font-bold uppercase tracking-tighter">
              {skill.icon}
            </div>
            <div>
              <h3 className="text-xs font-bold mb-2 tracking-tight uppercase">{skill.title}</h3>
              <p className="text-[10px] leading-relaxed text-gray-500 font-medium break-keep">
                {skill.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
