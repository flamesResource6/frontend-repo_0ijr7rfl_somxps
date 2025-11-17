import { useState } from 'react';
import { Plus, Pill, Activity } from 'lucide-react';
import axios from 'axios';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function QuickLog() {
  const [symptom, setSymptom] = useState('Fever');
  const [severity, setSeverity] = useState(5);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState('');

  const submit = async () => {
    try {
      setLoading(true);
      const payload = {
        user_id: 'demo-user',
        date: new Date().toISOString().slice(0,10),
        duration_days: 0,
        symptoms: [{ name: symptom, severity: Number(severity) }],
        medications: [],
        recovery_notes: '',
        photos: []
      };
      await axios.post(`${API}/entries`, payload);
      setToast('Logged successfully');
      setTimeout(()=> setToast(''), 2500);
    } catch (e) {
      setToast('Failed to log');
      setTimeout(()=> setToast(''), 2500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="log" className="container mx-auto px-4 mt-8">
      <div className="card">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-400"/>
          <h2 className="text-xl font-semibold">Quick Log</h2>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <input className="input" value={symptom} onChange={(e)=>setSymptom(e.target.value)} placeholder="Symptom (e.g., Fever)"/>
          <input className="input" type="number" min={1} max={10} value={severity} onChange={(e)=>setSeverity(e.target.value)} placeholder="Severity 1-10"/>
          <button onClick={submit} className="btn" disabled={loading}>
            <Plus className="w-4 h-4 mr-2"/>
            {loading ? 'Logging...' : 'Log Symptom'}
          </button>
        </div>
        {toast && <p className="mt-3 text-sm text-slate-300">{toast}</p>}
      </div>
    </section>
  );
}
