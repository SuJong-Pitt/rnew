
import React from 'react';
import { ViewMode } from '../types';

interface NavbarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] glass-morphism border-b border-gray-100/50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div
          className="cursor-pointer font-bold text-lg tracking-tight text-[#1d1d1f]"
          onClick={() => onNavigate(ViewMode.HOME)}
        >
          R:new Studio
        </div>

        <div className="flex items-center gap-8">
          <button
            onClick={() => onNavigate(ViewMode.HOME)}
            className={`text-xs font-medium transition-all ${currentView === ViewMode.HOME ? 'text-[#1d1d1f]' : 'text-[#86868b] hover:text-[#1d1d1f]'}`}
          >
            Overview
          </button>
          <button
            onClick={() => {
              onNavigate(ViewMode.HOME);
              setTimeout(() => {
                document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className={`text-xs font-medium transition-all ${currentView === ViewMode.DETAIL ? 'text-[#1d1d1f]' : 'text-[#86868b] hover:text-[#1d1d1f]'}`}
          >
            Portfolio
          </button>
          <button
            onClick={() => {
              onNavigate(ViewMode.HOME);
              setTimeout(() => {
                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="text-xs font-medium text-[#86868b] hover:text-[#1d1d1f] transition-all"
          >
            Contact
          </button>
          <button
            onClick={() => onNavigate(ViewMode.ADMIN)}
            className="bg-[#1d1d1f] text-white px-3 py-1 rounded-full text-[10px] font-bold hover:bg-black transition-all"
          >
            Admin
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
