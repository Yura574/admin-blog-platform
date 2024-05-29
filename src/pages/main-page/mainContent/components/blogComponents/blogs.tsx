import blogStyle from './blogs.module.scss'
import {Button, Dropdown, Modal, Space} from "antd";
import noIcon from '../../../../../assets/svg/noIcon.svg'
import {useEffect, useState} from "react";
import {deleteBlogThunk, getBlogsThunk} from "@redux/reducers/blog-reducer.ts";
import {useAppDispatch, useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {NavLink} from "react-router-dom";
import moreVert from '../../../../../assets/svg/more_vert.svg'
import deleteSvg from '../../../../../assets/svg/delete.svg'
import editSvg from '../../../../../assets/svg/edit.svg'
import {MouseEvent} from 'react'


export const Blogs = () => {

    const dispatch = useAppDispatch()
    const blogs = useAppSelector(state => state.blogs.blogs)


    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [blogId, setBlogId] = useState('')
    const handleCancel = () => {
        setIsDeleteModalOpen(false)
    }
    useEffect(() => {
        dispatch(getBlogsThunk())
    }, [dispatch])

    const openDeleteModal = (blogId: string) => {
        setIsDeleteModalOpen(true)
        setBlogId(blogId)
    }
    const closeDeleteModal = () => {
        setBlogId('')
        setIsDeleteModalOpen(false)
    }
    const deleteBlog = () => {
        dispatch(deleteBlogThunk(blogId))
        setIsDeleteModalOpen(false)
    }

    const more = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const getMenuItems = (blogId: string) => {
        return [
            {
                key: '1',
                label: (
                    <div className={blogStyle.dropdownWrapper}
                         onClick={() => openDeleteModal(blogId)}>
                        <img src={deleteSvg} alt="delete"/> Delete
                    </div>
                ),
            },
            {
                key: '2',
                label: (
                    <NavLink to={`${blogId}/edit`} className={blogStyle.dropdownWrapper}><img
                        src={editSvg} alt="delete"/>Edit </NavLink>
                ),
            },

        ]
    }

    return (
        <div className={blogStyle.layout}>
            <div className={blogStyle.title}>Blogs</div>

            <div className={blogStyle.addBlogWrapper}>
                <NavLink to={'add'}>
                    <button className={blogStyle.buttonPrimary}>Add blog</button>
                </NavLink>
            </div>

            <div className={blogStyle.blogsWrapper}>
                {blogs.map((blog) => {
                    const items = getMenuItems(blog.id);
                    return (
                        <NavLink to={blog.id} className={blogStyle.blogWrapper} key={blog.id}>
                            <div className={blogStyle.imgWrapper}><img src={noIcon} alt="icon"/>
                            </div>
                            <div className={blogStyle.blogDescriptionWrapper}>
                                <div className={blogStyle.blogTitleWrapper}>
                                    <div className={blogStyle.blogTitle}>{blog.name}</div>
                                    <div onClick={e => more(e)}>
                                        {/*<img src={moreVert} alt={'more'}/>*/}
                                        <Space direction="vertical">
                                            <Space wrap>
                                                <Dropdown menu={{items}} trigger={['click']}
                                                          placement="bottomRight"
                                                          arrow={{pointAtCenter: true}}>
                                                    <img src={moreVert} alt={'more'}/>
                                                </Dropdown>
                                            </Space>
                                        </Space>
                                    </div>
                                </div>
                                <div className={blogStyle.website}>{blog.websiteUrl}</div>
                                <div className={blogStyle.description}>{blog.description}</div>
                            </div>
                        </NavLink>
                    )
                })}

            </div>


            <div className={blogStyle.buttonWrapper}><Button>Show more</Button></div>
            <Modal open={isDeleteModalOpen}
                   onCancel={handleCancel}
                   centered
                   footer={
                       <div className={blogStyle.wrapButtonsModal}>
                           <button key={'1'} className={blogStyle.buttonPrimary}
                                   onClick={() => closeDeleteModal()}>No
                           </button>
                           <button key={'2'} className={blogStyle.buttonSecondary}
                                   onClick={deleteBlog}>Yes
                           </button>
                       </div>
                   }
            >
                <div className={blogStyle.titleModal}>Delete a blog</div>
                <div className={blogStyle.bodyModal}>Are you sure you want to delete this blog?
                </div>
            </Modal>
        </div>
    )
}
