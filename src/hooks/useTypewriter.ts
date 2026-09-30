import { useState, useEffect, useRef } from 'react'

export function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1800
) {
  const [display, setDisplay] = useState('')
  const wordsRef = useRef(words)

  useEffect(() => {
    let cancelled = false
    let timeoutId: ReturnType<typeof setTimeout>
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false

    const tick = () => {
      if (cancelled) return
      const word = wordsRef.current[wordIndex % wordsRef.current.length]

      if (!isDeleting) {
        charIndex++
        setDisplay(word.slice(0, charIndex))
        if (charIndex === word.length) {
          isDeleting = true
          timeoutId = setTimeout(tick, pauseDuration)
          return
        }
      } else {
        charIndex--
        setDisplay(word.slice(0, charIndex))
        if (charIndex === 0) {
          isDeleting = false
          wordIndex++
          timeoutId = setTimeout(tick, typingSpeed * 2)
          return
        }
      }
      timeoutId = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)
    }

    timeoutId = setTimeout(tick, 700)
    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [pauseDuration, typingSpeed, deletingSpeed])

  return display
}
