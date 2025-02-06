export interface MutationResponse<T = Record<string, any>> {
  success?: boolean
  msg?: string
  data?: T
}
