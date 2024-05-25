import {createSlice} from "@reduxjs/toolkit";


const initialState= {
    isPending: false
}

const commonSlice = createSlice({
    name: 'common-reducer',
    initialState,
    reducers: {
        setIsPending(state, action){
            state.isPending = action.payload
        }
    }
})

export const {setIsPending} = commonSlice.actions
export const commonReducer = commonSlice.reducer
