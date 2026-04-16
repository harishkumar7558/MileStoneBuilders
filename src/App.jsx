
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Whatsapp from './components/Whatsapp'
import Navbar from './layouts/Navbar'
import AboutUsPage from './pages/AboutUsPage'
import HomePage from './pages/HomePage'
import SurveyPage from './pages/SurveyPage'
import ContactPage from './pages/contactPage'
import ScrollToTopButton from './components/ScrollUp'
import GeoService from './pages/GeoService'
function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Whatsapp />
      <ScrollToTopButton />


      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/geo-service" element={<GeoService />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
