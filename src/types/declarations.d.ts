declare type StatusResponse<TData = undefined> = {
  statusCode: number
  message: string
  data: TData
}

declare type PaginatedResponse<TItem> = {
  data: Array<TItem>
  message: string
  meta: unknown
}

declare type ErrorResponse<T = unknown> = {
  data: {
    message: string
    errors: Record<keyof T, Array<string>>
  }
}
