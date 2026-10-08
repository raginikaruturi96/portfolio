import { useEffect, useRef } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const cursorRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!cursorRef.current) return
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
      cursorRef.current.classList.add('visible')
    }

    const onLeave = () => cursorRef.current?.classList.remove('visible')
    const onOver = (event: MouseEvent) => {
      const target = event.target
      if (target instanceof Element && target.closest('a, button')) {
        cursorRef.current?.classList.add('hovering')
      }
    }
    const onOut = (event: MouseEvent) => {
      const target = event.target
      const relatedTarget = event.relatedTarget
      if (
        target instanceof Element &&
        target.closest('a, button') &&
        (!(relatedTarget instanceof Element) || !relatedTarget.closest('a, button'))
      ) {
        cursorRef.current?.classList.remove('hovering')
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <svg
      ref={cursorRef}
      className="cursor-pointer"
      viewBox="0 0 140 170"
      aria-hidden="true"
    >
      <path d="M6 6 136 91 82 96 31 163Z" />
    </svg>
  )
}
