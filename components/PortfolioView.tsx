
import React from 'react';
import { Project } from '../types';

interface PortfolioViewProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const PortfolioView: React.FC<PortfolioViewProps> = ({ projects, onProjectClick }) => {
  return (
    <section id="works-section" className="py-32 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-24 text-center animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-6">Masterpieces</h2>
          <p className="text-xl text-[#86868b] font-medium max-w-2xl mx-auto italic">
            "시각적 완성도를 넘어, 숫자로 가치를 증명하는 포트폴리오"
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => onProjectClick(project)}
              >
                <div className="relative aspect-[16/10] bg-[#f5f5f7] rounded-[2rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700 ease-out border border-gray-100/50">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700" />
                </div>
                <div className="flex justify-between items-end border-b border-gray-100 pb-6 px-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2 tracking-tight">{project.title}</h3>
                    <p className="text-sm font-bold text-[#86868b] uppercase tracking-[0.2em]">Strategy & High-End Design</p>
                  </div>
                  <div className="bg-[#f5f5f7] p-4 rounded-full group-hover:bg-[#1d1d1f] transition-colors duration-500">
                    <svg className="w-5 h-5 text-[#1d1d1f] group-hover:text-white transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-40 bg-[#f5f5f7] rounded-[3rem] border border-dashed border-gray-200 flex flex-col items-center justify-center text-center">
            <h2 className="text-xl font-bold text-gray-400 mb-4 tracking-tight">Preparing New Masterpieces</h2>
            <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Coming Soon</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioView;
