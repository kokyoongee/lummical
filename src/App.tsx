import { Navbar, Footer } from './components/layout'
import {
  Hero,
  Services,
  HowItWorks,
  Testimonials,
  Pricing,
  Contact,
} from './components/sections'

function App() {
  return (
    <div className="relative min-h-screen bg-dark">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
