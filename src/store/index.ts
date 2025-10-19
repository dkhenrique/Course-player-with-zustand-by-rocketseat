import { configureStore } from "@reduxjs/toolkit"
import { useSelector, useDispatch } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import { player } from "./slices/player"

export const store = configureStore({
  reducer: {
    player,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
