
import React from 'react';
import { ViewMode } from '../types';

interface NavbarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <div 
          className="cursor-pointer font-black text-sm tracking-[0.2em] uppercase"
          onClick={() => onNavigate(ViewMode.HOME)}
        >
          R:NEW STUDIO
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate(ViewMode.HOME)} 
              className={`text-[10px] font-black tracking-widest uppercase transition-all ${currentView === ViewMode.HOME ? 'text-black' : 'text-gray-300 hover:text-black'}`}
            >
              Home
            </button>
            <button 
              onClick={() => {
                onNavigate(ViewMode.HOME);
                setTimeout(() => {
                  document.getElementById('works-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} 
              className={`text-[10px] font-black tracking-widest uppercase transition-all ${currentView === ViewMode.DETAIL ? 'text-black' : 'text-gray-300 hover:text-black'}`}
            >
              Works
            </button>
            <button 
              onClick={() => {
                onNavigate(ViewMode.HOME);
                setTimeout(() => {
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} 
              className="text-[10px] font-black tracking-widest uppercase text-gray-300 hover:text-black transition-all"
            >
              Contact
            </button>
            <button 
              onClick={() => onNavigate(ViewMode.ADMIN)} 
              className={`text-[10px] font-black tracking-widest uppercase transition-all ${currentView === ViewMode.ADMIN ? 'text-black' : 'text-gray-300 hover:text-black'}`}
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
