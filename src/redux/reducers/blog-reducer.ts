import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setIsPending} from "@redux/reducers/common-reducer.ts";
import {blogsApi} from "../../api/api.ts";
import {AddBlogDataType, GetBlogsParamsType} from "../../api/apiTypes.ts";
import {PostType} from "@redux/reducers/post-reducer.ts";
import {push} from "redux-first-history";


export const getBlogsThunk = createAsyncThunk('blogs/getBlogs', async (_, {dispatch}) => {
    dispatch(setIsPending(true))
    const params: GetBlogsParamsType = {
        pageSize: 10,
        pageNumber: 1,
        sortBy: 'createdAt',
        sortDirection: 'desc',
    }
    const blogs = await blogsApi.getAllBlogs(params)
    dispatch(setBlogs(blogs.data.items))
})
export const getBlogById = createAsyncThunk('blogs/getBlogById', async (id: string, {dispatch}) => {
    dispatch(setIsPending(true))
    const blog = await blogsApi.getBlogById(id)
    dispatch(setBlogById(blog.data))
})
export const getPostsForBlog = createAsyncThunk('blogs/getBlogsForPosts', async (id: string, {dispatch}) => {
    dispatch(setIsPending(true))
    console.log('test')
    const posts = await blogsApi.getPostsForBlog(id)
    console.log(posts)
    dispatch(setPostsForBlogs(posts.data.items))
})
export const addBlog = createAsyncThunk('blogs/addBlog', async (data: AddBlogDataType, {dispatch}) => {
    console.log('aff')
    const blog = await blogsApi.addBlog(data)
    console.log(blog.data)
    dispatch(addNewBlog(blog))
    dispatch(push('/blogs'))
})

export type BlogType = {
    createdAt: string
    description: string
    id: string
    isMembership: boolean
    name: string
    websiteUrl: string
}
type InitialStateType = {
    blogs: BlogType[],
    blog: BlogType | null,
    posts: PostType[]
}


const initialState: InitialStateType = {
    blogs: [],
    blog: null,
    posts: []
}

const blogSlice = createSlice({
    name: 'blog-reducer',
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            console.log(action.payload)
            state.blogs = action.payload
        },
        setBlogById: (state, action) => {
            state.blog = action.payload
        },
        setPostsForBlogs: (state, action) => {
            state.posts = action.payload
        },
        addNewBlog: (state, action) => {
    state.blogs.unshift(action.payload)
        }
    }
})

export const {
    setBlogs,
    setBlogById,
    setPostsForBlogs,
    addNewBlog,
} = blogSlice.actions
export const blogReducer = blogSlice.reducer
