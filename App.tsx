
import React, { useState, useEffect, useMemo } from 'react';
import { ViewMode, Project } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogicSection from './components/LogicSection';
import TrustSection from './components/TrustSection';
import Features from './components/Features';
import CTASection from './components/CTASection';
import PortfolioView from './components/PortfolioView';
import AdminPanel from './components/AdminPanel';
import ProjectDetail from './components/ProjectDetail';
import AboutView from './components/AboutView';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

// 다양한 환경(Vite, Node, Browser)에서 환경 변수를 안전하게 가져오는 함수
const getEnv = (key: string): string => {
  const env = (import.meta as any).env || {};
  const processEnv = (window as any).process?.env || (globalThis as any).process?.env || {};
  const windowEnv = (window as any).importMetaEnv || {};

  return env[key] || processEnv[key] || windowEnv[key] || '';
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>(ViewMode.HOME);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // 로그인 폼 상태
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Supabase 클라이언트 메모이제이션
  const supabase = useMemo(() => {
    const url = getEnv('VITE_SUPABASE_URL');
    const key = getEnv('VITE_SUPABASE_ANON_KEY');

    if (!url || !key) {
      console.warn('Supabase configuration is missing. Check your .env file or environment variables.');
      return null;
    }

    try {
      return createClient(url, key);
    } catch (e) {
      console.error('Failed to initialize Supabase client:', e);
      return null;
    }
  }, []);

  const KAKAO_CHAT_URL = getEnv('VITE_KAKAO_CHAT_URL');

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAdminAuthenticated(!!session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdminAuthenticated(!!session);
    });
    return () => subscription.unsubscribe();
  }, [supabase]);

  const fetchProjects = async () => {
    if (!supabase) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      const mappedProjects: Project[] = data.map(item => ({
        id: item.id,
        title: item.title,
        imageUrl: item.image_url,
        description: item.description,
        createdAt: new Date(item.created_at).getTime()
      }));
      setProjects(mappedProjects);
    } catch (err) {
      console.error('Error fetching projects:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [supabase]);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;
    setIsAuthLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: authEmail,
        password: authPassword,
      });
      if (error) throw error;
      setAuthEmail('');
      setAuthPassword('');
    } catch (err: any) {
      alert(`로그인 실패: ${err.message || '이메일 또는 비밀번호를 확인해주세요.'}`);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setCurrentView(ViewMode.HOME);
  };

  const handleNavigate = (view: ViewMode) => {
    setCurrentView(view);
    if (view === ViewMode.HOME || view === ViewMode.ABOUT) {
      setSelectedProject(null);
      if (view === ViewMode.HOME) fetchProjects();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderLandingPage = () => (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <LogicSection />
      <TrustSection />

      <section id="portfolio-section" className="py-20">
        {!supabase ? (
          <div className="py-40 px-6 max-w-5xl mx-auto text-center bg-[#f5f5f7] rounded-3xl border border-gray-100/50 mb-20 animate-fade-up">
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-4">Portfolio Offline</h2>
            <p className="text-[13px] leading-relaxed text-gray-500 font-medium max-w-xs mx-auto">
              Supabase 설정이 필요합니다.<br />
              현재는 로컬 미리보기 모드입니다.
            </p>
          </div>
        ) : isLoading ? (
          <div className="py-20 text-center text-xs font-medium tracking-widest text-[#86868b] uppercase">Loading Masterpieces...</div>
        ) : (
          <PortfolioView projects={projects} onProjectClick={(p) => {
            setSelectedProject(p);
            setCurrentView(ViewMode.DETAIL);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}
      </section>

      <Features />

      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-64 h-64 rounded-3xl bg-[#f5f5f7] flex-shrink-0 overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80" alt="About" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-8 text-[#1d1d1f]">The Philosophy</h2>
              <p className="text-lg leading-relaxed text-[#86868b] font-medium break-keep mb-8">
                R:new Design Studio는 단순한 미적 완성도를 넘어, 비즈니스의 실질적인 지표인 '매출'에 집중합니다.
                우리는 시각적 아름다움 뒤에 숨겨진 인간 심리와 데이터에 기반하여 고객이 거부감 없이
                구매 버튼까지 도달하도록 유도하는 최적화된 상세페이지와 UI/UX를 설계합니다.
              </p>
              <div className="h-px w-20 bg-[#1d1d1f]"></div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact-section">
        <CTASection kakaoUrl={KAKAO_CHAT_URL} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white selection:bg-[#0066cc] selection:text-white flex flex-col relative overflow-x-hidden">

      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      <main className="flex-grow relative z-10">
        {(currentView === ViewMode.HOME) && renderLandingPage()}
        {currentView === ViewMode.ABOUT && <AboutView />}
        {currentView === ViewMode.DETAIL && selectedProject && (
          <ProjectDetail project={selectedProject} onBack={() => handleNavigate(ViewMode.HOME)} />
        )}
        {currentView === ViewMode.ADMIN && (
          isAdminAuthenticated ? (
            <AdminPanel
              projects={projects}
              onBack={() => handleNavigate(ViewMode.HOME)}
              onRefresh={fetchProjects}
              onLogout={handleLogout}
            />
          ) : (
            <div className="min-h-screen flex items-center justify-center pt-20 px-6">
              <form onSubmit={handleAdminLogin} className="max-w-sm w-full p-10 border border-gray-100 text-center space-y-6 bg-white shadow-2xl animate-in slide-in-from-bottom-8 duration-700 relative z-20">
                <div className="space-y-2 mb-10">
                  <h2 className="text-xs font-black tracking-[0.4em] uppercase">Admin Secure Access</h2>
                  <p className="text-[9px] text-gray-400 font-bold tracking-widest uppercase">Authorized Personnel Only</p>
                </div>
                <div className="space-y-4">
                  <div className="text-left space-y-1">
                    <label className="text-[8px] font-black uppercase text-gray-400 tracking-widest pl-1">Email Address</label>
                    <input
                      type="email"
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      className="w-full bg-gray-50 px-4 py-4 text-xs outline-none focus:ring-1 focus:ring-black font-bold tracking-widest transition-all"
                      placeholder="admin@rnew.studio"
                      required
                    />
                  </div>
                  <div className="text-left space-y-1">
                    <label className="text-[8px] font-black uppercase text-gray-400 tracking-widest pl-1">Security Key</label>
                    <input
                      type="password"
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      className="w-full bg-gray-50 px-4 py-4 text-xs outline-none focus:ring-1 focus:ring-black font-bold tracking-widest transition-all"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
                <button
                  disabled={isAuthLoading || !supabase}
                  className="w-full bg-black text-white py-5 text-[10px] font-black tracking-[0.3em] uppercase hover:bg-gray-800 transition-all shadow-lg active:scale-[0.98]"
                >
                  {!supabase ? 'Config Error' : isAuthLoading ? 'Authenticating...' : 'Sign In To Console'}
                </button>
              </form>
            </div>
          )
        )}
      </main>

      <a
        href={KAKAO_CHAT_URL || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-[100] flex items-center gap-3 bg-black text-white p-4 md:px-6 md:py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group overflow-hidden border border-white/10"
      >
        <div className="absolute inset-0 bg-[#FEE500] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        <svg className="w-5 h-5 relative z-10 text-white group-hover:text-[#3C1E1E] transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.707 4.8 4.34 6.1l-.85 3.12c-.1.38.35.7.68.48l3.64-2.4c.4.04.81.06 1.22.06 4.97 0 9-3.186 9-7.115S16.97 3 12 3z" />
        </svg>
        <span className="text-[10px] font-black tracking-widest uppercase relative z-10 group-hover:text-[#3C1E1E] transition-colors hidden md:block">
          Kakao Inquiry
        </span>
      </a>

      <button
        onClick={() => handleNavigate(ViewMode.ADMIN)}
        className="fixed bottom-8 right-8 z-[100] p-4 text-[10px] font-black tracking-widest uppercase text-gray-300 hover:text-black transition-all opacity-30 hover:opacity-100"
      >
        Admin
      </button>

      <footer className="py-20 px-6 border-t border-gray-50 bg-white/80 backdrop-blur-md relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h4 className="text-xs font-black tracking-widest mb-4 uppercase text-black">R:new Design Studio</h4>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">© 2026 R:new Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;