import React, { useState } from 'react';
import { Tag, Plus, Edit2, Trash2, X, FolderTree } from 'lucide-react';
import { toast } from 'sonner';

interface Category {
  id: number;
  name: string;
  count: number;
  color: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Galma', count: 124, color: 'blue' },
    { id: 2, name: 'Konyaa', count: 85, color: 'emerald' },
    { id: 3, name: 'Wiirtuu', count: 42, color: 'amber' },
    { id: 4, name: 'Dhuunfaa', count: 210, color: 'purple' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCat, setNewCat] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCat.trim()) return;
    
    const colors = ['blue', 'emerald', 'amber', 'purple', 'rose', 'cyan'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    setCategories([...categories, {
      id: Date.now(),
      name: newCat,
      count: 0,
      color: randomColor
    }]);
    setNewCat('');
    setIsModalOpen(false);
    toast.success('Category haaraan dabalamameera!');
  };

  const handleDelete = (id: number) => {
    if (confirm('Dhuguma category kana haquu barbaadda?')) {
      setCategories(categories.filter(c => c.id !== id));
      toast.success('Category haqameera.');
    }
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">Category Management</h2>
          <p className="text-slate-400 text-sm">Ramaddii faayilootaa asitti bulchi.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl transition-all font-medium"
        >
          <Plus className="w-5 h-5" />
          Dabaluu
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group overflow-hidden">
            <div className={`absolute top-0 right-0 w-24 h-24 bg-${cat.color}-500/5 -mr-10 -mt-10 rounded-full blur-2xl group-hover:bg-${cat.color}-500/10 transition-colors`}></div>
            
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-xl bg-${cat.color}-500/10 text-${cat.color}-500`}>
                <FolderTree className="w-6 h-6" />
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDelete(cat.id)}
                  className="p-1.5 text-slate-500 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-100">{cat.name}</h3>
            <p className="text-slate-400 text-sm mt-1">{cat.count} Faayiloota</p>
            
            <div className="mt-4 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-${cat.color}-500`} 
                style={{ width: `${Math.min(100, (cat.count / 250) * 100)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-100">Category Haaraa</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-slate-300">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Maqaa Category</label>
                <input 
                  type="text" 
                  autoFocus
                  required
                  value={newCat}
                  onChange={e => setNewCat(e.target.value)}
                  placeholder="Fkn. Galma, Konyaa..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all"
              >
                Category Dabali
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;