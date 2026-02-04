
import React from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="pt-32 pb-40 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 mb-16 text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 hover:text-black transition-all"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to list
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h1 className="text-4xl font-black tracking-tight leading-tight uppercase mb-6">{project.title}</h1>
              <div className="h-0.5 w-12 bg-black mb-10"></div>
              <p className="text-[11px] leading-loose text-gray-500 font-medium break-keep">
                {project.description || "이 프로젝트는 R:NEW Design Studio의 철학인 '매출로 이어지는 디자인'을 핵심 가치로 삼아 제작되었습니다. 불필요한 장식을 배제하고 브랜드 본연의 메시지가 가장 효과적으로 전달될 수 있는 레이아웃을 연구했습니다."}
              </p>
            </div>

            <div className="space-y-6 pt-10 border-t border-gray-100">
              <div>
                <h4 className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">Category</h4>
                <p className="text-[11px] font-bold uppercase tracking-wider">UI/UX Design & Branding</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">Client</h4>
                <p className="text-[11px] font-bold uppercase tracking-wider">Premium Business Partners</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">Date</h4>
                <p className="text-[11px] font-bold uppercase tracking-wider">
                  {new Date(project.createdAt).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit' })}
                </p>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="lg:col-span-8">
            <div className="bg-gray-50 overflow-hidden shadow-2xl">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full object-cover animate-in zoom-in-95 duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
