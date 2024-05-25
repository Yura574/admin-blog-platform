import postStyle from "@pages/main-page/mainContent/posts/posts.module.scss";
import {NavLink} from "react-router-dom";
import notImg from "../../../../../assets/svg/noIcon.svg";
import {useAppDispatch, useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {useEffect} from "react";
import {getPostsForBlog} from "@redux/reducers/blog-reducer.ts";
import {Button} from "antd";


export const PostsForBlogs = ({blogId}: { blogId?: string }) => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.blogs.posts)
    console.log(123)
    useEffect(() => {
        console.log(blogId)
        blogId && dispatch(getPostsForBlog(blogId))
    }, [])
    return (
        <div>
            <div className={postStyle.postsWrapper}>
                {posts.map((post) => {
                    return (
                        <NavLink to={`${post.id}`} className={postStyle.postWrapper} key={post.id}>
                            <div>
                                <div className={postStyle.imgWrapper}><img src={notImg} alt="as"/>
                                </div>
                                <div className={postStyle.postDescriptionWrapper}>
                                    <div className={postStyle.imgSmallWrapper}><img src={notImg}
                                                                                    alt="as"/></div>
                                    <div>
                                        <div className={postStyle.title}>{post.title}</div>
                                        <div
                                            className={postStyle.description}>{post.shortDescription}</div>
                                        <div className={postStyle.date}>{post.createdAt}</div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )
                })}
                <div><Button>Show more</Button></div>
            </div>
        </div>
    )
}
