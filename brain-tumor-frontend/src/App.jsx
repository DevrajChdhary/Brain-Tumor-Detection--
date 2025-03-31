import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import About from './components/About'
import TumorTypes from './components/TumorTypes'

function App() {

  return (
    <div>
      <Navbar />
      <div class="container mx-auto px-4 sm:px-6 space-y-12 sm:space-y-20 pt-16 sm:pt-20">
        <HeroSection />
        <About />
        <TumorTypes />
      </div>
      <Footer />
    </div>
  )
}

export default App
