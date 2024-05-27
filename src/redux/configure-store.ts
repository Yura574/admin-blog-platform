import { configureStore } from '@reduxjs/toolkit';
import {blogReducer} from "@redux/reducers/blog-reducer.ts";
import {commonReducer} from "@redux/reducers/common-reducer.ts";
import {postReducer} from "@redux/reducers/post-reducer.ts";
import {createBrowserHistory} from "history";
import {createReduxHistoryContext} from "redux-first-history";


const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });
export const store = configureStore({
    reducer: {
        blogs:blogReducer,
        posts:postReducer,
        common: commonReducer,
        router: routerReducer,
    },
    middleware:
        (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(routerMiddleware),
});

export const history = createReduxHistory(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


//@ts-ignore
window.store = store
