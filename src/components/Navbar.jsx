import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'AI', href: '#ai' },
    { label: 'Web', href: '#web' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="text-base font-semibold tracking-tight text-white">Flames Agency</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
              <a href="#contact" className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-shadow">
                Start a Project
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 sm:px-6">
              <div className="flex flex-col gap-3">
                {navItems.map((n) => (
                  <a key={n.label} href={n.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
                    {n.label}
                  </a>
                ))}
                <a href="#contact" className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-center text-sm font-medium text-white shadow-lg shadow-violet-500/20">
                  Start a Project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
