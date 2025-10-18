import { configureStore } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"

export const store = configureStore({
  reducer: {
    // your reducers go here
  },
})

export type RootState = ReturnType<typeof store.getState>
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector
