import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cakes from './pages/Cakes'
import Cookies from './pages/Cookies'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kaker" element={<Cakes />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
