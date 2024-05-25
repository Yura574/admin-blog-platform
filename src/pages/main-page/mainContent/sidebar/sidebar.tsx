import {NavLink} from "react-router-dom";
import sidebar from './sidebar.module.scss'
import sprite from '../../../../assets/svg/sprite.svg'


export const Sidebar = () => {
    return (
        <div className={sidebar.layout}>
            <NavLink
                to="blogs"
                className={({ isActive }) => `${sidebar.navlink} ${isActive ? sidebar.activeNavlink : ''}`}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${sprite}#blogs`} />
                </svg>
                <div>Blogs</div>
            </NavLink>
            <NavLink
                to="posts"
                className={({ isActive }) => `${sidebar.navlink} ${isActive ? sidebar.activeNavlink : ''}`}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${sprite}#posts`} />
                </svg>
                <div>Posts</div>
            </NavLink>
        </div>
    )
}
