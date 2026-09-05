export default function RamenBowl({ className = 'w-full max-w-md' }) {
  return (
    <svg
      viewBox="0 0 360 380"
      className={className}
      role="img"
      aria-label="Tazón de ramen artesanal con huevo, chashu y nori"
      fill="none"
      overflow="visible"
    >
      <ellipse cx="180" cy="348" rx="110" ry="16" fill="#E8D4C4" opacity="0.7" />

      <path
        d="M58 210 C62 292 110 338 180 338 C250 338 298 292 302 210"
        fill="#E8886A"
        stroke="#D46A4C"
        strokeWidth="3"
      />
      <path
        d="M70 214 C76 278 118 322 180 322 C242 322 284 278 290 214"
        fill="#F4A888"
      />
      <ellipse
        cx="180"
        cy="196"
        rx="148"
        ry="42"
        fill="#F8D4C4"
        stroke="#D46A4C"
        strokeWidth="3"
      />
      <ellipse cx="180" cy="198" rx="132" ry="32" fill="#E8B86D" />
      <ellipse cx="180" cy="194" rx="118" ry="24" fill="#F0C57A" opacity="0.7" />

      <path
        d="M86 198 C120 170 150 210 180 188 C210 166 240 206 274 190"
        stroke="#E8D4A8"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M94 206 C128 184 158 216 188 198 C218 180 248 214 270 200"
        stroke="#F3E2B8"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M102 214 C140 196 164 224 198 208 C228 194 252 220 266 210"
        stroke="#E8D4A8"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <g transform="translate(92 168)">
        <ellipse cx="28" cy="22" rx="28" ry="16" fill="#E8A090" stroke="#C48B6A" strokeWidth="2" />
        <path d="M8 22 C18 14 38 14 48 22" stroke="#FBE6D4" strokeWidth="4" strokeLinecap="round" />
        <path d="M12 26 C22 20 36 20 44 26" stroke="#FBE6D4" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(118 182) rotate(-12)">
        <ellipse cx="28" cy="18" rx="26" ry="14" fill="#E09282" stroke="#C48B6A" strokeWidth="2" />
        <path d="M10 18 C20 12 36 12 46 18" stroke="#FBE6D4" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      <g transform="translate(196 160)">
        <ellipse cx="34" cy="28" rx="32" ry="26" fill="#FBF3DC" stroke="#C48B6A" strokeWidth="2" />
        <ellipse cx="38" cy="30" rx="18" ry="16" fill="#F0A050" />
        <ellipse cx="33" cy="26" rx="6" ry="5" fill="#F8C878" opacity="0.8" />
      </g>

      <g transform="translate(168 186)">
        <circle cx="18" cy="18" r="16" fill="#FFF8F0" stroke="#C48B6A" strokeWidth="1.8" />
        <path
          d="M18 8 C22 12 22 16 18 18 C14 20 14 24 18 28 C14 24 10 22 10 18 C10 14 14 12 18 8 Z"
          fill="#F5A0B0"
        />
      </g>

      <rect
        x="248"
        y="150"
        width="18"
        height="58"
        rx="3"
        fill="#4A6B4A"
        stroke="#3A5A3A"
        strokeWidth="1.5"
      />
      <rect x="251" y="154" width="5" height="50" rx="1" fill="#6A8B5A" opacity="0.5" />

      <circle cx="150" cy="208" r="5" fill="#7BC47B" />
      <circle cx="164" cy="214" r="4.5" fill="#8FD48A" />
      <circle cx="230" cy="206" r="5" fill="#7BC47B" />
      <circle cx="218" cy="214" r="4" fill="#8FD48A" />
      <circle cx="132" cy="200" r="4" fill="#6BB36A" />

      <g className="chopsticks">
        <path
          d="M48 86 L168 118"
          stroke="#C48B6A"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M70 72 L186 108"
          stroke="#EFB59A"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </g>

      <g className="bowl-steam" aria-hidden="true">
        <g className="steam-puff">
          <ellipse cx="162" cy="178" rx="16" ry="22" fill="#FBF6F0" opacity="0.75" />
          <ellipse cx="172" cy="162" rx="11" ry="16" fill="#D4EDE3" opacity="0.65" />
        </g>
        <g className="steam-puff">
          <ellipse cx="198" cy="172" rx="18" ry="24" fill="#ffffff" opacity="0.7" />
          <ellipse cx="206" cy="154" rx="10" ry="15" fill="#FBF6F0" opacity="0.6" />
        </g>
        <g className="steam-puff">
          <ellipse cx="146" cy="186" rx="13" ry="18" fill="#D4EDE3" opacity="0.7" />
          <ellipse cx="140" cy="170" rx="8" ry="12" fill="#FBF6F0" opacity="0.55" />
        </g>
        <g className="steam-puff">
          <ellipse cx="184" cy="166" rx="12" ry="18" fill="#FBF6F0" opacity="0.7" />
          <ellipse cx="190" cy="148" rx="8" ry="12" fill="#ffffff" opacity="0.5" />
        </g>
        <g className="steam-wisp">
          <path
            d="M158 168 C154 148 166 136 160 118"
            stroke="#FBF6F0"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
        <g className="steam-wisp">
          <path
            d="M186 160 C180 138 196 126 190 104"
            stroke="#D4EDE3"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>
        <g className="steam-wisp">
          <path
            d="M210 170 C216 150 204 136 210 116"
            stroke="#FBF6F0"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  )
}

export function NoodleDivider({ className = 'w-28 text-coral/60' }) {
  return (
    <svg viewBox="0 0 160 16" className={className} aria-hidden="true" fill="none">
      <path
        d="M4 8 C16 2 24 14 36 8 C48 2 56 14 68 8 C80 2 88 14 100 8 C112 2 120 14 132 8 C140 4 148 10 156 8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}
