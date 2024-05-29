import blogsStyle from "@pages/main-page/mainContent/components/blogComponents/blogs.module.scss";
import {Breadcrumb} from "antd";
import {NavLink, useLocation} from "react-router-dom";
import breadcrumbsStyle from "./breadcrumbs.module.scss"

type BreadcrumbsType = {
    title: string
}
export const Breadcrumbs = (props: BreadcrumbsType) => {
    const location = useLocation()
    const pathLocation = location.pathname.split('/').slice(2)

    const paths = pathLocation.map((path, index) => {
        return (
            pathLocation.length === index ?
                {
                    title: <NavLink to={`/${path}`}
                                    className={breadcrumbsStyle.breadcrumb}>{path}</NavLink>
                }
                : {
                    title: <div  className={breadcrumbsStyle.breadcrumb}>{path}</div>
                }
        )
    })
    return (
        <Breadcrumb separator={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M6.33301 11.3333L9.66634 7.99996L6.33301 4.66663V11.3333Z" fill="#797476"/>
            </svg>}
                    className={blogsStyle.title}
                    items={[{
                        className: breadcrumbsStyle.title,
                        title: <NavLink to={`/${props.title}`}
                        >{props.title}</NavLink>
                    }, ...paths]}
        >
            <Breadcrumb.Item> <NavLink to={`/${props.title.toLowerCase()}`}>{props.title}</NavLink></Breadcrumb.Item>
            {pathLocation.map((path) => {
                return (
                    <Breadcrumb.Item className={breadcrumbsStyle.breadcrumb} key={path}><NavLink
                        to={`${path}`}>{path}</NavLink></Breadcrumb.Item>
                )
            })}
        </Breadcrumb>
    )
}
