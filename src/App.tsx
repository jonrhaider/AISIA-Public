import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { ScrollManager } from './components/ScrollManager'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  )
}
