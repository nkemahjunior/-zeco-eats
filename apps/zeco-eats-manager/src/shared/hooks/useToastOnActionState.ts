import { useEffect } from 'react'
import { toast } from 'sonner'

export const useToastOnActionState = (
  state: { success?: boolean; msg?: string } | null
) => {
  useEffect(() => {
    if (state) {
      if (state.success) {
        toast.success(state.msg || 'created successfully')
      } else {
        toast.error(state.msg || 'Error. Try again later')
      }
    }
  }, [state])
}
