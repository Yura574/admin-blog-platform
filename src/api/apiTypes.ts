

export type GetBlogsParamsType = {
    pageSize?: number,
    pageNumber?: number,
    sortBy?: string
    sortDirection?: 'asc' | 'desc'
    searchNameTerm?: string
}

export type GetPostsParamsType = {
    pageNumber: number
    pageSize: number
    sortBy: string
    sortDirection: 'asc' | 'desc'
}
