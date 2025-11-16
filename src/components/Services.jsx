import { Bot, Workflow, MessagesSquare, ShoppingCart, Store, CalendarClock, Briefcase } from 'lucide-react'

const aiServices = [
  { icon: Bot, title: 'AI Agents', desc: 'Autonomous agents that reason, plan, and execute across your stack.' },
  { icon: Workflow, title: 'Automations', desc: 'Streamline ops with AI-first, event-driven workflows and RPA.' },
  { icon: MessagesSquare, title: 'Chatbots', desc: 'On-brand conversational AI for support, sales, and onboarding.' },
]

const webServices = [
  { icon: ShoppingCart, title: 'Ecommerce', desc: 'High-performance stores with subscriptions, bundles, and analytics.' },
  { icon: Store, title: 'Marketplace', desc: 'Multi-vendor platforms with escrow, payouts, and search.' },
  { icon: CalendarClock, title: 'Appointments', desc: 'Booking systems with calendar sync, payments, and reminders.' },
  { icon: Briefcase, title: 'Portfolio', desc: 'Blazing-fast sites that showcase your brand and drive leads.' },
]

function Card({ Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-transform hover:-translate-y-1">
      <div className="absolute inset-px -z-10 rounded-2xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-700/20">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-zinc-300">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="ai" className="relative bg-[#0a0114] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-fuchsia-300/80">AI Services</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Intelligence that executes</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiServices.map((s) => (
            <Card key={s.title} Icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>

      <div id="web" className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-fuchsia-300/80">Web Development</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Sites and systems that scale</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {webServices.map((s) => (
            <Card key={s.title} Icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
