import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { categoryLabels, categoryStyles } from '../data/dishes.js'
import { SpiceLevel } from './dishMeta.jsx'

export default function DishModal({ dish, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function onKey(event) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return createPortal(
    <div
      className="dish-modal-backdrop fixed inset-0 z-[80] flex items-center justify-center bg-brown/45 p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="plato-titulo"
        className="dish-modal-panel relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-[1.75rem] bg-cream shadow-soft"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-cream/90 text-brown shadow-card ring-1 ring-peach transition-colors duration-300 hover:bg-peach"
          aria-label="Cerrar vista del plato"
        >
          <X size={20} strokeWidth={2.4} />
        </button>

        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={dish.image}
            alt={`Tazón de ${dish.name}`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[dish.category]}`}
          >
            {categoryLabels[dish.category]}
          </span>
          <h2 id="plato-titulo" className="mt-3 font-display text-2xl font-extrabold">
            {dish.name}
          </h2>
          <p className="mt-3 leading-relaxed text-brown-soft">{dish.description}</p>
          <div className="mt-5 flex items-center justify-between border-t border-peach/70 pt-4">
            <p className="font-display text-xl font-bold text-coral-deep">
              ${dish.price} <span className="text-sm font-semibold text-brown-muted">MXN</span>
            </p>
            <SpiceLevel level={dish.spice} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
