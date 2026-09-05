import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-cream text-brown">
      <Header />
      <main id="contenido" className="flex-1 pt-[4.5rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
