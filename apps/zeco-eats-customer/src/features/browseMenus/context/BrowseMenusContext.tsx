'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { Tables } from '@zeco-eats-lib/utils-client'
import { getRestaurantsQueryOptions } from '../api/options/options'
import { BrowseRestaurantsFilter } from '../types/browseMenuTypes'
import { FoodCategoryName } from '@/shared/types/sharedTypes'
import { useLocationStore } from '@/stores/globalStore'

// Context Type
interface BrowseMenusContextType {
  restaurants: Tables<'restaurant'>[]
  totalCount: number
  page: number
  isLoading: boolean
  isFetching: boolean
  setNextPage: () => void
  resetPage: () => void
  deliveryFee: number | null
  under30Min: boolean
  sortHighestRated: boolean
  rating: number | null
  applyFilter: <K extends keyof BrowseRestaurantsFilter>(
    key: K,
    value: BrowseRestaurantsFilter[K]
  ) => void
  resetFilter: (key: keyof BrowseRestaurantsFilter) => void
  resetAllFilters: () => void
}

// Context Creation
const BrowseMenusContext = createContext<BrowseMenusContextType | undefined>(
  undefined
)

// Provider Component
export const BrowseMenusProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const userLocation = useLocationStore((state) => state.userLocation)

  // pagination states
  const [page, setPage] = useState(1)
  const [restaurants, setRestaurants] = useState<Tables<'restaurant'>[]>([])
  const [totalCount, setTotalCount] = useState(0)

  // Filter States
  const [filters, setFilters] = useState({
    deliveryFee: null as number | null,
    under30Min: false,
    sortHighestRated: false,
    rating: null as number | null,
    cuisine: null as FoodCategoryName | null,
  })

  // Pagination Functions
  const setNextPage = () => setPage((prev) => prev + 1)
  const resetPage = () => setPage(1)

  // Memoized URL Params
  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  )

  // Apply or Reset a Single Filter
  const applyFilter = <K extends keyof BrowseRestaurantsFilter>(
    key: K,
    value: BrowseRestaurantsFilter[K]
  ) => {
    if (value) {
      setFilters((prev) => ({ ...prev, [key]: value }))
      resetPage()
      params.set(key, value.toString())
      router.push(`${pathname}?${params.toString()}`)
    }
  }

  const resetFilter = (key: keyof BrowseRestaurantsFilter) => {
    setFilters((prev) => ({ ...prev, [key]: null }))
    resetPage()
    params.delete(key)
    router.push(`${pathname}?${params.toString()}`)
  }

  const resetAllFilters = () => {
    setFilters({
      deliveryFee: null,
      under30Min: false,
      sortHighestRated: false,
      rating: null,
      cuisine: null,
    })
    setPage(1)
    router.push(pathname) // Clear all params
  }

  // onmount...
  useEffect(() => {
    const sp = searchParams
    setFilters({
      deliveryFee: sp.get('deliveryFee') ? Number(sp.get('deliveryFee')) : null,
      under30Min: sp.get('under30Min') === 'true',
      sortHighestRated: sp.get('sortHighestRated') === 'true',
      rating: sp.get('rating') ? Number(sp.get('rating')) : null,
      cuisine: sp.get('cuisine') as FoodCategoryName,
    })
  }, [searchParams])

  // Fetch Restaurants
  const { data, isLoading, isFetching } = useQuery(
    getRestaurantsQueryOptions(page, userLocation?.fullName || 'buea', filters)
  )

  // Accumulate Data
  useEffect(() => {
    const length = data?.data.length
    if (!isLoading && (length === 0 || !data?.data))
      router.replace('/no-restaurant')

    if (data?.count) {
      setRestaurants((prev) =>
        page === 1 ? data.data : [...prev, ...data.data]
      )
      setTotalCount(data.count)
    }
  }, [data, isLoading, page, router])

  return (
    <BrowseMenusContext.Provider
      value={{
        restaurants,
        totalCount,
        page,
        isLoading,
        isFetching,
        setNextPage,
        resetPage,
        ...filters,
        applyFilter,
        resetFilter,
        resetAllFilters,
      }}
    >
      {children}
    </BrowseMenusContext.Provider>
  )
}

export const useBrowseMenus = () => {
  const context = useContext(BrowseMenusContext)
  if (context === undefined) {
    throw new Error('useBrowseMenus must be used within a BrowseMenusProvider')
  }
  return context
}
