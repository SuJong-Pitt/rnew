
import React from 'react';
import { ViewMode } from '../types';

interface NavbarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] glass-morphism border-b border-gray-100/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        <div
          className="cursor-pointer font-bold text-base md:text-lg tracking-tight text-[#1d1d1f]"
          onClick={() => onNavigate(ViewMode.HOME)}
        >
          R:new Studio
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={() => onNavigate(ViewMode.HOME)}
            className={`text-[11px] md:text-xs font-medium transition-all ${currentView === ViewMode.HOME ? 'text-[#1d1d1f]' : 'text-[#86868b] hover:text-[#1d1d1f]'}`}
          >
            Overview
          </button>
          <button
            onClick={() => onNavigate(ViewMode.ABOUT)}
            className={`text-[11px] md:text-xs font-medium transition-all ${currentView === ViewMode.ABOUT ? 'text-[#1d1d1f]' : 'text-[#86868b] hover:text-[#1d1d1f]'}`}
          >
            Studio
          </button>
          <button
            onClick={() => {
              onNavigate(ViewMode.HOME);
              setTimeout(() => {
                const el = document.getElementById('portfolio-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className={`text-[11px] md:text-xs font-medium transition-all ${currentView === ViewMode.DETAIL ? 'text-[#1d1d1f]' : 'text-[#86868b] hover:text-[#1d1d1f]'}`}
          >
            Portfolio
          </button>
          <button
            onClick={() => onNavigate(ViewMode.ADMIN)}
            className="bg-[#1d1d1f] text-white px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold hover:bg-black transition-all"
          >
            Admin
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
