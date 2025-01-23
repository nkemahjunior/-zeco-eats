import { useRef } from 'react'

export const useDebounce = (
  debounceFn: (value: string) => void | Promise<void>,
  wait: number
) => {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  return (inputVal: string) => {
    clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      debounceFn(inputVal)
    }, wait)
  }
}
