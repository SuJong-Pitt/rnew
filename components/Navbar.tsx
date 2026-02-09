
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
          <div className="flex items-center gap-6 mr-6 border-r border-gray-100 pr-6">
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
          
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-30 hover:opacity-100 transition-opacity" title="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-30 hover:opacity-100 transition-opacity" title="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
