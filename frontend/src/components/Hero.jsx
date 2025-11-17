import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Your trusted health companion
          </h1>
          <p className="mt-4 text-slate-300">
            Log symptoms in seconds, track labs and supplements, and get smart insights tailored to you and your family.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#log" className="btn">Log Symptom</a>
            <a href="#insights" className="btn bg-slate-800 hover:bg-slate-700">View Insights</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
