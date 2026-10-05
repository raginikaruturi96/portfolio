export function WeScholarAchievementIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="36"
      height="36"
      aria-label="Google WE Scholar"
    >
      <defs>
        <linearGradient id="we-achieve-shield" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="we-achieve-gold" x1="16" y1="12" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="we-achieve-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#6366f1" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Shield Base */}
      <path
        d="M24 4L38 10V22C38 31.5 32 39.5 24 43C16 39.5 10 31.5 10 22V10L24 4Z"
        fill="url(#we-achieve-shield)"
        filter="url(#we-achieve-glow)"
      />
      <path
        d="M24 6.5L36 11.5V22C36 30.2 30.8 37.3 24 40.5C17.2 37.3 12 30.2 12 22V11.5L24 6.5Z"
        stroke="rgba(255, 255, 255, 0.4)"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Graduation Cap in center of shield */}
      <path
        d="M24 14L34 19L24 24L14 19L24 14Z"
        fill="#ffffff"
      />
      <path
        d="M18 21.5V25.5C18 27.5 20.7 29 24 29C27.3 29 30 27.5 30 25.5V21.5"
        fill="#ffffff"
        opacity="0.85"
      />
      <path
        d="M24 19C20 19.5 15 21 14.5 24V29"
        stroke="url(#we-achieve-gold)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="14.5" cy="29.5" r="1.5" fill="url(#we-achieve-gold)" />

      {/* Star below cap */}
      <path
        d="M24 31L25.2 33.5L28 34L26 35.8L26.5 38.5L24 37.2L21.5 38.5L22 35.8L20 34L22.8 33.5L24 31Z"
        fill="url(#we-achieve-gold)"
      />
    </svg>
  )
}

export function CmiShortlistIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="36"
      height="36"
      aria-label="CMI Entrance Shortlist"
    >
      <defs>
        <linearGradient id="trophy-gold" x1="10" y1="6" x2="38" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="trophy-stem" x1="20" y1="28" x2="28" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="trophy-base" x1="14" y1="36" x2="34" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <filter id="trophy-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#f59e0b" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Trophy Handles */}
      <path
        d="M14 13H10C7.8 13 6 14.8 6 17C6 21 9.5 24.5 14 25"
        stroke="url(#trophy-gold)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M34 13H38C40.2 13 42 14.8 42 17C42 21 38.5 24.5 34 25"
        stroke="url(#trophy-gold)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Trophy Cup Body */}
      <path
        d="M13 8H35V19C35 25.5 30 30 24 30C18 30 13 25.5 13 19V8Z"
        fill="url(#trophy-gold)"
        filter="url(#trophy-glow)"
      />
      <path
        d="M14 9.5H34V18.5C34 24.2 29.5 28.5 24 28.5C18.5 28.5 14 24.2 14 18.5V9.5Z"
        stroke="rgba(255, 255, 255, 0.45)"
        strokeWidth="1"
        fill="none"
      />

      {/* Stem */}
      <path
        d="M21 30H27V36H21V30Z"
        fill="url(#trophy-stem)"
      />

      {/* Pedestal Base */}
      <path
        d="M15 37H33L35 43H13L15 37Z"
        fill="url(#trophy-base)"
      />
      <rect x="13" y="42" width="22" height="2" rx="1" fill="url(#trophy-gold)" />

      {/* Math Star / Symbol inside trophy */}
      <path
        d="M24 13L25.3 16.2L28.5 16.7L26.2 19L26.8 22.2L24 20.6L21.2 22.2L21.8 19L19.5 16.7L22.7 16.2L24 13Z"
        fill="#ffffff"
      />
    </svg>
  )
}
