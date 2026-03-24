import React, { useState } from 'react';
import { 
  Search, 
  Trash2, 
  UserPlus, 
  Mail, 
  Phone, 
  Shield, 
  Ban, 
  CheckCircle2,
  X
} from 'lucide-react';
import { toast } from 'sonner';

interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'user';
  status: 'active' | 'blocked';
  joinedAt: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([
    { id: 1, name: 'Tolera Kasahun', email: 'tolera@example.com', phone: '0911223344', role: 'user', status: 'active', joinedAt: '2024-01-15' },
    { id: 2, name: 'Gammachu Taddese', email: 'gammachu@example.com', phone: '0911556677', role: 'admin', status: 'active', joinedAt: '2023-11-20' },
    { id: 3, name: 'Lensa Abera', email: 'lensa@example.com', phone: '0911889900', role: 'user', status: 'blocked', joinedAt: '2024-02-10' },
    { id: 4, name: 'Obsa Birratu', email: 'obsa@example.com', phone: '0911334455', role: 'user', status: 'active', joinedAt: '2024-03-01' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<{name: string; email: string; phone: string; role: 'admin' | 'user'}>({ 
    name: '', 
    email: '', 
    phone: '', 
    role: 'user' 
  });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    const user: UserData = {
      id: users.length + 1,
      ...newUser,
      status: 'active',
      joinedAt: new Date().toISOString().split('T')[0]
    };
    setUsers([...users, user]);
    setIsModalOpen(false);
    toast.success('User haaraan milkiin uumameera!');
    setNewUser({ name: '', email: '', phone: '', role: 'user' });
  };

  const handleDelete = (id: number) => {
    if (confirm('Dhuguma user kana haquu barbaadda?')) {
      setUsers(users.filter(u => u.id !== id));
      toast.success('User haqameera.');
    }
  };

  const toggleStatus = (id: number) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        const newStatus = u.status === 'active' ? 'blocked' : 'active';
        toast.info(`User ${newStatus === 'blocked' ? 'cufameera (blocked)' : 'banameera'}.`);
        return { ...u, status: newStatus };
      }
      return u;
    }));
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">Fayyadamtoota Bulcha</h2>
          <p className="text-slate-400 text-sm">Listii users hunda asitti arguun to'achuu dandeessa.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl transition-all font-medium"
        >
          <UserPlus className="w-5 h-5" />
          User Haaraa Uumi
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800/50">
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Maqaa & Info</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Gocha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-500 font-bold border border-slate-700">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-100">{user.name}</p>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                          <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {user.email}</span>
                          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {user.phone}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                      user.role === 'admin' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                      <Shield className="w-3 h-3" />
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {user.status === 'active' ? <CheckCircle2 className="w-3 h-3" /> : <Ban className="w-3 h-3" />}
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">{user.joinedAt}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => toggleStatus(user.id)}
                        title={user.status === 'active' ? 'Block User' : 'Unblock User'}
                        className={`p-2 rounded-lg transition-colors ${
                          user.status === 'active' ? 'hover:bg-amber-500/10 text-slate-500 hover:text-amber-500' : 'hover:bg-emerald-500/10 text-slate-500 hover:text-emerald-500'
                        }`}
                      >
                        <Ban className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-100">User Haaraa Uumi</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-slate-300">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAddUser} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Maqaa Guutuu</label>
                <input 
                  type="text" 
                  required
                  value={newUser.name}
                  onChange={e => setNewUser({...newUser, name: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email</label>
                <input 
                  type="email" 
                  required
                  value={newUser.email}
                  onChange={e => setNewUser({...newUser, email: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Lakk. Bilbilaa</label>
                <input 
                  type="tel" 
                  required
                  value={newUser.phone}
                  onChange={e => setNewUser({...newUser, phone: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Role</label>
                <select 
                  value={newUser.role}
                  onChange={e => setNewUser({...newUser, role: e.target.value as 'user' | 'admin'})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all"
                >
                  Save User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;