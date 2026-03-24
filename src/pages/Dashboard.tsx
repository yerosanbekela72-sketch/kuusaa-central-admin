import React from 'react';
import { 
  Users, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  TrendingUp,
  FileDown
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area 
} from 'recharts';

const data = [
  { name: 'Jan', users: 400, files: 240 },
  { name: 'Feb', users: 300, files: 139 },
  { name: 'Mar', users: 200, files: 980 },
  { name: 'Apr', users: 278, files: 390 },
  { name: 'May', users: 189, files: 480 },
  { name: 'Jun', users: 239, files: 380 },
  { name: 'Jul', users: 349, files: 430 },
];

const StatCard = ({ title, value, icon: Icon, color, trend }: { 
  title: string, 
  value: string | number, 
  icon: any, 
  color: string, 
  trend: string 
}) => (
  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-500 group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex items-center gap-1 text-emerald-500 text-sm font-medium">
        <TrendingUp className="w-4 h-4" />
        {trend}
      </div>
    </div>
    <h3 className="text-slate-400 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-slate-100 mt-1">{value}</p>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Baay’ina Users" value="1,284" icon={Users} color="blue" trend="+12%" />
        <StatCard title="Documents" value="842" icon={FileText} color="purple" trend="+5.4%" />
        <StatCard title="Suuraawwan" value="3,450" icon={ImageIcon} color="amber" trend="+18%" />
        <StatCard title="Videos" value="156" icon={Video} color="rose" trend="+2.3%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-semibold text-slate-100">Guddina Kuusaa (Analytics)</h3>
            <button className="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg text-slate-300 transition-colors">
              Ji’a 6n darban
            </button>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                  itemStyle={{ color: '#f1f5f9' }}
                />
                <Area type="monotone" dataKey="users" stroke="#2563eb" fillOpacity={1} fill="url(#colorUsers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-slate-100 mb-6">Activity Log</h3>
          <div className="space-y-6">
            {[
              { user: 'Tolera K.', action: 'Document haaraa galche', time: "Daqiiqaa 5 dura" },
              { user: 'Admin', action: 'User "Obsa B." delete godhe', time: "Daqiiqaa 20 dura" },
              { user: 'Lamma G.', action: 'Suuraa upload godhe', time: "Sa'aatii 1 dura" },
              { user: 'Gammachu T.', action: 'Category "Galma" jijjiire', time: "Sa'aatii 2 dura" },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-200">{activity.user}</p>
                  <p className="text-xs text-slate-500">{activity.action}</p>
                  <p className="text-[10px] text-slate-600 mt-1 uppercase tracking-wider">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-2 text-sm text-blue-500 hover:text-blue-400 font-medium transition-colors border border-blue-500/20 rounded-lg hover:bg-blue-500/5">
            Hunda Ilaali
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center bg-blue-600/10 border border-blue-500/20 p-6 rounded-2xl">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-600 rounded-xl">
            <FileDown className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-slate-100 font-semibold">Report Gabaasaa</h4>
            <p className="text-sm text-slate-400">Gabaasa waliigalaa PDF dhan buufadhu</p>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-900/40">
          PDF Buusi
        </button>
      </div>
    </div>
  );
};

export default Dashboard;