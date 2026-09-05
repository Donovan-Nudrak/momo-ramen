import { useState } from 'react'

export function CatFace({ className = 'h-10 w-10' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="32" cy="38" r="20" fill="#F4C4A8" />
      <path d="M16 30 L14 12 L30 24" fill="#F4C4A8" />
      <path d="M48 30 L50 12 L34 24" fill="#F4C4A8" />
      <path d="M18 26 L16.5 17 L27 23" fill="#E8886A" />
      <path d="M46 26 L47.5 17 L37 23" fill="#E8886A" />
      <circle cx="32" cy="32" r="18" fill="#F4C4A8" stroke="#C48B6A" strokeWidth="1.6" />
      <path
        d="M23 31 Q25.5 28 28 31"
        stroke="#4A3428"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M36 31 Q38.5 28 41 31"
        stroke="#4A3428"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <ellipse cx="24" cy="35.5" rx="3.2" ry="2" fill="#F0A090" opacity="0.85" />
      <ellipse cx="40" cy="35.5" rx="3.2" ry="2" fill="#F0A090" opacity="0.85" />
      <path d="M32 35 L30.2 37.8 L33.8 37.8 Z" fill="#E8886A" />
      <path
        d="M30 38.4 Q32 40.6 34 38.4"
        stroke="#4A3428"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function PeachCat({ className = 'w-56', waving = false }) {
  const [squashing, setSquashing] = useState(false)

  function playBounce() {
    setSquashing(false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setSquashing(true))
    })
  }

  return (
    <button
      type="button"
      className={['peach-cat-btn', className].filter(Boolean).join(' ')}
      onClick={playBounce}
      onAnimationEnd={(event) => {
        if (event.animationName === 'cat-squash') setSquashing(false)
      }}
      aria-label="Momo, el gato melocotón. Haz clic para verlo rebotar."
    >
      <svg viewBox="0 0 240 280" className="h-auto w-full" fill="none" overflow="visible">
        <ellipse cx="122" cy="262" rx="70" ry="10" fill="#E8D4C4" opacity="0.55" />

        <g
          className={squashing ? 'peach-cat-body is-squashing' : 'peach-cat-body'}
        >
          <path
            d="M48 188 C18 168 12 124 42 112 C58 104 70 126 60 148 C52 168 56 180 72 188"
            fill="#EFB59A"
            stroke="#C48B6A"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          <ellipse
            cx="128"
            cy="204"
            rx="78"
            ry="60"
            fill="#F4C4A8"
            stroke="#C48B6A"
            strokeWidth="3"
          />
          <ellipse cx="130" cy="216" rx="46" ry="34" fill="#FBE6D4" />

          <ellipse
            cx="78"
            cy="232"
            rx="22"
            ry="14"
            fill="#F4C4A8"
            stroke="#C48B6A"
            strokeWidth="2.5"
          />
          <ellipse
            cx="178"
            cy="232"
            rx="22"
            ry="14"
            fill="#F4C4A8"
            stroke="#C48B6A"
            strokeWidth="2.5"
          />
          <ellipse cx="78" cy="234" rx="10" ry="6" fill="#FBE6D4" />
          <ellipse cx="178" cy="234" rx="10" ry="6" fill="#FBE6D4" />

          <path
            d="M74 92 L68 38 L118 78"
            fill="#F4C4A8"
            stroke="#C48B6A"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M80 84 L76 50 L106 76" fill="#E8886A" />
          <path
            d="M182 92 L188 38 L138 78"
            fill="#F4C4A8"
            stroke="#C48B6A"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M176 84 L180 50 L150 76" fill="#E8886A" />

          <circle
            cx="128"
            cy="118"
            r="64"
            fill="#F4C4A8"
            stroke="#C48B6A"
            strokeWidth="3"
          />

          <path
            d="M90 176 C108 188 148 188 166 176"
            stroke="#E8886A"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="128" cy="184" r="6" fill="#E8886A" />
          <circle cx="128" cy="184" r="2.4" fill="#FBE6D4" />

          <path
            d="M100 118 Q108 108 116 118"
            stroke="#4A3428"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M140 118 Q148 108 156 118"
            stroke="#4A3428"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          <ellipse cx="98" cy="128" rx="10" ry="6" fill="#F0A090" opacity="0.8" />
          <ellipse cx="158" cy="128" rx="10" ry="6" fill="#F0A090" opacity="0.8" />

          <path d="M128 126 L122 134 L134 134 Z" fill="#E8886A" />
          <path
            d="M122 136 Q128 144 134 136"
            stroke="#4A3428"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          <path d="M86 130 H62" stroke="#C48B6A" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M88 136 H66" stroke="#C48B6A" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M170 130 H194" stroke="#C48B6A" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M168 136 H190" stroke="#C48B6A" strokeWidth="1.6" strokeLinecap="round" />

          {waving ? (
            <g>
              <ellipse
                cx="198"
                cy="168"
                rx="16"
                ry="12"
                fill="#F4C4A8"
                stroke="#C48B6A"
                strokeWidth="2.5"
                transform="rotate(-28 198 168)"
              />
              <ellipse
                cx="204"
                cy="164"
                rx="6"
                ry="4"
                fill="#FBE6D4"
                transform="rotate(-28 204 164)"
              />
            </g>
          ) : null}
        </g>
      </svg>
    </button>
  )
}
