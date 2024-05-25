import blogStyle from './blogs.module.scss'
import {Button, Input, Select} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import noIcon from '../../../../assets/svg/noIcon.svg'
import {useEffect, useState} from "react";
import {getBlogsThunk} from "@redux/reducers/blog-reducer.ts";
import {useAppDispatch, useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {NavLink} from "react-router-dom";


export const Blogs = () => {

    const dispatch = useAppDispatch()

    const [term, setTerm]= useState('')
    useEffect(()=> {
        dispatch(getBlogsThunk())
    }, [])
    const blogs = useAppSelector(state => state.blogs.blogs)
    return (
        <div className={blogStyle.layout}>
            <div className={blogStyle.title}>Blogs</div>
            <div className={blogStyle.searchField}>
                <Input value={term} onChange={e => setTerm(e.currentTarget.value)} placeholder={'search'} prefix={<SearchOutlined className={blogStyle.anticon}/>}/>
                <Select
                    defaultValue={'createdAt'}
                    className={blogStyle.select}
                        options={[
                            {value: 'createdAt', label: 'New blogs first'},
                            {value: 'asc', label: 'From A to Z'},
                            {value: 'desc', label: 'From Z to A'},

                        ]}/>


            </div>
            <div className={blogStyle.blogsWrapper}>
                {blogs.map((blog)=> {
                    return (
                        <NavLink to={blog.id} className={blogStyle.blogWrapper} key={blog.id}>
                            <div className={blogStyle.imgWrapper}><img src={noIcon} alt="icon"/></div>
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
