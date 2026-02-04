
import React, { useState, useEffect } from 'react';
import { ViewMode, Project } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PortfolioView from './components/PortfolioView';
import AdminPanel from './components/AdminPanel';
import ProjectDetail from './components/ProjectDetail';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

// Supabase 클라이언트 초기화
const supabaseUrl = 'https://bmqbexyvadscdxvzoifp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtcWJleHl2YWRzY2R4dnpvaWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNDIzMjEsImV4cCI6MjA4NTYxODMyMX0.GSzavJ-VCmpmHHBT3lyXLzSe6K8qr7ggBq-a66vGtzY';
const supabase = createClient(supabaseUrl, supabaseKey);

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

  // 1. 앱 로드 시 및 상태 변경 시 세션 체크
  useEffect(() => {
    // 현재 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAdminAuthenticated(!!session);
    });

    // 인증 상태 변경 리스너 (로그인/로그아웃 감지)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdminAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 2. 프로젝트 데이터 불러오기
  const fetchProjects = async () => {
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
  }, []);

  // 3. 관리자 로그인 처리
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: authEmail,
        password: authPassword,
      });
      if (error) throw error;
      
      // 로그인 성공 시 폼 초기화
      setAuthEmail('');
      setAuthPassword('');
    } catch (err: any) {
      alert(`로그인 실패: ${err.message || '이메일 또는 비밀번호를 확인해주세요.'}`);
    } finally {
      setIsAuthLoading(false);
    }
  };

  // 4. 로그아웃 처리
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCurrentView(ViewMode.HOME);
  };

  const handleNavigate = (view: ViewMode) => {
    setCurrentView(view);
    if (view === ViewMode.HOME) {
      setSelectedProject(null);
      fetchProjects();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderLandingPage = () => (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <Features />
      {isLoading ? (
        <div className="py-20 text-center text-[10px] font-bold tracking-widest text-gray-400 uppercase">Loading Projects...</div>
      ) : (
        <PortfolioView projects={projects} onProjectClick={(p) => {
          setSelectedProject(p);
          setCurrentView(ViewMode.DETAIL);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />
      )}
      
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-100 mt-20">
        <h2 className="section-title">The Philosophy</h2>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-56 h-56 rounded-full bg-[#f8f8f8] flex-shrink-0 overflow-hidden grayscale border border-gray-100">
            <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80" alt="About" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <p className="text-[11px] leading-loose text-gray-500 font-medium break-keep">
              R:new Design Studio는 단순한 미적 완성도를 넘어, 비즈니스의 실질적인 지표인 '매출'에 집중합니다. 우리는 시각적 아름다움 뒤에 숨겨진 인간 심리와 데이터에 기반하여 고객이 거부감 없이 구매 버튼까지 도달하도록 유도하는 최적화된 상세페이지와 UI/UX를 설계합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white flex flex-col">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {(currentView === ViewMode.HOME) && renderLandingPage()}
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
              <form onSubmit={handleAdminLogin} className="max-w-sm w-full p-10 border border-gray-100 text-center space-y-6 bg-white shadow-2xl animate-in slide-in-from-bottom-8 duration-700">
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
                  disabled={isAuthLoading}
                  className="w-full bg-black text-white py-5 text-[10px] font-black tracking-[0.3em] uppercase hover:bg-gray-800 transition-all shadow-lg active:scale-[0.98]"
                >
                  {isAuthLoading ? 'Authenticating...' : 'Sign In To Console'}
                </button>
                
                <p className="text-[8px] text-gray-300 font-bold tracking-widest uppercase pt-4">
                  R:new Studio Internal System v2.0
                </p>
              </form>
            </div>
          )
        )}
      </main>
    </div>
  );
};

export default App;
