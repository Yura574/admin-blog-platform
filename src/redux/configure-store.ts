import { configureStore } from '@reduxjs/toolkit';
import {blogReducer} from "@redux/reducers/blog-reducer.ts";
import {commonReducer} from "@redux/reducers/common-reducer.ts";
import {postReducer} from "@redux/reducers/post-reducer.ts";

export const store = configureStore({
    reducer: {
        blogs:blogReducer,
        posts:postReducer,
        common: commonReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


//@ts-ignore
window.store = store
