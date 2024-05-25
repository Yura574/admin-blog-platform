import React from 'react';
import mainPage from './main-page.module.scss'
import {Header} from "@pages/main-page/header/header.tsx";
import {MainContent} from "@pages/main-page/mainContent/mainContent.tsx";


export const MainPage: React.FC = () => {

    return (
        <div className={mainPage.mainPage_layout}>
            <Header/>
            <MainContent/>
        </div>
    );
};
