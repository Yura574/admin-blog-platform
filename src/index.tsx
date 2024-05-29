import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import { Route,  Routes} from 'react-router-dom';

import {history, store} from '@redux/configure-store';
import {MainPage} from './pages';

import 'normalize.css';
import './index.css';
import './reset.css';
import {Blogs} from "@pages/main-page/mainContent/components/blogComponents/blogs.tsx";
import {Posts} from "@pages/main-page/mainContent/posts/posts.tsx";
import {PostId} from "@pages/main-page/mainContent/posts/postId/postId.tsx";
import {BlogId} from "@pages/main-page/mainContent/components/blogComponents/blogId/blogId.tsx";
import {AddBlog} from "@pages/main-page/mainContent/components/blogComponents/addBlog/addBlog.tsx";
import {HistoryRouter} from "redux-first-history/rr6";

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                    <Routes>
                        <Route path='/' element={<MainPage/>}>
                            <Route path={'/blogs'} element={<Blogs/>}/>
                            <Route path={'/blogs/add'} element={<AddBlog/>}/>
                            <Route path={'/blogs/:id'} element={<BlogId/>}/>
                            <Route path={'/posts'} element={<Posts/>}/>
                            <Route path={'/posts/:id'} element={<PostId/>}/>
                        </Route>
                    </Routes>
            </HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
