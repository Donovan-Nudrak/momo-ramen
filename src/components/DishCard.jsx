import { useState } from 'react'
import DishModal from './DishModal.jsx'
import { categoryLabels, categoryStyles } from '../data/dishes.js'
import { SpiceLevel } from './dishMeta.jsx'

export default function DishCard({ dish }) {
  const [open, setOpen] = useState(false)

  function openDish() {
    setOpen(true)
  }

  function onKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openDish()
    }
  }

  return (
    <>
      <article
        className="dish-card h-full"
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={openDish}
        onKeyDown={onKeyDown}
      >
        <div className="dish-card-face">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={dish.image}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <span
              className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-card ${categoryStyles[dish.category]}`}
            >
              {categoryLabels[dish.category]}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display text-xl font-bold">{dish.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-brown-soft">
              {dish.description}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-peach/70 pt-4">
              <p className="font-display text-lg font-bold text-coral-deep">
                ${dish.price} <span className="text-sm font-semibold text-brown-muted">MXN</span>
              </p>
              <SpiceLevel level={dish.spice} />
            </div>
          </div>
        </div>
      </article>

      {open ? <DishModal dish={dish} onClose={() => setOpen(false)} /> : null}
    </>
  )
}
