import { AuroraMesh } from './ui/AuroraMesh'
import { Nav } from '../sections/Nav'
import { Footer } from '../sections/Footer'

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <AuroraMesh />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
