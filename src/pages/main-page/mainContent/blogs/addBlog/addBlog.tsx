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


export const AddBlog = () => {
    const [blogName, setBlogName] = useState('')
    const [website, setWebsite] = useState('')
    const [description, setDescription] = useState('')
    return (
        <div>
            <Breadcrumbs title={'Blogs'}/>
            <BackTo direction={'blogs'}/>
            <div className={blogStyle.mainImgWrapper}>
                <img src={notImg} alt={'img'}/>
            </div>
            <div>
                <FloatLabel label={'Blog name'} value={blogName}>
                    <Input
                        className={blogStyle.input}
                        value={blogName}
                        onChange={e => setBlogName(e.target.value)}
                    />
                </FloatLabel>
            </div>
            <div>
                <FloatLabel label={'Website'} value={website}>
                    <Input
                        className={blogStyle.input}
                        value={website}
                        onChange={e => setWebsite(e.target.value)}
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
                <button className={blogsStyle.button}>Add blog</button>
            </div>



        </div>
    )
}
