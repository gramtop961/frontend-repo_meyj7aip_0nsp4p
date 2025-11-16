import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative isolate min-h-[90vh] w-full overflow-hidden bg-[#0a0114] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(109,40,217,0.35),rgba(168,85,247,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="col-span-7 py-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> Futuristic AI & Web Experiences
              </div>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
                Build intelligent brands with AI agents and high-converting web systems
              </h1>
              <p className="mt-5 max-w-2xl text-zinc-300">
                We design and engineer modern experiences: autonomous AI agents, workflow automations, and pixel-perfect web platforms that convert.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contact" className="pointer-events-auto rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 transition-shadow">Get a proposal</a>
                <a href="#work" className="pointer-events-auto rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">See our work</a>
              </div>
            </motion.div>
          </div>
          <div className="col-span-5" />
        </div>
      </div>
    </section>
  )
}
