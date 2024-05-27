import axios from "axios";
import {AddBlogDataType, GetBlogsParamsType, GetPostsParamsType} from "./apiTypes.ts";
import { Buffer } from 'buffer'


const baseURL = 'https://dd9d3e83759f0b241d44a81a15a2babf.serveo.net'

const user = 'admin';
const password = 'qwerty';

// create a buffer
const buff = Buffer.from(user + ':' + password, 'utf-8');

// decode buffer as Base64
const base64 = buff.toString('base64');
console.log(base64)

const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'authorization': 'Basic' +' '+ 'YWRtaW46cXdlcnR5'
    },


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
    },
    addBlog: (data: AddBlogDataType) => {
        // const {websiteUrl, name, description} = data
        return instance.post('/blogs', data)
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

