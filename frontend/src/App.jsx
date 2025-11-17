import './index.css';
import Hero from './components/Hero';
import QuickLog from './components/QuickLog';
import Dashboard from './components/Dashboard';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Dashboard />
      <QuickLog />
      <div id="insights" className="container mx-auto px-4 mt-8 mb-28">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Insights</h2>
          <p className="text-slate-300 text-sm">Pattern recognition, predictions, and community trends will appear here.</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
