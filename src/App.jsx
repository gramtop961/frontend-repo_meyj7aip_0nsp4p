import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#080014] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <CTA />
      <footer className="border-t border-white/10 bg-[#070010] py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Flames Agency. All rights reserved.
      </footer>
    </div>
  )
}

export default App
