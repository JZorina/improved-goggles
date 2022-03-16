
export interface ApiResponse<T> {
    status: number,
    data: T,
    errors?: string
}