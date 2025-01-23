import { useEffect } from 'react'

export function useDetectClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: () => void,
  active: boolean
) {
  useEffect(() => {
    if (!active) return

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback, active])
}
