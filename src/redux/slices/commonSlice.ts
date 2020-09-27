import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IRootState {
    name: string,
}

const initialState: IRootState = {
    name: ''
}

const commonSlice = createSlice({
    name: 'commonSlice',
    initialState,
    reducers: {
        changeName: (state, options: PayloadAction<string>) => {
            state.name = options.payload
        }
    }
})

const {changeName} = commonSlice.actions
const commonReducer = commonSlice.reducer

export {
    changeName,
    commonReducer
}