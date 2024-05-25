import axios from "axios";
import {GetBlogsParamsType, GetPostsParamsType} from "./apiTypes.ts";


const baseURL = ' https://03125416ee7ab8067f79b3f0a9539c75.serveo.net'

const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const blogsApi = {
    getAllBlogs: (params: GetBlogsParamsType) => {
        const {pageSize, pageNumber, sortBy, sortDirection,} = params
        return instance.get(`/blogs?pageSize=${pageSize}&pageNumber=${pageNumber}&sortBy=${sortBy}&sortDirection=${sortDirection}`)
    },
    getBlogById: (id: string) => {
        return instance.get(`/blogs/${id}`)
    },
    getPostsForBlog: (id: string) => {
        return instance.get(`/blogs/${id}/posts`)
    }
}

export const postsApi = {
    getAllPosts: (params: GetPostsParamsType) => {
        const {pageSize, pageNumber, sortBy, sortDirection} = params
        return instance.get(`/posts?pageSize=${pageSize}&pageNumber=${pageNumber}&sortBy=${sortBy}&sortDirection=${sortDirection}`)
    },
    getPostById: (id: string) => {
        return instance.get(`/posts/${id}`)
    }
}

