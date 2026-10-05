export function WeScholarIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="42"
      height="42"
      aria-label="WE Scholar Icon"
    >
      <defs>
        <linearGradient id="cap-top" x1="4" y1="8" x2="44" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="cap-base" x1="12" y1="22" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <linearGradient id="tassel-gold" x1="6" y1="18" x2="14" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <filter id="cap-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#6366f1" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Skullcap Base under Mortarboard */}
      <path
        d="M13 22.5V30C13 34.5 17.9 37.5 24 37.5C30.1 37.5 35 34.5 35 30V22.5"
        fill="url(#cap-base)"
        opacity="0.95"
      />
      <path
        d="M13 22.5V30C13 34.5 17.9 37.5 24 37.5C30.1 37.5 35 34.5 35 30V22.5"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="1.2"
      />

      {/* Mortarboard Diamond Top */}
      <path
        d="M24 8L44 17.5L24 27L4 17.5L24 8Z"
        fill="url(#cap-top)"
        filter="url(#cap-glow)"
      />
      {/* Top Edge Specular Highlight */}
      <path
        d="M24 9.5L41.5 17.5L24 25.5L6.5 17.5L24 9.5Z"
        stroke="rgba(255, 255, 255, 0.45)"
        strokeWidth="1"
        fill="none"
      />

      {/* Center Cap Button */}
      <ellipse cx="24" cy="17.5" rx="2.5" ry="1.8" fill="#fef08a" />

      {/* Hanging Tassel Cord */}
      <path
        d="M24 17.5C18 18 10 20 9.5 24.5V33"
        stroke="url(#tassel-gold)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Tassel Fringe / Bobble */}
      <rect x="7.5" y="32" width="4" height="6" rx="1.5" fill="url(#tassel-gold)" />
      <path d="M7.5 38L9.5 41L11.5 38" fill="#f59e0b" />

      {/* Scholar Sparkle / Achievement Star */}
      <path
        d="M39 6C39 8.5 37.5 10 35 10C37.5 10 39 11.5 39 14C39 11.5 40.5 10 43 10C40.5 10 39 8.5 39 6Z"
        fill="#fef08a"
      />
    </svg>
  )
}

export function CodessCafeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="42"
      height="42"
      aria-label="Codess.cafe Mentee Icon"
    >
      <defs>
        <linearGradient id="cafe-cup" x1="10" y1="18" x2="36" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="cafe-code" x1="16" y1="24" x2="30" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>
        <linearGradient id="cafe-sparkle" x1="0" y1="0" x2="48" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
        <filter id="cafe-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#f472b6" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Sparkles / Stars */}
      <path
        d="M22 6C22 9.5 19.5 12 16 12C19.5 12 22 14.5 22 18C22 14.5 24.5 12 28 12C24.5 12 22 9.5 22 6Z"
        fill="url(#cafe-sparkle)"
        filter="url(#cafe-glow)"
      />
      <path
        d="M36 8C36 10 34.5 11.5 32.5 11.5C34.5 11.5 36 13 36 15C36 13 37.5 11.5 39.5 11.5C37.5 11.5 36 10 36 8Z"
        fill="#fef08a"
      />
      <circle cx="11" cy="14" r="1.5" fill="#fef08a" />

      {/* Coffee Cup Body */}
      <path
        d="M11 20H35V32C35 37.5 30.5 42 25 42H21C15.5 42 11 37.5 11 32V20Z"
        fill="url(#cafe-cup)"
      />

      {/* Cup Handle */}
      <path
        d="M34 23H37.5C40 23 42 25 42 27.5C42 30 40 32 37.5 32H34"
        stroke="#f472b6"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Code Bracket on Cup </> */}
      <path
        d="M19 28L16 31L19 34M27 28L30 31L27 34M24.5 27L21.5 35"
        stroke="url(#cafe-code)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Saucer / Plate */}
      <path
        d="M8 43C12 45 34 45 38 43"
        stroke="#fbcfe8"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  )
}

export function GdgDsaIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="42"
      height="42"
      aria-label="GDG DSA Co-Lead Icon"
    >
      <defs>
        <linearGradient id="rocket-body" x1="16" y1="8" x2="38" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="rocket-tip" x1="28" y1="4" x2="42" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="rocket-fin" x1="10" y1="20" x2="30" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="rocket-flame" x1="10" y1="34" x2="22" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="60%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
        <filter id="flame-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#f97316" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Thruster Flame */}
      <path
        d="M17 31L9 39C8 40 10 42 12 41L19 36L17 31Z"
        fill="url(#rocket-flame)"
        filter="url(#flame-glow)"
      />
      <path
        d="M16 33L12 37L17 35.5L16 33Z"
        fill="#fef08a"
      />

      {/* Side Fins */}
      <path
        d="M14 26L8 31C7.5 31.5 8 33 9 33L17 32L14 26Z"
        fill="url(#rocket-fin)"
      />
      <path
        d="M22 14L27 8C27.5 7.5 29 8 29 9L28 17L22 14Z"
        fill="url(#rocket-fin)"
      />

      {/* Rocket Main Hull */}
      <path
        d="M38 10C34 6 25 10 18 17C14 21 13 27 16 32C21 35 27 34 31 30C38 23 42 14 38 10Z"
        fill="url(#rocket-body)"
      />

      {/* Rocket Cone Tip */}
      <path
        d="M38 10C36.5 8.5 32 10 27 13.5L34.5 21C38 16 39.5 11.5 38 10Z"
        fill="url(#rocket-tip)"
      />

      {/* Porthole Window */}
      <circle cx="26" cy="22" r="4.5" fill="#38bdf8" />
      <circle cx="26" cy="22" r="3" fill="#0284c7" />
      <circle cx="25" cy="21" r="1" fill="#ffffff" />

      {/* Speed / Sparkle Lines */}
      <path
        d="M6 14L10 16M4 22L8 23M32 40L34 44"
        stroke="#93c5fd"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  )
}

export function IsteCoordIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="42"
      height="42"
      aria-label="ISTE Coordinator Icon"
    >
      <defs>
        <linearGradient id="ribbon-left" x1="12" y1="26" x2="20" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="ribbon-right" x1="28" y1="26" x2="36" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
        <linearGradient id="medal-gold" x1="12" y1="6" x2="36" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="medal-inner" x1="16" y1="10" x2="32" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <filter id="medal-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#f59e0b" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Hanging Ribbons */}
      <path
        d="M17 24L13 42L20 37L24 42L22 24H17Z"
        fill="url(#ribbon-left)"
      />
      <path
        d="M26 24L24 42L28 37L35 42L31 24H26Z"
        fill="url(#ribbon-right)"
      />

      {/* Medal Outer Circle */}
      <circle
        cx="24"
        cy="18"
        r="14"
        fill="url(#medal-gold)"
        filter="url(#medal-glow)"
      />
      
      {/* Medal Border Inset */}
      <circle
        cx="24"
        cy="18"
        r="11.5"
        stroke="#fef3c7"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        fill="url(#medal-inner)"
      />

      {/* Star in Medal Center */}
      <path
        d="M24 11L26.2 15.5L31 16.2L27.5 19.6L28.3 24.5L24 22.2L19.7 24.5L20.5 19.6L17 16.2L21.8 15.5L24 11Z"
        fill="#ffffff"
      />
    </svg>
  )
}
