import { motion } from 'framer-motion'

const logos = ['Neon Labs', 'Quantumly', 'Orbitr', 'NovaPay', 'Synth', 'HyperOps']

export default function Showcase() {
  return (
    <section id="work" className="relative bg-[#080112] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_0%,rgba(109,40,217,0.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-widest text-fuchsia-300/80">Trusted by modern teams</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Launch faster with a partner obsessed with outcomes
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-300">
            From idea to production: we ship AI-enabled products, performant websites, and scalable systems that convert and retain.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((l) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-6 text-center text-sm text-zinc-300"
            >
              {l}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
