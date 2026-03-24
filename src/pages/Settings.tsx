import React, { useState } from 'react';
import { 
  Bell, 
  Shield, 
  Smartphone, 
  Globe, 
  Send, 
  Lock,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { toast } from 'sonner';

const Settings: React.FC = () => {
  const [notification, setNotification] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSendNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notification.trim()) return;

    setIsSending(true);
    setTimeout(() => {
      toast.success('Ergaan gara users hundaatti ergameera!');
      setNotification('');
      setIsSending(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-600/10 text-blue-500 rounded-lg">
            <Bell className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">Ergaa Beeksisaa (Notification)</h3>
        </div>
        
        <p className="text-slate-400 text-sm mb-6">Ergaa kana users hundaaf kallattiin erguu dandeessa.</p>
        
        <form onSubmit={handleSendNotification} className="space-y-4">
          <textarea 
            className="w-full h-32 bg-slate-800 border border-slate-700 rounded-xl p-4 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-500"
            placeholder="Fkn. App keenya haaromfameera. Maaloo password kee jijjiiri..."
            value={notification}
            onChange={(e) => setNotification(e.target.value)}
            required
          ></textarea>
          
          <div className="flex justify-end">
            <button 
              type="submit"
              disabled={isSending}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20"
            >
              {isSending ? 'Ergaa jira...' : (
                <>
                  <Send className="w-4 h-4" />
                  Ergi
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-600/10 text-emerald-500 rounded-lg">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-100">Nageenya (Security)</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl">
              <span className="text-sm text-slate-300">2FA Gali</span>
              <div className="w-10 h-5 bg-slate-700 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-3 h-3 bg-slate-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl">
              <span className="text-sm text-slate-300">Strong Password Only</span>
              <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-600/10 text-purple-500 rounded-lg">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-100">System Info</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-slate-400">
              <span>Version:</span>
              <span className="text-slate-200">2.4.0-pro</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Database:</span>
              <span className="text-slate-200 font-mono">Firestore (Sync)</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Uptime:</span>
              <span className="text-emerald-500">99.9%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;