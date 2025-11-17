import { Home, ClipboardList, Users, LineChart, Globe2, Plus } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 shadow-2xl">
      <ul className="flex items-center gap-6 text-slate-200">
        <li className="flex flex-col items-center gap-1 text-xs"><Home className="w-5 h-5"/><span>Home</span></li>
        <li className="flex flex-col items-center gap-1 text-xs"><ClipboardList className="w-5 h-5"/><span>Timeline</span></li>
        <li>
          <a href="#log" className="btn rounded-full w-12 h-12 p-0 -mt-8 shadow-lg">
            <Plus className="w-6 h-6"/>
          </a>
        </li>
        <li className="flex flex-col items-center gap-1 text-xs"><LineChart className="w-5 h-5"/><span>Insights</span></li>
        <li className="flex flex-col items-center gap-1 text-xs"><Users className="w-5 h-5"/><span>Family</span></li>
      </ul>
    </nav>
  );
}
