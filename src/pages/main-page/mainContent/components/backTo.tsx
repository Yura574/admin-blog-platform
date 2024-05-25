import {NavLink} from "react-router-dom";
import postStyle from "@pages/main-page/mainContent/posts/postId/postId.module.scss";

type BackToType = {
    direction: string
}

export const BackTo = (props: BackToType) => {
    return (
        <NavLink to={`/${props.direction}`} className={postStyle.backToPosts}>
            <div className={postStyle.arrowWrapper}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.99992 12.6667L6.93992 11.7267L3.88659 8.66671H14.6666V7.33337H3.88659L6.94659 4.27337L5.99992 3.33337L1.33325 8.00004L5.99992 12.6667Z"
                        fill="#1A1718"/>
                </svg>
            </div>
            Back to {props.direction}
        </NavLink>
    )
}
