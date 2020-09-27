import {combineReducers} from '@reduxjs/toolkit'
import {commonReducer} from "./slices/commonSlice";

const rootReducer = combineReducers({
    commonReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export default rootReducer