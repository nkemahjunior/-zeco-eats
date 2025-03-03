'use client'

import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { toast } from 'sonner'
import { getUserFavouriteStoresOption } from '../../api/queries/options/options'
import {
  bookmarkStore,
  unBookmarkStore,
} from '../../api/mutations/actions/actions'
import { createSupabaseClient, Shimmer } from '@zeco-eats-lib/utils-client'
import { useRouter } from 'next/navigation'
import { useGenerateSigninLink } from '@/shared/hooks/useGenerateSigninLink'

interface fnProps {
  storeId: number
}

export default function BookmarkStore({ storeId }: fnProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const { data, isLoading } = useQuery(getUserFavouriteStoresOption(storeId))
  const queryClient = getQueryClient()
  const supabase = createSupabaseClient()
  const router = useRouter()
  const signinLink = useGenerateSigninLink()

  useEffect(() => {
    if (!isLoading && data) {
      setIsBookmarked(true)
    }
  }, [data, isLoading])

  const handleBookmark = async () => {
    const initialBookmark = isBookmarked
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return router.push(signinLink)

      if (isBookmarked) {
        setIsBookmarked(false)
        const removedBookmark = await unBookmarkStore(storeId)
        if (removedBookmark) {
          queryClient.setQueryData(
            getUserFavouriteStoresOption(storeId).queryKey,
            () => removedBookmark
          )
        }
      } else {
        setIsBookmarked(true)
        const newBookmark = await bookmarkStore(storeId)
        if (newBookmark) {
          queryClient.setQueryData(
            getUserFavouriteStoresOption(storeId).queryKey,
            () => newBookmark
          )
        }
      }
    } catch (error) {
      setIsBookmarked(initialBookmark)
      //toast.error('Something went wrong!')
    }
  }

  return (
    <button
      onClick={handleBookmark}
      className={` ${isLoading ? 'pointer-events-none cursor-not-allowed' : 'cursor-pointer'} rounded-full bg-white p-2 shadow-md transition-all`}
    >
      {isLoading ? (
        <Shimmer className="h-6 w-6 rounded-full" />
      ) : isBookmarked ? (
        <IoMdHeart color="red" size={24} />
      ) : (
        <IoMdHeartEmpty size={24} />
      )}
    </button>
  )
}
