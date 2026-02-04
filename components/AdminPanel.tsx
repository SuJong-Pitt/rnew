
import React, { useState } from 'react';
import { Project } from '../types';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

const supabaseUrl = 'https://bmqbexyvadscdxvzoifp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtcWJleHl2YWRzY2R4dnpvaWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNDIzMjEsImV4cCI6MjA4NTYxODMyMX0.GSzavJ-VCmpmHHBT3lyXLzSe6K8qr7ggBq-a66vGtzY';
const supabase = createClient(supabaseUrl, supabaseKey);

interface AdminPanelProps {
  projects: Project[];
  onBack: () => void;
  onRefresh: () => void;
  onLogout: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ projects, onBack, onRefresh, onLogout }) => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !file) {
      alert('제목과 이미지를 모두 선택해주세요.');
      return;
    }

    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `project-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('portfolio')
        .upload(filePath, file);

      if (uploadError) throw new Error(`이미지 업로드 실패: ${uploadError.message}`);

      const { data: urlData } = supabase.storage
        .from('portfolio')
        .getPublicUrl(filePath);

      const publicUrl = urlData.publicUrl;

      const { error: dbError } = await supabase
        .from('projects')
        .insert([{ title, image_url: publicUrl }]);

      if (dbError) throw new Error(`DB 저장 실패: ${dbError.message}`);

      alert('등록 완료!');
      setTitle('');
      setPreview('');
      setFile(null);
      onRefresh();
    } catch (err: any) {
      alert(err.message || '오류 발생');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까? 데이터와 이미지가 모두 삭제됩니다.')) return;
    
    // 삭제할 프로젝트 찾기 (이미지 경로 추출용)
    const targetProject = projects.find(p => p.id === id);
    if (!targetProject) return;

    try {
      // 1. 데이터베이스 레코드 삭제
      const { error: dbError } = await supabase.from('projects').delete().eq('id', id);
      if (dbError) throw dbError;

      // 2. Storage 파일 삭제 시도
      // 공개 URL에서 파일 경로(project-images/파일명) 부분만 추출
      // 형식: .../storage/v1/object/public/portfolio/project-images/filename.jpg
      const urlParts = targetProject.imageUrl.split('/portfolio/');
      if (urlParts.length > 1) {
        const filePath = urlParts[1];
        const { error: storageError } = await supabase.storage
          .from('portfolio')
          .remove([filePath]);
        
        if (storageError) {
          console.warn('DB는 삭제되었으나 Storage 파일 삭제에 실패했습니다:', storageError.message);
        }
      }

      onRefresh();
      alert('삭제되었습니다.');
    } catch (err: any) {
      alert(`삭제 실패: ${err.message}`);
    }
  };

  return (
    <div className="pt-40 pb-40 px-6 max-w-5xl mx-auto animate-in fade-in duration-700">
      <div className="flex justify-between items-center mb-16 pb-8 border-b border-gray-100">
        <h2 className="text-xl font-black tracking-[0.2em] uppercase">Control Center</h2>
        <button 
          onClick={onLogout}
          className="text-[10px] font-black tracking-widest text-gray-300 hover:text-black transition-colors uppercase border border-gray-100 px-4 py-2 hover:border-black"
        >
          Logout Session
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <section>
          <div className="mb-10">
            <h3 className="text-[10px] font-black tracking-[0.4em] uppercase pb-2 border-b border-black inline-block">Add New Project</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Project Title</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="ENTER PROJECT TITLE"
                className="w-full bg-gray-50 px-5 py-4 text-xs outline-none focus:ring-1 focus:ring-black font-bold tracking-widest border border-transparent focus:bg-white transition-all uppercase"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Featured Image</label>
              <div className="relative aspect-[16/10] border border-dashed border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden transition-colors hover:bg-gray-100">
                <input type="file" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                {preview ? (
                  <img src={preview} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center">
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Click to Upload</span>
                  </div>
                )}
              </div>
            </div>

            <button 
              disabled={isUploading}
              className={`w-full py-5 text-[10px] font-black tracking-[0.3em] uppercase transition-all ${isUploading ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800 shadow-lg'}`}
            >
              {isUploading ? 'Processing...' : 'Register Project'}
            </button>
          </form>
        </section>

        <section>
          <div className="mb-10">
            <h3 className="text-[10px] font-black tracking-[0.4em] uppercase pb-2 border-b border-black inline-block">Archived Works</h3>
          </div>
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {projects.length === 0 ? (
              <div className="py-20 text-center border border-dashed border-gray-100">
                <p className="text-[9px] text-gray-300 font-bold uppercase tracking-widest">No projects found</p>
              </div>
            ) : (
              projects.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-4 border border-gray-50 hover:border-gray-200 transition-colors bg-white group">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="w-12 h-12 bg-gray-100 overflow-hidden flex-shrink-0">
                      <img src={p.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    <span className="text-[10px] font-black tracking-wider truncate uppercase">{p.title}</span>
                  </div>
                  <button 
                    onClick={() => handleDelete(p.id)} 
                    className="text-[9px] font-black text-gray-300 hover:text-red-500 uppercase tracking-widest transition-colors pl-4"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPanel;
