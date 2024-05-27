import {Breadcrumbs} from "@pages/main-page/mainContent/components/breadcrumbs.tsx";
import {BackTo} from "@pages/main-page/mainContent/components/backTo.tsx";

import notImg from '../../../../../assets/svg/noIcon.svg'
import blogStyle from "@pages/main-page/mainContent/blogs/blogId/blog.module.scss";
import blogsStyle from "@pages/main-page/mainContent/blogs/blogs.module.scss";

import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import {FloatLabel} from "@pages/main-page/mainContent/components/floatLabel/floatLabel.tsx";
import {useState} from "react";
import style from './addBlog.module.scss'
import {addBlog} from "@redux/reducers/blog-reducer.ts";
import {useAppDispatch} from "@hooks/typed-react-redux-hooks.ts";


export const AddBlog = () => {
    const dispatch = useAppDispatch()
    const [name, setName] = useState('')
    const [websiteUrl, setWebsiteUrl] = useState('')
    const [description, setDescription] = useState('')
    const addBlogButton = () => {
        dispatch(addBlog({name, websiteUrl, description}))
    }
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
                    className={blogsStyle.button}
                    onClick={addBlogButton}
                >
                    Add blog
                </button>
            </div>


        </div>
    )
}
