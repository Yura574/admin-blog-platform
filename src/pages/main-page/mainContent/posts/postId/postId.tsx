import blogCSS from "@pages/main-page/mainContent/blogs/blogs.module.scss";
import postStyle from './postId.module.scss'
import notImg from '../../../../../assets/svg/noIcon.svg'
import {useAppDispatch, useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {useEffect} from "react";
import {getPostByIdThunk} from "@redux/reducers/post-reducer.ts";
import {NavLink, useParams} from "react-router-dom";


export const PostId = () => {

    const dispatch = useAppDispatch()
    const {id} = useParams()

    const post = useAppSelector(state => state.posts.post)
    useEffect(() => {
        id && dispatch(getPostByIdThunk(id))
    }, [id, dispatch])
    return (
        <div className={blogCSS.layout}>
            <h2 className={blogCSS.title}>Posts</h2>

            <NavLink to={'/posts'} className={postStyle.backToPosts}>
                <div className={postStyle.arrowWrapper}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.99992 12.6667L6.93992 11.7267L3.88659 8.66671H14.6666V7.33337H3.88659L6.94659 4.27337L5.99992 3.33337L1.33325 8.00004L5.99992 12.6667Z"
                            fill="#1A1718"/>
                    </svg>
                </div>
                Back to posts
            </NavLink>

            <div className={postStyle.postWrapper}>
                <div className={postStyle.blogDescription}>
                    <div className={postStyle.imgWrapper}><img src={notImg} alt={''}/></div>
                    <div className={postStyle.blogName}>{post?.blogName}</div>
                </div>
                <div className={postStyle.postDescription}>
                    <div className={postStyle.postTitle}>{post?.title}</div>
                    <div className={postStyle.postDate}>{post?.createdAt}</div>
                </div>
                <div className={postStyle.mainImg}>
                    <img src={notImg} alt={'img'}/>
                </div>
                <div className={postStyle.content}>
                    {post?.content}
                </div>
            </div>
        </div>
    )
}
