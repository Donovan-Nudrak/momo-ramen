import { Link } from 'react-router-dom'
import { Clock, MapPin, Mail, Phone } from 'lucide-react'
import { site } from '../data/site.js'
import { CatFace } from './illustrations/PeachCat.jsx'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-peach/80 bg-cream-deep/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-2">
            <CatFace className="h-10 w-10" />
            <span className="font-display text-xl font-extrabold">Momo Ramen</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-brown-soft">
            Ramen artesanal en la Roma Norte. Caldos lentos, fideos al momento y un rincón suave para quedarte.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-coral-deep">
            Visítanos
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brown-soft">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral" aria-hidden="true" />
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-brown"
              >
                {site.address}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-coral" aria-hidden="true" />
              <span>Mar–Dom desde las 13:00. Lunes cerrado.</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-coral-deep">
            Contacto
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brown-soft">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-coral" aria-hidden="true" />
              <a href={site.phoneHref} className="transition-colors duration-300 hover:text-brown">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-coral" aria-hidden="true" />
              <a
                href={`mailto:${site.email}`}
                className="transition-colors duration-300 hover:text-brown"
              >
                {site.email}
              </a>
            </li>
            <li className="pl-6">{site.instagram}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-peach/70">
        <p className="mx-auto max-w-6xl px-5 py-4 text-center text-xs text-brown-muted md:px-8">
          © {new Date().getFullYear()} Momo Ramen. Cocinado con calma en la Ciudad de México.
        </p>
      </div>
    </footer>
  )
}
