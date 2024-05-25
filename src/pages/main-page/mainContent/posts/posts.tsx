import {Select} from "antd";
import blogCSS from '../blogs/blogs.module.scss'
import postStyle from './posts.module.scss'
import notImg from '../../../../assets/svg/noIcon.svg'
import {useAppDispatch, useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {useEffect} from "react";
import {getPostsThunk} from "@redux/reducers/post-reducer.ts";
import {NavLink} from "react-router-dom";


export const Posts = () => {

    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.posts.posts)

    useEffect(() => {
        dispatch(getPostsThunk())
    }, [])
    return (
        <div className={blogCSS.layout}>
            <h2 className={blogCSS.title}>Posts</h2>
            <div className={postStyle.searchField}>
                <Select defaultValue={'asc'} options={[
                    {value: 'asc', label: 'New posts first'},
                    {value: 'desc', label: 'Old posts first'},
                ]}/>
            </div>
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
                                            className={postStyle.blogName}>{post.blogName}</div>
                                        <div className={postStyle.date}>{post.createdAt}</div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}
