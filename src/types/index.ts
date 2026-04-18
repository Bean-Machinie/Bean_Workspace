export interface AppUser {
  id: string
  email: string
  createdAt: string
}

export interface ApiResult<T> {
  data: T | null
  error: string | null
}
