import { Clock, MapPin, Phone } from 'lucide-react'
import Button from '../components/Button.jsx'
import DishCard from '../components/DishCard.jsx'
import Reveal from '../components/Reveal.jsx'
import PeachCat from '../components/illustrations/PeachCat.jsx'
import RamenBowl, { NoodleDivider } from '../components/illustrations/RamenBowl.jsx'
import { dishes } from '../data/dishes.js'
import { site } from '../data/site.js'

const favorites = dishes.filter((dish) => dish.featured)

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <img
          src="/images/Momo-banner.png"
          alt="Fachada de Momo Ramen, con faroles y el gato de la suerte en la entrada"
          className="h-48 w-full object-cover object-[center_55%] sm:h-56 md:h-72 lg:h-80"
        />
      </div>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-peach/50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-mint/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-12 pt-5 md:px-8 md:pb-20 md:pt-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="inline-flex rounded-full bg-mint px-4 py-1.5 text-sm font-semibold text-brown">
                Roma Norte · ramen artesanal
              </p>
            </Reveal>
            <Reveal as="h1" delay={90} className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-[3.35rem]">
              Un abrazo servido en un tazón
            </Reveal>
            <Reveal as="p" delay={180} className="mt-5 max-w-lg text-lg leading-relaxed text-brown-soft">
              Caldos que reposan horas, fideos estirados al momento y sabores que consuelan.
              En Momo cocinamos ramen para quedarte un rato, no para salir corriendo.
            </Reveal>
            <Reveal delay={270} className="mt-8 flex flex-wrap gap-3">
              <Button to="/menu" size="lg">
                Ver menú
              </Button>
              <Button to="/reservar" variant="secondary" size="lg">
                Reservar mesa
              </Button>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-1 bottom-4 z-10 w-24 sm:bottom-8 sm:w-36 md:-left-8 md:w-44">
              <PeachCat className="w-full" />
            </div>
            <div className="ml-0 sm:ml-16">
              <RamenBowl className="w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-6 md:px-8">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center">
          <NoodleDivider />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <Reveal as="p" className="text-sm font-semibold uppercase tracking-wide text-coral-deep">
              Del tazón
            </Reveal>
            <Reveal as="h2" delay={80} className="mt-1 font-display text-3xl font-extrabold">
              Nuestros favoritos
            </Reveal>
          </div>
          <Reveal delay={140}>
            <Button to="/menu" variant="secondary">
              Ver carta completa
            </Button>
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((dish, index) => (
            <Reveal key={dish.id} bounce delay={index * 90} className="h-full">
              <DishCard dish={dish} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mint/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
          <Reveal delay={120} className="order-2 flex justify-center md:order-1">
            <div className="rounded-[2rem] bg-cream p-6 shadow-soft ring-1 ring-peach/50">
              <PeachCat className="w-52 md:w-64" />
            </div>
          </Reveal>
          <div className="order-1 md:order-2">
            <Reveal as="p" className="text-sm font-semibold uppercase tracking-wide text-coral-deep">
              La casa
            </Reveal>
            <Reveal as="h2" delay={80} className="mt-1 font-display text-3xl font-extrabold">
              Un local chiquito, una olla grande
            </Reveal>
            <Reveal as="p" delay={160} className="mt-4 leading-relaxed text-brown-soft">
              Momo nació de un viaje a Fukuoka y de un gato color durazno que se sentaba junto a la olla.
              Hoy seguimos cociendo caldo de madrugada en la Roma Norte: sin prisa, con verdura del día y
              con la mesa lista para quien llegue con hambre o con frío.
            </Reveal>
            <Reveal delay={240} className="mt-6">
              <Button to="/nosotros" variant="mint">
                Nuestra historia
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal delay={0} className="h-full">
            <InfoCard
              icon={Clock}
              title="Horario"
              body="Mar–Jue 13:00–22:00 · Vie–Sáb 13:00–23:00 · Dom 13:00–21:00. Los lunes descansamos."
            />
          </Reveal>
          <Reveal delay={90} className="h-full">
            <InfoCard
              icon={MapPin}
              title="Dirección"
              body={site.address}
              href={site.mapsUrl}
            />
          </Reveal>
          <Reveal delay={180} className="h-full">
            <InfoCard
              icon={Phone}
              title="Contacto"
              body={`${site.phone} · ${site.email}`}
              href={site.phoneHref}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}

function InfoCard({ icon: Icon, title, body, href }) {
  const content = (
    <>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-peach">
        <Icon className="h-5 w-5 text-coral-deep" aria-hidden="true" />
      </span>
      <h3 className="mt-3 font-display text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-brown-soft">{body}</p>
    </>
  )

  const classes =
    'h-full rounded-[1.75rem] bg-white/80 p-6 shadow-card ring-1 ring-peach/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft'

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        className={`block ${classes}`}
      >
        {content}
      </a>
    )
  }

  return <div className={classes}>{content}</div>
}
