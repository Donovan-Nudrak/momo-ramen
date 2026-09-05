import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { CatFace } from './illustrations/PeachCat.jsx'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/menu', label: 'Menú' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/reservar', label: 'Reservar' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-peach/70 bg-cream/90 backdrop-blur-md">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-coral focus:px-4 focus:py-2 focus:text-cream"
      >
        Saltar al contenido
      </a>

      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-full pr-2 transition-opacity duration-300 hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <CatFace className="h-11 w-11" />
          <span className="font-display text-xl font-extrabold tracking-tight text-brown md:text-2xl">
            Momo Ramen
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                [
                  'rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors duration-300',
                  isActive
                    ? 'bg-peach text-brown'
                    : 'text-brown-soft hover:bg-peach/50 hover:text-brown',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-full p-2 text-brown transition-colors duration-300 hover:bg-peach md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </div>

      <div
        id="menu-movil"
        className={`border-t border-peach/70 bg-cream md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Móvil">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                [
                  'rounded-2xl px-4 py-3 text-lg font-semibold transition-colors duration-300',
                  isActive
                    ? 'bg-peach text-brown'
                    : 'text-brown-soft hover:bg-peach/50 hover:text-brown',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
