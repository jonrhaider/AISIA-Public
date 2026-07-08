import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { ScrollManager } from './components/ScrollManager'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { SecurityPage } from './pages/SecurityPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/security" element={<SecurityPage />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  )
}
