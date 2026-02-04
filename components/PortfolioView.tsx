
import React from 'react';
import { Project } from '../types';

interface PortfolioViewProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const PortfolioView: React.FC<PortfolioViewProps> = ({ projects, onProjectClick }) => {
  return (
    <section id="works-section" className="pt-20 pb-20 px-6 max-w-5xl mx-auto border-t border-gray-50 mt-20">
      <div className="mb-20 text-center md:text-left animate-in fade-in slide-in-from-left-4 duration-1000">
        <h1 className="text-xs font-black tracking-[0.6em] uppercase text-gray-300 mb-4">Portfolio</h1>
        <p className="text-xl font-medium tracking-tight break-keep text-gray-800">
          R:NEW STUDIO가 제안하는<br />프리미엄 비주얼 스토리텔링.
        </p>
      </div>
      
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => onProjectClick(project)}
            >
              <div className="aspect-[16/10] bg-[#fcfcfc] overflow-hidden mb-6 relative border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-700">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700" />
              </div>
              <div className="flex justify-between items-start border-b border-gray-50 pb-4 px-1">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest mb-1">{project.title}</h3>
                  <p className="text-[9px] text-gray-400 font-bold tracking-[0.1em] uppercase">Visual Experience Design</p>
                </div>
                <span className="text-[10px] text-gray-200 group-hover:text-black transition-colors font-bold uppercase tracking-widest">Details →</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State Design */
        <div className="py-40 border border-dashed border-gray-100 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-1000">
          <div className="w-px h-12 bg-gray-200 mb-8"></div>
          <h2 className="text-[10px] font-black tracking-[0.8em] uppercase text-gray-300 mb-6">Preparing New Inspiration</h2>
          <div className="space-y-3">
            <p className="text-[11px] font-medium text-gray-400 tracking-wider">현재 새로운 프로젝트를 큐레이션 중입니다.</p>
            <p className="text-[9px] font-bold text-gray-300 tracking-[0.2em] uppercase">Coming soon to the archive</p>
          </div>
          <div className="w-px h-12 bg-gray-200 mt-8"></div>
        </div>
      )}
    </section>
  );
};

export default PortfolioView;
