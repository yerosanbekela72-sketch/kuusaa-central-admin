import React from 'react';
import { Search, Bell, UserCircle } from 'lucide-react';
import { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const titles: Record<Page, string> = {
    dashboard: 'Dashboard Overview',
    users: 'Fayyadamtoota (Users)',
    files: 'Faayiloota (Files)',
    categories: 'Categories',
    settings: 'Sajoo (Settings)'
  };

  return (
    <header className="h-20 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-10">
      <h1 className="text-xl font-semibold text-slate-100">{titles[currentPage]}</h1>
      
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input 
            type="text" 
            placeholder="Barbaadi..." 
            className="bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-64"
          />
        </div>
        
        <button className="relative p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-950"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-200 leading-none">Admin</p>
            <p className="text-xs text-slate-500 mt-1">Super Admin</p>
          </div>
          <UserCircle className="w-10 h-10 text-slate-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;