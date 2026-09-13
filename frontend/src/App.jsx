import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import UniversityPage from './pages/UniversityPage'
import MncPage from './pages/MncPage'
import AboutPage from './pages/AboutPage'

function ScrollToTopAndHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 0)
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return(
    <div className="bg-[#EFEFEF] text-[#353D65] min-h-screen selection:bg-[#52D5C4] selection:text-[#353D65] flex flex-col justify-between">
      <ScrollToTopAndHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/universities" element={<UniversityPage />} />
          <Route path="/companies" element={<MncPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
