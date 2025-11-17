import { useEffect, useState } from 'react';
import { CalendarDays, Pill, Activity, LineChart } from 'lucide-react';
import axios from 'axios';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Dashboard() {
  const [entries, setEntries] = useState([]);
  const [supps, setSupps] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const [e, s] = await Promise.all([
          axios.get(`${API}/entries`, { params: { user_id: 'demo-user', limit: 5 } }),
          axios.get(`${API}/supplements`, { params: { user_id: 'demo-user', limit: 5 } }),
        ]);
        setEntries(e.data || []);
        setSupps(s.data || []);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  return (
    <section className="container mx-auto px-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-emerald-400"/>
            <h3 className="font-medium">Recent Symptoms</h3>
          </div>
          <ul className="space-y-2">
            {entries.length === 0 && <li className="text-slate-400">No recent entries</li>}
            {entries.map((e) => (
              <li key={e.id} className="flex items-center justify-between text-sm">
                <span>{new Date(e.date).toLocaleDateString()} • {e.symptoms?.[0]?.name}</span>
                <span className="text-slate-300">sev {e.symptoms?.[0]?.severity}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <div className="flex items-center gap-2 mb-2">
            <Pill className="w-5 h-5 text-blue-400"/>
            <h3 className="font-medium">Supplements</h3>
          </div>
          <ul className="space-y-2">
            {supps.length === 0 && <li className="text-slate-400">No supplements logged</li>}
            {supps.map((s) => (
              <li key={s.id} className="flex items-center justify-between text-sm">
                <span>{s.name}</span>
                <span className="text-slate-300">{s.schedule}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <div className="flex items-center gap-2 mb-2">
            <LineChart className="w-5 h-5 text-purple-400"/>
            <h3 className="font-medium">Health Score</h3>
          </div>
          <p className="text-4xl font-semibold">78</p>
          <p className="text-slate-400 text-sm mt-1">Based on recent activity and adherence</p>
        </div>
      </div>
    </section>
  );
}
