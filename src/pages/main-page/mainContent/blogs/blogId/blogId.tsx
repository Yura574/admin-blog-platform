import blogsStyle from "@pages/main-page/mainContent/blogs/blogs.module.scss";
import { useParams} from "react-router-dom";
import notImg from '../../../../../assets/svg/noIcon.svg'
import blogStyle from './blog.module.scss'
import {Button} from "antd";
import {PostsForBlogs} from "@pages/main-page/mainContent/posts/postsForBlog/postsForBlogs.tsx";
import {useAppDispatch, useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {useEffect} from "react";
import {getBlogById} from "@redux/reducers/blog-reducer.ts";
import {BackTo} from "@pages/main-page/mainContent/components/backTo.tsx";


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
            <BackTo direction={'Blogs'}/>
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
