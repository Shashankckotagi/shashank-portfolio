import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ResearchPage from './pages/ResearchPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'

function HomePage() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home — full long-scroll page with Hero + About + Features + Footer */}
        <Route path="/" element={<HomePage />} />

        {/* Sub-pages — shared Layout with Navbar + Footer */}
        <Route element={<Layout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
