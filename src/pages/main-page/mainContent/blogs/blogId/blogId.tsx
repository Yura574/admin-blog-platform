import blogsStyle from "@pages/main-page/mainContent/blogs/blogs.module.scss";
import {NavLink, useParams} from "react-router-dom";
import postStyle from "@pages/main-page/mainContent/posts/postId/postId.module.scss";
import notImg from '../../../../../assets/svg/noIcon.svg'
import blogStyle from './blog.module.scss'
import {Button} from "antd";
import {PostsForBlogs} from "@pages/main-page/mainContent/posts/postsForBlog/postsForBlogs.tsx";
import {useAppDispatch, useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {useEffect} from "react";
import {getBlogById} from "@redux/reducers/blog-reducer.ts";


export const BlogId = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()

    const blog = useAppSelector(state => state.blogs.blog)
    useEffect(() => {
        id && dispatch(getBlogById(id))
    }, [id, dispatch])
    return (
        <div className={blogsStyle.layout}>
            <div className={blogsStyle.title}>Blogs</div>
            <NavLink to={'/blogs'} className={postStyle.backToPosts}>
                <div className={postStyle.arrowWrapper}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.99992 12.6667L6.93992 11.7267L3.88659 8.66671H14.6666V7.33337H3.88659L6.94659 4.27337L5.99992 3.33337L1.33325 8.00004L5.99992 12.6667Z"
                            fill="#1A1718"/>
                    </svg>
                </div>
                Back to blogs
            </NavLink>
            <div className={blogStyle.mainImgWrapper}>
                <img src={notImg} alt={'img'}/>
            </div>
            <div className={blogStyle.blogDescription}>
                <div><img src={notImg} alt={'img'}/></div>
                <div>
                    <div className={blogStyle.name}>{blog?.name}</div>
                    <div className={blogStyle.createdAt}>Blog creation date: {blog?.createdAt}</div>
                    <div className={blogStyle.websiteUrl}>Website: {blog?.websiteUrl}</div>
                    <div className={blogStyle.description}>{blog?.description}
                        <div className={blogStyle.buttonWrapper}>
                            <Button>
                                Show more
                                <svg width="10" height="6" viewBox="0 0 10 6"
                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#797476"/>
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <PostsForBlogs blogId={id}/>
        </div>
    )
}
