import { getQueryClient } from '../tanstackQuery/get-query-client'

export const invalidateQueries = async (...queryKeyGroups: string[][]) => {
  const queryClient = getQueryClient()

  for (const queryKeys of queryKeyGroups) {
    await queryClient.invalidateQueries({
      queryKey: queryKeys,
      exact: true,
      refetchType: 'all',
    })
  }
}
