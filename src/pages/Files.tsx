import React, { useState } from 'react';
import { 
  File, 
  Search, 
  Download, 
  Trash2, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  MoreHorizontal, 
  Filter,
  MapPin,
  User as UserIcon
} from 'lucide-react';
import { toast } from 'sonner';

interface FileData {
  id: number;
  name: string;
  type: 'doc' | 'img' | 'vid';
  owner: string;
  location: string;
  size: string;
  date: string;
}

const Files: React.FC = () => {
  const [files, setFiles] = useState<FileData[]>([
    { id: 1, name: 'Qajeelfama_Hojii.pdf', type: 'doc', owner: 'Admin', location: 'Galma', size: '2.4 MB', date: '2024-03-10' },
    { id: 2, name: 'Meeting_Photo.jpg', type: 'img', owner: 'Tolera K.', location: 'Konyaa', size: '4.1 MB', date: '2024-03-08' },
    { id: 3, name: 'Training_Video.mp4', type: 'vid', owner: 'Lensa A.', location: 'Wiirtuu', size: '45.8 MB', date: '2024-03-05' },
    { id: 4, name: 'Project_Report.docx', type: 'doc', owner: 'Gammachu T.', location: 'Dhuunfaa', size: '1.2 MB', date: '2024-03-01' },
    { id: 5, name: 'Building_Plan.png', type: 'img', owner: 'Obsa B.', location: 'Galma', size: '3.5 MB', date: '2024-02-28' },
  ]);

  const handleDelete = (id: number) => {
    if (confirm('Faayila kana haquu barbaadda?')) {
      setFiles(files.filter(f => f.id !== id));
      toast.success('Faayilli haqameera.');
    }
  };

  const handleDownload = (name: string) => {
    toast.success(`Buufachaa jira: ${name}`);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'doc': return <FileText className="w-5 h-5 text-blue-400" />;
      case 'img': return <ImageIcon className="w-5 h-5 text-emerald-400" />;
      case 'vid': return <Video className="w-5 h-5 text-rose-400" />;
      default: return <File className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">Faayiloota Ilaali</h2>
          <p className="text-slate-400 text-sm">Faayiloota hunda asitti to'achuu dandeessa.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Faayila barbaadi..." 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 p-2.5 rounded-xl border border-slate-700 transition-colors">
            <Filter className="w-5 h-5 text-slate-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {files.map((file) => (
          <div key={file.id} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:border-blue-500/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-blue-600/10 transition-colors">
                {getIcon(file.type)}
              </div>
              <div className="flex gap-1">
                <button 
                  onClick={() => handleDownload(file.name)}
                  className="p-2 text-slate-500 hover:text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDelete(file.id)}
                  className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <h4 className="font-semibold text-slate-100 truncate mb-4" title={file.name}>{file.name}</h4>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <UserIcon className="w-3.5 h-3.5" />
                <span>Nama galche: <span className="text-slate-200">{file.owner}</span></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>Bakka: <span className="text-slate-200">{file.location}</span></span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              <span>{file.size}</span>
              <span>{file.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Files;