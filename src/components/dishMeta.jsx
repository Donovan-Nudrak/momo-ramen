import { Flame } from 'lucide-react'

export function SpiceLevel({ level }) {
  const label =
    level === 0 ? 'Sin picante' : `Picante nivel ${level} de 3`

  return (
    <span className="inline-flex items-center gap-0.5" aria-label={label} title={label}>
      {[1, 2, 3].map((step) => (
        <Flame
          key={step}
          size={15}
          strokeWidth={2.2}
          className={
            step <= level
              ? 'dish-card-spice text-coral fill-coral'
              : 'text-peach-deep/45'
          }
        />
      ))}
    </span>
  )
}
