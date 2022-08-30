import { useState, useEffect } from 'react'

const useDebouce = (value: string, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value) // run one time

  useEffect(() => {
    const idTimer = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => {
      clearTimeout(idTimer)
    }
  }, [delay, value])

  return debounceValue
}

export default useDebouce
