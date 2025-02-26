import { useLocationStore } from '@/stores/globalStore'
import { useDebounce } from '@zeco-eats-lib/utils-client'
import { useState } from 'react'

export const fetchLocations = async (query: string) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
    )
    const results = await response.json()
    return results
  } catch (error) {
    console.error('Error fetching locations:', error)
    return []
  }
}

export const useSearchLocation = (closeModal: () => void) => {
  const [addresses, setAddresses] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')

  const { setLocation, userLocation } = useLocationStore()

  const handleInputChange = useDebounce(async (val) => {
    setLoading(true)
    const data = await fetchLocations(val)
    setAddresses(data)
    setLoading(false)
  }, 1000)

  const handleSelect = (el: any) => {
    const location = {
      name:
        el.address?.city ||
        el.address?.town ||
        el.address?.village ||
        el.name ||
        'Unknown',
      fullName: el.display_name,
      lat: parseFloat(el.lat),
      lon: parseFloat(el.lon),
    }
    setValue(location.name)
    setLocation(location)
    closeModal()
  }

  return {
    addresses,
    loading,
    value,
    userLocation,
    setValue,
    setLocation,
    handleInputChange,
    handleSelect,
  }
}
