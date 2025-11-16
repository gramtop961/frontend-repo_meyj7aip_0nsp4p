import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#070010] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_70%_at_50%_0%,rgba(168,85,247,0.25),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to launch something remarkable?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mx-auto mt-3 max-w-2xl text-zinc-300">
          Tell us about your goals. We’ll design an AI-first solution and ship a production-ready system on an aggressive timeline.
        </motion.p>

        <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          <input required placeholder="Name" className="col-span-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500" />
          <input type="email" required placeholder="Email" className="col-span-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500" />
          <button className="col-span-1 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50">Request Proposal</button>
        </motion.form>

        <p className="mt-4 text-xs text-zinc-400">By submitting, you agree to our terms. We’ll reply within 24 hours.</p>
      </div>
    </section>
  )
}
