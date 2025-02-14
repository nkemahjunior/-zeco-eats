'use client'
import SearchAddress from './SearchAdrress'

export default function SignupFieldSearchAddres() {
  const fetchLocations = async (query: string) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
      )
      const results = await response.json()
      return results
    } catch (error) {
      console.error('Error fetching locations:', error)
    }
  }
  return (
    <div className="w-full">
      <SearchAddress
        searchAddress={(address) => fetchLocations(address)}
        id="searchAddress"
      />
    </div>
  )
}
