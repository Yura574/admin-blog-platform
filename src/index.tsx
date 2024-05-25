import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {HashRouter, Route, Routes} from 'react-router-dom';

import {store} from '@redux/configure-store';
import {MainPage} from './pages';

import 'normalize.css';
import './index.css';
import './reset.css';
import {Blogs} from "@pages/main-page/mainContent/blogs/blogs.tsx";
import {Posts} from "@pages/main-page/mainContent/posts/posts.tsx";
import {PostId} from "@pages/main-page/mainContent/posts/postId/postId.tsx";
import {BlogId} from "@pages/main-page/mainContent/blogs/blogId/blogId.tsx";

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<MainPage/>}>
                        <Route path={'/blogs'} element={<Blogs/>}/>
                        <Route path={'/blogs/:id'} element={<BlogId/>}/>
                        <Route path={'/posts'} element={<Posts/>}/>
                        <Route path={'/posts/:id'} element={<PostId/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
);
