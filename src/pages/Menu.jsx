import { useMemo, useState } from 'react'
import DishCard from '../components/DishCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { NoodleDivider } from '../components/illustrations/RamenBowl.jsx'
import { categories, dishes } from '../data/dishes.js'

export default function Menu() {
  const [filter, setFilter] = useState('todos')

  const visible = useMemo(() => {
    if (filter === 'todos') return dishes
    return dishes.filter((dish) => dish.category === filter)
  }, [filter])

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <Reveal as="p" className="text-sm font-semibold uppercase tracking-wide text-coral-deep">
        Carta
      </Reveal>
      <Reveal as="h1" delay={80} className="mt-1 font-display text-4xl font-extrabold">
        El menú de Momo
      </Reveal>
      <Reveal as="p" delay={160} className="mt-4 max-w-2xl text-lg leading-relaxed text-brown-soft">
        Diez tazones pensados para distintos antojos. El caldo cambia, el cuidado no.
        Si dudas, pide el Shoyu; si hace frío, el Neko Miso.
      </Reveal>
      <Reveal delay={220}>
        <NoodleDivider className="mt-6 w-28 text-coral/60" />
      </Reveal>

      <Reveal
        delay={260}
        className="mt-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrar platos"
      >
        {categories.map((category) => {
          const active = filter === category.id
          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(category.id)}
              className={[
                'cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
                active
                  ? 'bg-coral text-cream shadow-soft'
                  : 'bg-white text-brown-soft ring-1 ring-peach hover:bg-peach',
              ].join(' ')}
            >
              {category.label}
            </button>
          )
        })}
      </Reveal>

      <Reveal as="p" delay={300} className="mt-5 text-sm text-brown-muted" aria-live="polite">
        {visible.length} {visible.length === 1 ? 'plato' : 'platos'}
      </Reveal>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((dish, index) => (
          <Reveal key={`${filter}-${dish.id}`} bounce delay={(index % 6) * 80} className="h-full">
            <DishCard dish={dish} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
