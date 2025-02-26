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
