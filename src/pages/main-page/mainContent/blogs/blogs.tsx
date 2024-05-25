import blogStyle from './blogs.module.scss'
import {Button} from "antd";
import noIcon from '../../../../assets/svg/noIcon.svg'
import {useEffect} from "react";
import {getBlogsThunk} from "@redux/reducers/blog-reducer.ts";
import {useAppDispatch, useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {NavLink} from "react-router-dom";


export const Blogs = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getBlogsThunk())
    }, [])
    const blogs = useAppSelector(state => state.blogs.blogs)
    return (
        <div className={blogStyle.layout}>
            <div className={blogStyle.title}>Blogs</div>

            <div>
               <NavLink to={'add'}> <button className={blogStyle.button}>Add blog</button></NavLink>
            </div>

            <div className={blogStyle.blogsWrapper}>
                {blogs.map((blog) => {
                    return (
                        <NavLink to={blog.id} className={blogStyle.blogWrapper} key={blog.id}>
                            <div className={blogStyle.imgWrapper}><img src={noIcon} alt="icon"/>
                            </div>
                            <div>
                                <div className={blogStyle.blogTitle}>{blog.name}</div>
                                <div className={blogStyle.website}>{blog.websiteUrl}</div>
                                <div className={blogStyle.description}>{blog.description}</div>
                            </div>
                        </NavLink>
                    )
                })}

            </div>


            <div className={blogStyle.buttonWrapper}><Button>Show more</Button></div>
        </div>
    )
}
