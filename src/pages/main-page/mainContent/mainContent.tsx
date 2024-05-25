import {Sidebar} from "@pages/main-page/mainContent/sidebar/sidebar.tsx";
import {Outlet} from "react-router-dom";
import mainContent from './mainContent.module.scss'


export const MainContent = ()=> {
    return (
        <div className={mainContent.layout}>
            <Sidebar/>

            <div className={mainContent.outlet}><Outlet/></div>
        </div>
    )
}
