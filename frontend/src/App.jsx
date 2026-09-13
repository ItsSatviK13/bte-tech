import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import UniversityPage from './pages/UniversityPage'
import MncPage from './pages/MncPage'

function App() {
  return(
    <div className="bg-[#EFEFEF] text-[#353D65] min-h-screen selection:bg-[#52D5C4] selection:text-[#353D65] flex flex-col justify-between">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/universities" element={<UniversityPage />} />
          <Route path="/companies" element={<MncPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
