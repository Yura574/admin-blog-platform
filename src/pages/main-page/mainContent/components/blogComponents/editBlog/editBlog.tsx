





import {Breadcrumbs} from "@pages/main-page/mainContent/components/breadcrumbs.tsx";
import {BackTo} from "@pages/main-page/mainContent/components/backTo.tsx";

import notImg from '../../../../../../assets/svg/noIcon.svg'
import blogStyle from "@pages/main-page/mainContent/components/blogComponents/blogId/blog.module.scss";

import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import {FloatLabel} from "@pages/main-page/mainContent/components/floatLabel/floatLabel.tsx";
import {useState} from "react";
import style from './addBlog.module.scss'
import {addBlog} from "@redux/reducers/blog-reducer.ts";
import {useAppDispatch, useAppSelector} from "@hooks/typed-react-redux-hooks.ts";
import {Navigate} from "react-router-dom";

type EditBlogType = {
    blogId: string
}

export const EditBlog = (props: EditBlogType) => {
    const dispatch = useAppDispatch()
    const blogs= useAppSelector(state => state.blogs.blogs)
    const blog = blogs.find(blog=> blog.id === props.blogId)

    const [name, setName] = useState<string>(blog?.name? blog.name : '')
    const [websiteUrl, setWebsiteUrl] = useState<string>(blog?.websiteUrl? blog.websiteUrl : '')
    const [description, setDescription] = useState<string>(blog?.description? blog.description : '')

    // const editBlogButton = () => {
    //     dispatch(addBlog({name, websiteUrl, description}))
    // }
    return (
        <div>
            <Breadcrumbs title={'Blogs'}/>
            <BackTo direction={'blogs'}/>
            <div className={blogStyle.mainImgWrapper}>
                <img src={notImg} alt={'img'}/>
            </div>
            <div>
                <FloatLabel label={'Blog name'} value={name}>
                    <Input
                        className={blogStyle.input}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </FloatLabel>
            </div>
            <div>
                <FloatLabel label={'Website'} value={websiteUrl}>
                    <Input
                        className={blogStyle.input}
                        value={websiteUrl}
                        onChange={e => setWebsiteUrl(e.target.value)}
                    />
                </FloatLabel>
            </div>
            <div>
                <FloatLabel label={'Blog Description'} value={description}>
                    <TextArea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </FloatLabel>
            </div>
            <div className={style.buttonWrapper}>
                <button
                    onClick={addBlogButton}
                >
                    Add blog
                </button>
            </div>


        </div>
    )
}
