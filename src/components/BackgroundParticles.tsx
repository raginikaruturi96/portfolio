import { useEffect, useRef } from 'react'
import './BackgroundParticles.css'

const PARTICLES = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: `${(i * 7.3 + 2.1) % 100}%`,
  top: `${(i * 11.7 + 5.4) % 100}%`,
  size: 4 + (i % 6) * 2,
  duration: 14 + (i % 10) * 2,
  delay: -((i * 1.3) % 20),
  parallax: 10 + (i % 5) * 8,
  drift: (i % 7) - 3,
}))

export default function BackgroundParticles() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    let targetX = 0
    let targetY = 0
    let curX = 0
    let curY = 0

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth - 0.5
      targetY = e.clientY / window.innerHeight - 0.5
    }

    const tick = () => {
      curX += (targetX - curX) * 0.08
      curY += (targetY - curY) * 0.08
      const el = ref.current
      if (el) {
        el.style.setProperty('--mx', curX.toFixed(3))
        el.style.setProperty('--my', curY.toFixed(3))
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className="bg-particles" aria-hidden="true">
      {PARTICLES.map(p => (
        <span
          key={p.id}
          className="bg-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ['--parallax' as string]: `${p.parallax}px`,
            ['--drift' as string]: `${p.drift}`,
          }}
        />
      ))}
    </div>
  )
}
